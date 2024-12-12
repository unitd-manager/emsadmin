import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
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
import message from '../../components/Message';

const Questions = () => {
  // State to store content
  const [content, setContent] = useState(null);

  // Fetching data from API
  const getContent = () => {
    api
      .get('/content/getQuestions')
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

  // Column configurations
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
          <span>Questions</span>
        </div>
      ),
      selector: 'questions',
      sortable: true,
      grow: 0,
      wrap: true,
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
      grow: 0,
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.CreditCard />
          <span>Created by</span>
        </div>
      ),
      selector: 'created_by',
      sortable: true,
      grow: 0,
      wrap: false, // Prevent wrapping
      cell: (row) => (
        <div
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          title={row.created_by} // Tooltip to show full value
        >
          {row.created_by}
        </div>
      ),
    },
    {
      name: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon.CreditCard />
          <span>Modified by</span>
        </div>
      ),
      selector: 'modified_by',
      sortable: true,
      grow: 0,
      wrap: false, // Prevent wrapping
      cell: (row) => (
        <div
          style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          title={row.modified_by} // Tooltip to show full value
        >
          {row.modified_by}
        </div>
      ),
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
    <div className="MainDiv pt-xs-25">
      <BreadCrumbs />
      <CommonTable
        title={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#5a3372',
              fontSize: '15px', // Adjusted font size
              fontWeight: 400,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            <Icon.Users /> Q & A
          </div>
        }
        Button={
          <Link to="/QuestionDetails">
            <Button
              color="success"
              className="shadow-none"
              style={{
                fontSize: '14px',
                padding: '8px 16px',
              }}
            >
              <Icon.PlusCircle style={{ marginRight: '8px' }} /> New
            </Button>
          </Link>
        }
        style={{
          width: '100%',
          minWidth: '600px',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '16px',
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#ebdcf6' }}>
            {Contentcolumns.map((cell) => (
              <td key={cell.name}>{cell.name}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {content &&
            content.map((element, index) => (
              <tr key={element.question_id}>
                <td>{index + 1}</td>
                <td>
                  <Link
                    to={`/QuestionsEdit/${element.question_id}`}
                    style={{ color: '#b92ad5' }}
                  >
                    <Icon.Edit2 />
                  </Link>
                </td>
                <td>{element.questions}</td>
                <td>
                  <SortOrder
                    idValue={element.question_id}
                    idColumn="question_id"
                    tablename="questions"
                    value={element.sort_order}
                  />
                </td>
                <td>{element.created_by}</td>
                <td>{element.modified_by}</td>
                <td>
                  <Publish
                    idColumn="question_id"
                    tablename="questions"
                    idValue={element.question_id.toString()}
                    value={element.published}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </CommonTable>
    </div>
  );
};

export default Questions;
