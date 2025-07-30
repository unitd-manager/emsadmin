import React, { useContext, useEffect, useState } from 'react';
import { Row, Col, Form, FormGroup, Button, TabContent, NavItem, NavLink, Nav, TabPane } from 'reactstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import * as Icon from 'react-feather';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import message from '../../components/Message';
import api from '../../constants/api';
import CouponEditButtons from '../../components/Product/CouponEditButtons';
import ViewFileComponentV2 from '../../components/ProjectModal/ViewFileComponentV2';
import AttachmentModalV2 from '../../components/Tender/AttachmentModalV2';
import CouponDetail from '../../components/ProductTable/CouponDetail';
import AppContext from '../../context/AppContext';

const CouponUpdate = () => {
  // All state variables
  const [CouponDetails, setCouponDetails] = useState();
  const [CouponDescription, setCouponDescription] = useState('');
  const [RoomName, setRoomName] = useState('');
  const [fileTypes, setFileTypes] = useState('');
  const [attachmentModal, setAttachmentModal] = useState(false);


  const [attachmentData, setDataForAttachment] = useState({
    modelType: '',
  });
  const [activeTab, setActiveTab] = useState('1');
  // Navigation and Parameter Constants
  const { id } = useParams();
  const navigate = useNavigate();
  const { loggedInuser } = useContext(AppContext);

  //Setting data in CouponDetails
  const handleInputs = (e) => {
    setCouponDetails({ ...CouponDetails, [e.target.name]: e.target.value });
  };
  //setting data in Description Modal CouponDetails
  const handleDataEditor = (e, type) => {
    setCouponDetails({
      ...CouponDetails,
      [type]: draftToHtml(convertToRaw(e.getCurrentContent())),
    });
  };
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  //Description Modal
  const convertHtmlToDraft = (existingQuoteformal) => {
    const contentBlock = htmlToDraft(existingQuoteformal && existingQuoteformal);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      setCouponDescription(editorState);
    }
  };

  // Get Product data By product id
  const getCouponById = () => {
    api
      .post('/product/getCouponById', { coupon_id: id })
      .then((res) => {
        setCouponDetails(res.data.data[0]);
        convertHtmlToDraft(res.data.data[0].description);
      })
      .catch(() => {
        
      });
  };
  //Edit 
  const editCouponData = () => {
    CouponDetails.modified_by = loggedInuser.first_name;
    if (CouponDetails.title !== '') {
      api
        .post('/product/edit-Coupon', CouponDetails)
        .then(() => {
          message('Record edited successfully', 'success');
        })

        .catch(() => {
          message('Unable to edit record.', 'error');
        });
    } else {
      message('Please fill all required fields', 'warning');
    }
  };

  //Attachments
  const dataForAttachment = () => {
    setDataForAttachment({
      modelType: 'attachment',
    });
    console.log('inside DataForAttachment');
  };
  
  useEffect(() => {
    getCouponById();
  }, [id]);

  return (
    <>
      <BreadCrumbs heading={CouponDetails && CouponDetails.title} />
      <Form>
        <FormGroup>
        <TabContent className="p-4" activeTab={activeTab}>
          <CouponEditButtons id={id} editCouponData={editCouponData} navigate={navigate} />
       
          <CouponDetail
            CouponDetails={CouponDetails}
            handleInputs={handleInputs}
          ></CouponDetail>
         
          <Row>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={activeTab === '1' ? 'active' : ''}
                onClick={() => {
                  toggle('1');
                }}
              >
                Product Description
              </NavLink>
            </NavItem>
        
           
            <NavItem>
              <NavLink
                className={activeTab === '4' ? 'active' : ''}
                onClick={() => {
                  toggle('2');
                }}
              >
                Attachments
              </NavLink>
            </NavItem>
          </Nav>
        </Row>
        {/* Delivery address Form */}
        <TabPane tabId="1">
        <ComponentCard title="Coupon Description">
                <Editor
                  editorState={CouponDescription}
                  wrapperClassName="demo-wrapper mb-0"
                  editorClassName="demo-editor border mb-4 edi-height"
                  onEditorStateChange={(e) => {
                    handleDataEditor(e, 'description');
                    setCouponDescription(e);
                  }}
                />
              </ComponentCard>
        </TabPane>

        {/* Customer Details Form */}
      
        <TabPane tabId="2">
        <ComponentCard title="Attachments">
            <Row>
              <Col xs="12" md="3" className="mb-3">
                <Button
                  className="shadow-none"
                  color="primary"
                  onClick={() => {
                    setRoomName('Coupon');
                    setFileTypes(['JPG', 'PNG', 'GIF', 'PDF']);
                    dataForAttachment();
                    setAttachmentModal(true);
                  }}
                >
                  <Icon.File className="rounded-circle" width="20" />
                </Button>
              </Col>
            </Row>
            <AttachmentModalV2
              moduleId={id}
              attachmentModal={attachmentModal}
              setAttachmentModal={setAttachmentModal}
              roomName={RoomName}
              fileTypes={fileTypes}
              altTagData="CouponRelated Data"
              desc="CouponRelated Data"
              recordType="RelatedPicture"
              mediaType={attachmentData.modelType}
            />
            <ViewFileComponentV2 moduleId={id} roomName="Coupon" recordType="RelatedPicture" />
          </ComponentCard>
        </TabPane>
      </TabContent>
      </FormGroup>
      </Form>
    
    </>
  );
};
export default CouponUpdate;
