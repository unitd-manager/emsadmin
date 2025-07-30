import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'reactstrap';
import ComponentCardV2 from '../ComponentCardV2';
// import DeleteButton from '../DeleteButton';

function CouponEditButtons({ editCouponData, navigate }) {
  CouponEditButtons.propTypes = {
    editCouponData: PropTypes.any,
    navigate: PropTypes.any,
    // id: PropTypes.string,
  };
  return (
    <div>
      <ComponentCardV2>
        <Row>
          <Col>
            <Button
              color="primary"
              className="shadow-none"
              onClick={() => {
                editCouponData();
                setTimeout(() => {
                  navigate('/Coupon');
                }, 1100);
              }}
            >
              Save
            </Button>
          </Col>
          <Col>
            <Button
              color="primary"
              className="shadow-none"
              onClick={() => {
                editCouponData();
              }}
            >
              Apply
            </Button>
          </Col>
         
          <Col>
            <Button
              className="shadow-none"
              color="dark"
              onClick={() => {
                navigate('/Coupon');
                console.log('back to list');
              }}
            >
              Back to List
            </Button>
          </Col>
          {/* <Col>
            <DeleteButton
              ifAttachment
              pictureroom="ProductPic"
              attachmentroom="Product"
              ifpiture
              id={id}
              columnname="product_id"
              tablename="product"
            ></DeleteButton>
          </Col> */}
        </Row>
      </ComponentCardV2>
    </div>
  );
}

export default CouponEditButtons;
