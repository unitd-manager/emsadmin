import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import Publish from '../../components/Publish';
import api from '../../constants/api';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';


const Orders = () => {
  const [finance, setFinance] = useState([]);
  const [filteredFinance, setFilteredFinance] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetching orders
  const getFinance = () => {
    setLoading(true);
    api
      .get('/orders/getOrders')
      .then((res) => {
        setFinance(res.data.data);
        setFilteredFinance(res.data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getFinance();
  }, []);

  // Search handler
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const result = finance.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(value)
      )
    );
    setFilteredFinance(result);
  };

  // DataTable columns
  const columns = [
    {
      name: '#',
      cell: (row, index) => index + 1,
      width: '60px',
    },
    {
      name: <Icon.Edit />,
      cell: (row) => (
        <Link to={`/OrdersEdit/${row.order_id}`}>
          <Icon.Edit3 />
        </Link>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: '80px',
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.Hash />
          <span>Id</span>
        </div>
      ),
      selector: (row) => row.order_id,
      sortable: true,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.CreditCard />
          <span>Customer Name</span>
        </div>
      ),
      selector: (row) => row.first_name,
      sortable: true,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.Calendar />
          <span>Order Date</span>
        </div>
      ),
      selector: (row) => row.order_date,
      sortable: true,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.Cast />
          <span>Delivery Date</span>
        </div>
      ),
      selector: (row) => row.delivery_date,
      sortable: true,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.PlusCircle />
          <span>Payment Method</span>
        </div>
      ),
      selector: (row) => row.payment_method,
      sortable: true,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.Eye />
          <span>Published</span>
        </div>
      ),
      cell: (row) => (
        <Publish
          idColumn="order_id"
          tablename="orders"
          idValue={row.order_id.toString()}
          value={row.published}
        />
      ),
    },
  ];

  return (
    <div className="MainDiv">
      <div className="pt-xs-25">
        <BreadCrumbs />
        <DataTable
          title={
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#5a3372', fontSize: '25px', fontWeight: 600 }}>
              <Icon.Users /> Orders List
            </div>
          }
          columns={columns}
          data={filteredFinance}
          pagination
          progressPending={loading}
          highlightOnHover
          persistTableHead
          responsive
          subHeader
          subHeaderComponent={
            <input
              type="text"
              placeholder="Search orders..."
              className="form-control"
              onChange={handleSearch}
              style={{ maxWidth: '300px' }}
            />
          }
        />
      </div>
    </div>
  );
};

export default Orders;
