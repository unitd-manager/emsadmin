import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { Button, Col, Row, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import api from '../../constants/api';
import message from '../../components/Message';

const Test = () => {
  const [loading, setLoading] = useState(false);
  const [coupon, setCoupon] = useState([]);
  const [filterText, setFilterText] = useState('');
  const getAllCoupon = () => {
    setLoading(true);
    api
      .get('/product/getAllCoupon')
      .then((res) => {
        setCoupon(res.data.data || []);
      })
      .catch(() => {
        message('Failed to load product data.', 'error');
      })
      .finally(() => setLoading(false));
  };

  const changePublishStatus = (publishValue, id) => {
    setLoading(true);
    api
      .post('/commonApi/updatePublish', {
        tablename: 'coupon',
        idColumn: 'coupon_id ',
        idValue: id,
        value: parseInt(publishValue, 10),
      })
      .then((res) => {
        if (res.status === 200) {
          getAllCoupon();
        } else {
          message('Unable to edit record.', 'error');
        }
      })
      .catch(() => {
        message('Network connection error.');
      })
      .finally(() => setLoading(false));
  };

  

  useEffect(() => {
    getAllCoupon();
  }, []);

  const columns = [
    {
      name: 'ID',
      selector: (row) => row.coupon_id,
      sortable: true,
      width: '60px',
    },
    {
      name: 'Edit',
      cell: (row) => (
        <Link to={`/CouponEdit/${row.coupon_id}`}>
          <Icon.Edit2 />
        </Link>
      ),
      ignoreRowClick: true,
      button: true,
      width: '80px',
    },
    // {
    //   name: 'Product Code',
    //   selector: (row) => row.coupon_code ,
    //   sortable: true,
    // },
    {
      name: 'Title',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Max Uses',
      selector: (row) => row.max_uses,
      sortable: true,
    },
    {
      name: 'Is Active',
      selector: (row) => row.is_active,
      sortable: true,
    },
    {
      name: 'Valid From',
      selector: (row) => row.valid_from,
    },
    {
      name: 'Valid To',
      selector: (row) => row.valid_to,
    },
    // {
    //   name: 'Modified By',
    //   selector: (row) => row.modified_by,
    // },
    {
      name: 'Published',
      cell: (row) => (
        <span
          className={`badge ${row.published ? 'bg-success' : 'bg-danger'} cursor-pointer`}
          onClick={() => {
            const newStatus = row.published ? 0 : 1;
            const confirmMessage = `Are you sure you want to ${newStatus ? 'publish' : 'unpublish'} this product?`;
    
            if (window.confirm(confirmMessage)) {
              changePublishStatus(newStatus, row.coupon_id);
            }
          }}
          style={{ cursor: 'pointer' }}
        >
          {row.published ? 'Yes' : 'No'}
        </span>
      ),
    }
    
  ];

  const filteredItems = coupon.filter(
    (item) =>
      item.title?.toLowerCase().includes(filterText.toLowerCase()) ||
      item.coupon_code ?.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="MainDiv">
      <div className="pt-xs-25">
        <BreadCrumbs />

        <Row className="mb-3">
          <Col md={4}>
            <Input
              type="text"
              placeholder="Search by Title..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </Col>
          <Col className="d-flex gap-2">
            <Link to="/CouponDetails">
              <Button color="success" className="shadow-none">
                <Icon.PlusCircle className="me-1" />
                New
              </Button>
            </Link>
            {/* <a
              href="http://43.228.126.245/smartco-api/storage/excelsheets/Product.xlsx"
              download
            >
              <Button color="primary" className="shadow-none">
                Sample
              </Button>
            </a> */}
          </Col>
        </Row>

        <DataTable
          description={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#5a3372',
                fontSize: '25px',
                fontWeight: 600,
              }}
            >
              <Icon.Users /> Coupon List
            </div>
          }
          columns={columns}
          data={filteredItems}
          pagination
          progressPending={loading}
          highlightOnHover
          striped
          persistTableHead
        />
      </div>
    </div>
  );
};

export default Test;
