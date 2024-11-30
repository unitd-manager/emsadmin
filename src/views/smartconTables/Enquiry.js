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

const Enquiry = () => {
  const [enquiry, setEnquiry] = useState(null);
  const [loading, setLoading] = useState(false);

  //  get enquiry
  const getenquiry = () => {
    api
      .get('/enquiry/getEnquiry')
      .then((res) => {
        setEnquiry(res.data.data);
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
        console(enquiry);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getenquiry();
  }, []);

  const columns = [
    {
      name: 'Id',
      selector: 'enquiry_id',
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
          <span>Name</span>
        </div>
      ),
      selector: 'first_name',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.Mail />
          <span>Email</span>
        </div>
      ),
      selector: 'email',
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.MessageSquare />
          <span>Comments</span>
        </div>
      ),
      selector: 'comments',
      sortable: true,
      grow: 2,
      wrap: true,
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
    <div className="MainDiv">
      <div className=" pt-xs-25">
        <BreadCrumbs />

        <CommonTable
          loading={loading}
          title={
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#5a3372', fontSize: '25px', fontWeight:600 }}>
              <Icon.Grid /> Enquiry List
            </div>
          }
          Button={
            <Link to="/EnquiryDetails">
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
            {enquiry &&
              enquiry.map((element) => {
                return (
                  <tr key={element.enquiry_id}>
                    <td>{element.enquiry_id}</td>
                    <td>
                      <Link to={`/EnquiryEdit/${element.enquiry_id}`} style={{ color: '#b92ad5' }}>
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>{element.first_name}</td>
                    <td>{element.email}</td>
                    <td>{element.comments}</td>
                    <td>
                      <Publish
                        idColumn="enquiry_id"
                        tablename="enquiry"
                        idValue={element.enquiry_id.toString()}
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

export default Enquiry;
