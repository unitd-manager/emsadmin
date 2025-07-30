import React from 'react';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import moment from 'moment';
import { ToastContainer } from 'react-toastify';
import ComponentCard from '../ComponentCard';

export default function CouponDetail({ CouponDetails, handleInputs }) {
  CouponDetail.propTypes = {
    CouponDetails: PropTypes.object,
    handleInputs: PropTypes.func,
  };
  return (
    <>
      <Form>
        <FormGroup>
          <ComponentCard title="Coupon Details" creationModificationDate={CouponDetails}>
            <ToastContainer></ToastContainer>
            <Row>
              {/* <Col md="3">
                <FormGroup>
                  <Label> Item code </Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={CouponDetails && CouponDetails.product_code}
                    name="product_code"
                  />
                </FormGroup>
              </Col> */}
              <Col md="3">
                <FormGroup>
                  <Label>Title</Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={CouponDetails && CouponDetails.title}
                    name="title"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Discount Type </Label>
                  <Input
                    type="select"
                    onChange={handleInputs}
                    value={CouponDetails && CouponDetails.discount_type }
                    name="discount_type "
                  >
                    <option defaultValue="selected"> Please Select </option>
                    <option value="percentage">Percentage</option>
                    <option value="fixed">Fixed</option>
                    <option value="no of counts">No of counts</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Valid From</Label>
                  <Input
                    type="date"
                    onChange={handleInputs}
                    value={CouponDetails && moment(CouponDetails.valid_from).format('YYYY-MM-DD')}
                    name="valid_from"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label>Valid To</Label>
                  <Input
                    type="date"
                    onChange={handleInputs}
                    value={CouponDetails && moment(CouponDetails.valid_to).format('YYYY-MM-DD')}
                    name="valid_to"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Max Uses </Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={CouponDetails && CouponDetails.max_uses}
                    name="max_uses"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Times Used </Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={CouponDetails && CouponDetails.times_used}
                    name="times_used"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Min Order </Label>
                  <Input
                    type="text"
                    onChange={handleInputs}
                    value={CouponDetails && CouponDetails.min_order_amount }
                    name="min_order_amount "
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label> Coupon Code </Label>
                  <Input
                    type="textarea"
                    onChange={handleInputs}
                    value={CouponDetails && CouponDetails.description_short}
                    name="description_short"
                  />
                </FormGroup>
              </Col>
              <Col md="3">
                <Label>Is Active</Label>
                <FormGroup>
                  <Label>Yes</Label>
                  &nbsp;
                  <Input
                    name="is_active"
                    value="1"
                    type="radio"
                    defaultChecked={CouponDetails && CouponDetails.is_active === 1 && true}
                    onChange={handleInputs}
                  />
                  &nbsp; &nbsp;
                  <Label>No</Label>
                  &nbsp;
                  <Input
                    name="is_active"
                    value="0"
                    type="radio"
                    defaultChecked={CouponDetails && CouponDetails.is_active === 0 && true}
                    onChange={handleInputs}
                  />
                </FormGroup>
              </Col>

              <Col md="3">
                <Label>Published</Label>
                <FormGroup>
                  <Label>Yes</Label>
                  &nbsp;
                  <Input
                    name="published"
                    value="1"
                    type="radio"
                    defaultChecked={CouponDetails && CouponDetails.published === 1 && true}
                    onChange={handleInputs}
                  />
                  &nbsp; &nbsp;
                  <Label>No</Label>
                  &nbsp;
                  <Input
                    name="published"
                    value="0"
                    type="radio"
                    defaultChecked={CouponDetails && CouponDetails.published === 0 && true}
                    onChange={handleInputs}
                  />
                </FormGroup>
              </Col>
            </Row>
          </ComponentCard>
        </FormGroup>
      </Form>
    </>
  );
}
