import React from 'react';
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import ComponentCard from '../ComponentCard';

export default function ContentMoreDetails({
  contentDetails,
  handleInputs,
  }) {
  ContentMoreDetails.propTypes = {
    contentDetails: PropTypes.object,
    handleInputs: PropTypes.any,
     };
  return (
    <div>
   <ComponentCard title="Magazine Details" creationModificationDate={contentDetails}>
            <ToastContainer></ToastContainer>
            <Row>
              <Col md="3">
                <FormGroup>
                  <Label> Title<span className="required"> *</span>  </Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.title}
                    name="title"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Year<span className="required"> *</span>  </Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.year}
                    name="year"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Month<span className="required"> *</span>  </Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={contentDetails && contentDetails.month}
                    name="month"
                  />
                </FormGroup>
              </Col>
           
            </Row>
          </ComponentCard>
    </div>
  );
}
