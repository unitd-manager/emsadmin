import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { Button, Input, Col, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import moment from 'moment';
import CommonTable from '../../components/CommonTable';
import api from '../../constants/api';
import Publish from '../../components/Publish';
import SortOrder from '../../components/SortOrder';
import message from '../../components/Message';
import ExportReport from '../../components/Report/ExportReport';

const Content = () => {
  const [content, setContent] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [paymentStatusFilter, setPaymentStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const exportValue = 'Content';
  const today = moment().format('YYYY-MM-DD');

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
    getContent();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [fromDate, toDate, paymentStatusFilter, searchTerm]);

  const filteredReservations = content
    ?.filter((item) => {
      const bookingDate = item.content_date ? moment(item.content_date).format('YYYY-MM-DD') : '';
      const fromDateValid = !fromDate || (bookingDate && bookingDate >= fromDate);
      const toDateValid = !toDate || (bookingDate && bookingDate <= toDate);
      const statusValid =
        paymentStatusFilter === '' || item.published?.toString() === paymentStatusFilter;

      const search = searchTerm.toLowerCase();
      const titleMatch = item.title?.toLowerCase().includes(search);
      const typeMatch = item.content_type?.toLowerCase().includes(search);
      const categoryMatch = item.category_title?.toLowerCase().includes(search);

      return fromDateValid && toDateValid && statusValid && (titleMatch || typeMatch || categoryMatch);
    })
    .sort((a, b) => {
      const dateA = moment(a.content_date).format('YYYY-MM-DD');
      const dateB = moment(b.content_date).format('YYYY-MM-DD');

      if (dateA === today) return -1;
      if (dateB === today) return 1;

      return moment(dateB).diff(moment(dateA));
    });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredReservations.slice(indexOfFirstItem, indexOfLastItem);

  const columns = [
    { name: 'SN', selector: 's_no' },
    { name: 'Title', selector: 'title' },
    { name: 'Section', selector: 'section_title' },
    { name: 'Category', selector: 'category_title' },
    { name: 'Content Date', selector: 'content_date' },
    { name: 'Content Type', selector: 'content_type' },
    { name: 'Published', selector: 'published' },
  ];

  const Contentcolumns = [
    {
      name: 'SN',
      grow: 0,
      wrap: true,
      selector: 's_no',
      width: '4%',
    },
    {
      name: <Icon.Edit />,
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
          <Icon.Calendar />
          <span>Content Date</span>
        </div>
      ),
      selector: 'content_date',
      sortable: true,
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
      grow: 3,
    },
  ];

  return (
    <div className="MainDiv pt-xs-25">
      <div className="d-flex align-items-center mb-3 flex-wrap" style={{ gap: '10px' }}>
        <Label>From:</Label>
        <Input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          style={{ width: '150px' }}
        />

        <Label>To:</Label>
        <Input
          type="date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          style={{ width: '150px' }}
        />

        <Label style={{ whiteSpace: 'nowrap' }}>Search:</Label>
        <Input
          type="text"
          placeholder="Search by Title, Type, Category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '250px' }}
        />

        <Label>Publish:</Label>
        <Input
          type="select"
          value={paymentStatusFilter}
          onChange={(e) => setPaymentStatusFilter(e.target.value)}
          style={{ width: '150px' }}
        >
          <option value="">All</option>
          <option value="1">Published</option>
          <option value="0">Unpublished</option>
        </Input>

        <Button
          color="secondary"
          onClick={() => {
            setFromDate('');
            setToDate('');
            setPaymentStatusFilter('');
            setSearchTerm('');
          }}
        >
          Reset
        </Button>

        <Col>
          <ExportReport columns={columns} data={filteredReservations} exportValue={exportValue} />
        </Col>
      </div>

      <CommonTable
        title={
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
            {Contentcolumns.map((cell) => (
              <td key={typeof cell.name === 'string' ? cell.name : Math.random()}>{cell.name}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((element, index) => (
              <tr key={element.content_id}>
                <td>{indexOfFirstItem + index + 1}</td>
                <td>
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
                  />
                </td>
                <td>{element.section_title}</td>
                <td>{element.category_title}</td>
                <td>{element.content_date?moment(element.content_date).format('DD-MM-YYYY'):''}</td>
                <td>{element.content_type}</td>
                <td>
                  <Publish
                    idColumn="content_id"
                    tablename="content"
                    idValue={element.content_id.toString()}
                    value={element.published}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </CommonTable>

      <div className="d-flex justify-content-center mt-3">
        <Button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="me-2"
        >
          Prev
        </Button>
        <span className="align-self-center">
          Page {currentPage} of {Math.ceil(filteredReservations.length / itemsPerPage)}
        </span>
        <Button
          disabled={currentPage === Math.ceil(filteredReservations.length / itemsPerPage)}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="ms-2"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Content;
