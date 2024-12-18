import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { Button } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import $ from 'jquery';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import api from '../../constants/api';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';
import Publish from '../../components/Publish';
import SortOrder from '../../components/SortOrder';

const SectionDetails = () => {
  //Const Variables
  const [section, setSection] = useState(null);
  const [loading, setLoading] = useState(false);

  // Navigation and Parameter Constants
  const { id } = useParams();

  // get section
  const getSection = () => {
    api
      .get('/section/getSection')
      .then((res) => {
        setSection(res.data.data);
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
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getSection();
  }, [id]);
  //  stucture of Section list view
  const columns = [
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
      ),        selector: 'section_title',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.Cast />
          <span>Groups</span>
        </div>
      ),  
      selector: 'groups',
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.Bell />
          <span>Button Position</span>
        </div>
      ),  
      selector: 'button_position',
      sortable: true,
      grow: 0,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.Hash />
          <span>ID</span>
        </div>
      ),  
      selector: 'section_id',
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
      grow: 2,
      width: 'auto',
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.Monitor />
          <span>Mobile Menu</span>
        </div>
      ),  
      selector: 'showmenu_inmobile',
      sortable: true,
      grow: 2,
      width: 'auto',
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.PlusCircle />
          <span>Website Menu</span>
        </div>
      ),  
      selector: 'showmenu_inweb',
      sortable: true,
      grow: 2,
      width: 'auto',
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.CreditCard />
          <span>Order</span>
        </div>
      ),  
      selector: 'sort_order',
      sortable: true,
      grow: 2,
      width: 'auto',
    },
  ];

  return (
    <div className="MainDiv">
      <div className=" pt-xs-25">
        <BreadCrumbs />
        {/* Section Add new button */}

        <CommonTable
          loading={loading}
          title="Section List"
          Button={
            <Link to="/SectionDetails">
              <Button color="primary" className="shadow-none">
                Add New
              </Button>
            </Link>
          }
        >
          <thead>
            <tr>
              {columns.map((cell) => {
                return <td key={cell.name}>{cell.name}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {section &&
              section.map((element, index) => {
                return (
                  <tr key={element.section_id}>
                    <td>{index + 1}</td>
                    <td>
                      <Link to={`/SectionEdit/${element.section_id}`}>
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>{element.section_title}</td>
                    <td>{element.groups}</td>
                    <td>{element.button_position}</td>
                    <td>{element.section_id}</td>
                    <td>
                      <Publish
                        idColumn="section_id"
                        tablename="section"
                        idValue={element.section_id.toString()}
                        value={element.published}
                      ></Publish>
                    </td>
                    <td>{element.showmenu_inmobile}</td>
                    <td>{element.showmenu_inweb}</td>
                    <td>
                      <SortOrder
                        idValue={element.section_id}
                        idColumn="section_id"
                        tablename="section"
                        value={element.sort_order}
                      ></SortOrder>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </CommonTable>
        {/* setion table */}
      </div>
    </div>
  );
};

export default SectionDetails;
