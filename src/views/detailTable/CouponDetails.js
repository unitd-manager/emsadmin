import React, { useState, useContext } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import message from '../../components/Message';
import api from '../../constants/api';
import AppContext from '../../context/AppContext';

const CouponDetail = () => {
  //All const variables
  // const [itemcode, setItemcode] = useState();
  const navigate = useNavigate();
  const { loggedInuser } = useContext(AppContext);
  const [CouponDetails, setCouponDetails] = useState({
    title: '',
    // item_code: '',
    // site_id: 0,
  });
  //setting data in CouponDetails
  const handleInputs = (e) => {
    setCouponDetails({ ...CouponDetails, [e.target.name]: e.target.value });
  };
  //getting maximum of itemcode
  // const getMaxItemcode = () => {
  //   api.get('/product/getMaxItemCode').then((res) => {
  //     setItemcode(res.data.data[0].itemc);
  //   });
  // };
  //Insert Product Data
  const insertCouponData = () => {
    // CouponDetails.item_code = parseFloat(itemcode) + 1;
    CouponDetails.created_by = loggedInuser.first_name;
    // CouponDetails.coupon_code =code;
    if (CouponDetails.title !== '') {
      api
        .post('/product/insertCoupon', CouponDetails)
        .then((res) => {
          const insertedDataId = res.data.data.insertId;
          message('Coupon inserted successfully.', 'success');
          setTimeout(() => {
            navigate(`/CouponEdit/${insertedDataId}`);
          }, 300);
        })
        .catch(() => {
          message('Unable to edit record.', 'error');
        });
    } else {
      message('Please fill all required fields.', 'warning');
    }
  };
  // const generateCode = () => {
  //   api
  //     .post('/commonApi/getCodeValue', { type: 'Coupon' })
  //     .then((res) => {
  //       insertCouponData(res.data.data);
  //     })
  //     .catch(() => {
  //       insertCouponData('');
  //     });
  // };
  //useeffect
  // useEffect(() => {
  //   getMaxItemcode();
  // }, []);

  return (
    <div>
      <BreadCrumbs />
      <ToastContainer></ToastContainer>
      <Row>
        <Col md="6">
          <ComponentCard title="Key Details">
            <Form>
              <FormGroup>
                <Row>
                  <Col md="12">
                    <Label>
                      Title<span className="required"> *</span>
                    </Label>
                    <Input
                      type="text"
                      onChange={handleInputs}
                      value={CouponDetails && CouponDetails.title}
                      name="title"
                    />
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <div className="pt-3 mt-3 d-flex align-items-center gap-2">
                    <Button
                      className="shadow-none"
                      color="primary"
                      onClick={() => {
                        insertCouponData();
                      }}
                    >
                      Save & Continue
                    </Button>
                    <Button
                      onClick={() => {
                        navigate('/Coupon');
                      }}
                      type="button"
                      className="btn btn-dark shadow-none"
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
export default CouponDetail;
