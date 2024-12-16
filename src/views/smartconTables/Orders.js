import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import $ from 'jquery';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons/js/buttons.flash';
import 'datatables.net-buttons/js/buttons.html5';
import 'datatables.net-buttons/js/buttons.print';
import { Link } from 'react-router-dom';
import Publish from '../../components/Publish';
import api from '../../constants/api';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import CommonTable from '../../components/CommonTable';

const Orders = () => {
  //All State Variable
  const [finance, setFinance] = useState(null);
  const [loading, setLoading] = useState(false);

  //getting data from Finance
  const getFinance = () => {
    api
      .get('/orders/getOrders')
      .then((res) => {
        setFinance(res.data.data);
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
    getFinance();
  }, []);

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
      cell: () => (
        <Link to="/">
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
          <span>Id</span>
        </div>
      ),
      selector: 'order_id',
      sortable: true,
      grow: 0,
      wrap: true,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.CreditCard />
          <span>Customer Name</span>
        </div>
      ),
      selector: 'cust_first_name',
      sortable: true,
      grow: 0,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.CreditCard />
          <span>Order Date</span>
        </div>
      ),
      selector: 'order_date',
      sortable: true,
      width: 'auto',
      grow: 3,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.CreditCard />
          <span>Delivery Date</span>
        </div>
      ),
      selector: 'delivery_date',
      sortable: true,
      width: 'auto',
    },

    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.CreditCard />
          <span>Status</span>
        </div>
      ),
      selector: 'order_status',
      sortable: true,
      grow: 2,
      wrap: true,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.CreditCard />
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
        title={
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#5a3372', fontSize: '25px', fontWeight:600 }}>
            <Icon.Users /> loading={loading} Orders List
          </div>
        }>
          <thead>
          <tr style={{ backgroundColor: '#ebdcf6' }}>
              {columns.map((cell) => {
                return <td key={cell.name}>{cell.name}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {finance &&
              finance.map((element, index) => {
                return (
                  <tr key={element.order_id}>
                    <td>{index + 1}</td>
                    <td>
                      <Link to={`/OrdersEdit/${element.order_id}`}>
                        <Icon.Edit2 />
                      </Link>
                    </td>
                    <td>{element.order_id}</td>
                    <td>{element.cust_first_name}</td>
                    <td>{element.order_date}</td>
                    <td>{element.delivery_date}</td>
                    <td>{element.order_status}</td>
                    <td>
                      <Publish
                        idColumn="order_id"
                        tablename="orders"
                        idValue={element.order_id.toString()}
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

export default Orders;
