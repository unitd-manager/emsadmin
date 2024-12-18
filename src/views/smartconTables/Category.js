import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.flash';
import Publish from '../../components/Publish';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import api from '../../constants/api';
import SortOrder from '../../components/SortOrder';


const Category = () => {
  //state variable
  const [category, setCategory] = useState();
   //get category data
  const getCategory = () => {
    api.get('/category/getCategory').then((res) => {
      setCategory(res.data.data);
      setTimeout(() => {
        $('#example').DataTable({
          pagingType: 'full_numbers',
          pageLength: 20,
          processing: true,
          dom: 'Bfrtip',
          buttons: [
            {
              extend: 'print',
              text: 'Print',
              className: 'shadow-none btn btn-primary',
            },
          ],
        });
      }, 1000);
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  //  stucture of Category list view
  const columns = [
    {
      name: '#',
      selector: '',
      grow: 0,
      wrap: true,
      width: '4%',
    },
    {
      name: (
        <div>
          <Icon.Edit />
        </div>
      ),
      selector: 'edit',
      cell: () => <Icon.Edit2 />,
      grow: 0,
      width: 'auto',
      button: true,
      sortable: false,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.CreditCard />
          <span>Title</span>
        </div>
      ),
      selector: 'title',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.Octagon />
          <span>Order</span>
        </div>
      ),
      selector: 'sort_order',
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.Disc />
          <span>Category Type</span>
        </div>
      ),
      selector: 'category_type',
      sortable: true,
      grow: 0,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.MinusCircle />
          <span>Section</span>
        </div>
      ),
      selector: 'title',
      sortable: true,
      width: 'auto',
      grow: 2,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.Hash />
          <span>ID</span>
        </div>
      ),
      selector: 'category_id',
      sortable: true,
      grow: 2,
      width: 'auto',
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.Eye />
          <span>Published</span>
        </div>
      ),
      selector: 'published',
      sortable: true,
      grow: 2,
      width: 'auto',
    },
  ];

  return (
    <div className="MainDiv">
      <div className=" pt-xs-25">
        <BreadCrumbs />

        <CommonTable
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#5a3372', fontSize: '25px', fontWeight:600 }}>
            <Icon.Users /> Category List
          </div>
        }
        Button={
            <Link to="/CategoryDetails">
              <Button color="success" className="shadow-none">
                <Icon.PlusCircle style={{ marginRight: '8px' }} /> New
              </Button>
          </Link>
          }
        >
          <thead>
          <tr style={{ backgroundColor: '#ebdcf6' }}>
              {columns.map((cell) => {
                return <td key={cell.name}>{cell.name}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {category &&
              category.map((element, index) => {
                return (
                  <tr key={element.category_id}>
                    <td>{index + 1}</td>
                    <td>
                      <Link to={`/CategoryEdit/${element.category_id}`}>
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>{element.category_title}</td>
                    <td>
                      <SortOrder
                        idValue={element.category_id}
                        idColumn="category_id"
                        tablename="category"
                        value={element.sort_order}
                      ></SortOrder>
                    </td>
                    <td>{element.category_type}</td>
                    <td>{element.section_title}</td>
                    <td>{element.category_id}</td>
                    <td>
                      <Publish
                        idColumn="category_id"
                        tablename="category"
                        idValue={element.category_id.toString()}
                        value={element.published}
                      ></Publish>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </CommonTable>
      </div>
    </div>
  );
};
export default Category;
