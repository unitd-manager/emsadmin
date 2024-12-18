import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import api from '../../constants/api';
import Publish from '../../components/Publish';
import SortOrder from '../../components/SortOrder';
import message from '../../components/Message';

const Content = () => {
  //Const Variables
  const [content, setContent] = useState(null);

  //getting data from content
  const getContent = () => {
    api
      .get('/content/getContent')
      .then((res) => {
        setContent(res.data.data);
      })
      .catch(() => {
        message('Cannot get Content Data', 'error');
      });
  };
  useEffect(() => {
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

    getContent();
  }, []);
  //Structure of Content List view
  const Contentcolumns = [
    {
      name: '#',
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
      cell: () => (
        <Link to="/">
          {' '}
          <Icon.Edit3 />
        </Link>
      ),
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
      grow: 0,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.MinusCircle />
          <span>Section</span>
        </div>
      ),
      selector: 'section_title',
      sortable: true,
      width: 'auto',
      grow: 3,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.Disc />
          <span>Category</span>
        </div>
      ),
      selector: 'category_title',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.Star />
          <span>Sub Category</span>
        </div>
      ),
      selector: 'sub_category_title',
      sortable: true,
      grow: 0,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.Calendar />
          <span>Content Date</span>
        </div>
      ),
      selector: 'content_date',
      sortable: true,
      width: 'auto',
      grow: 3,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.MinusSquare />
          <span>Content Type</span>
        </div>
      ),
      selector: 'content_type',
      sortable: true,
      width: 'auto',
      grow: 3,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.Hash />
          <span>ID</span>
        </div>
      ),
      selector: 'content_id ',
      sortable: true,
      width: 'auto',
      grow: 3,
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
      width: 'auto',
      grow: 3,
    },
  ];

  return (
    <div className="MainDiv  pt-xs-25">
      <BreadCrumbs />

      <CommonTable
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#5a3372', fontSize: '25px', fontWeight:600 }}>
            <Icon.Users /> Content List
          </div>
        }
        Button={
          <Link to="/ContentDetails">
            <Button color="success" className="shadow-none">
                <Icon.PlusCircle style={{ marginRight: '8px' }} /> New
              </Button>
          </Link>
        }
      >
        <thead>
        <tr style={{ backgroundColor: '#ebdcf6' }}>
            {Contentcolumns.map((cell) => {
              return <td key={cell.name}>{cell.name}</td>;
            })}
          </tr>
        </thead>
        <tbody>
          {content &&
            content.map((element, index) => {
              return (
                <tr key={element.content_id}>
                  <td>{index + 1}</td>
                  <td>
                    {' '}
                    <Link to={`/ContentEdit/${element.content_id}`}>
                      <Icon.Edit2 />
                    </Link>
                  </td>
                  <td>{element.title}</td>
                  <td>
                    <SortOrder
                      idValue={element.content_id}
                      idColumn="content_id"
                      tablename="content"
                      value={element.sort_order}
                    ></SortOrder>
                  </td>
                  <td>{element.section_title}</td>
                  <td>{element.category_title}</td>
                  <td>{element.sub_category_title}</td>
                  <td>{moment(element.content_date).format('YYYY-MM-DD')}</td>
                  <td>{element.content_type}</td>
                  <td>{element.content_id}</td>
                  <td>
                    <Publish
                      idColumn="content_id"
                      tablename="content"
                      idValue={element.content_id.toString()}
                      value={element.published}
                    ></Publish>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </CommonTable>
    </div>
  );
};
export default Content;
