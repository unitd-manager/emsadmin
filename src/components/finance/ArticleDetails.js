import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import ComponentCard from '../ComponentCard';
import ArticleEdit from '../../views/EditData/ArticleEdit';

export default function OrderProductDetails({ editArticles }) {
  OrderProductDetails.propTypes = {
    editArticles: PropTypes.array,
  };
  
  const [updateAricles, setUpdateArticles] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleEditClick = (element) => {
    setSelectedArticle(element);
    setUpdateArticles(true);
  };

  const invoiceTableColumns = [
    {
      name: '#',
      grow: 0,
      wrap: true,
      width: '4%',
    },
    {
      name: 'Edit',
      selector: 'edit',
      cell: (row) => (
        <Link to="#" onClick={() => handleEditClick(row)}>
          <Icon.Edit3 />
        </Link>
      ),
      grow: 0,
      width: 'auto',
      button: true,
      sortable: false,
    },
    { name: 'Title' },
    { name: 'Author' },
  ];

  return (
    <ComponentCard>
      <Form>
        <div className="container">
          <Table id="example">
            <thead>
              <tr>
                {invoiceTableColumns.map((cell) => {
                  return <td key={cell.name}>{cell.name}</td>;
                })}
              </tr>
            </thead>
            <tbody>
              {editArticles &&
                editArticles.map((element, index) => {
                  return (
                    <tr key={element.article_id}>
                      <td>{index + 1}</td>
                      <td>
                        <div className='anchor'>
                         <span onClick={() => handleEditClick(element)}>
                            Edit
                          </span>
                        </div>
                      </td>
                      <td>{element.title}</td>
                      <td>{element.author}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </Form>

      {updateAricles && selectedArticle && (
        <ArticleEdit
          updateAricles={updateAricles}
          setUpdateArticles={setUpdateArticles}
          articleId={selectedArticle.article_id}
        />
      )}
    </ComponentCard>
  );
}