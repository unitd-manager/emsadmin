import React, { useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import message from '../../components/Message';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import api from '../../constants/api';
import creationdatetime from '../../constants/creationdatetime';

const BroadCastDetails = () => {
  // All state variables
  const [categoryForms, setCategoryForms] = useState({
    title: '',
  });

  // Navigation and Parameter Constants
  const navigate = useNavigate();

  //All Functions/Methods

  //Setting Data in ValueList Details
  const handleInputs = (e) => {
    setCategoryForms({ ...categoryForms, [e.target.name]: e.target.value });
  };

  //Api call for insert SubCategory Data
  const insertBroadcast = () => {
    categoryForms.creation_date = creationdatetime;
    if (categoryForms.title !== '') {
      api
        .post('/content/insertBroadcast', categoryForms)
        .then((res) => {
          const insertedDataId = res.data.data.insertId;
          message('BroadCastDetails inserted successfully.', 'success');
          setTimeout(() => {
            navigate(`/BroadCastsEdit/${insertedDataId}`);
          }, 300);
        })
        .catch(() => {
          message('Unable to edit record.', 'error');
        });
    } else {
      message('Please fill all required fields', 'warning');
    }
  };

  return (
    <div>
      <BreadCrumbs />
      <ToastContainer />
      <Row>
        <Col md="6" xs="12">
          {/* Key Details */}
          <ComponentCard title="Key Details">
            <Form>
              <FormGroup>
                <Row>
                  <Col md="10">
                    <Label>
                      Title<span className="required"> *</span>
                    </Label>
                    <Input
                      type="text"
                      name="title"
                      onChange={(e) => {
                        handleInputs(e);
                      }}
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <div className="pt-3 mt-3 d-flex align-items-center gap-2">
                    <Button
                      color="primary"
                      type="button"
                      className="btn mr-2 shadow-none"
                      onClick={() => {
                        insertBroadcast();
                      }}
                    >
                      Save & Continue
                    </Button>
                    <Button
                      type="submit"
                      className="btn btn-dark shadow-none"
                      onClick={(e) => {
                        if (window.confirm('Are you sure you want to cancel? ')) {
                          navigate('/Category');
                        } else {
                          e.preventDefault();
                        }
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                </Row>
              </FormGroup>
            </Form>
          </ComponentCard>
        </Col>
      </Row>
    </div>
  );
};
export default BroadCastDetails;
