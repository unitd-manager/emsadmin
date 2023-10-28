import React, { useContext,useEffect, useState } from 'react';
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  
  TabContent,
  TabPane,
} from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import * as Icon from 'react-feather';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../form-editor/editor.scss';
import BreadCrumbs from '../../layouts/breadcrumbs/BreadCrumbs';
import ComponentCard from '../../components/ComponentCard';
import ComponentCardV2 from '../../components/ComponentCardV2';
import ViewFileComponentV2 from '../../components/ProjectModal/ViewFileComponentV2';
import AttachmentModalV2 from '../../components/Tender/AttachmentModalV2';
import AudioViewFileComponentV2 from '../../components/Tender/AudioViewFileComponentV2';
import message from '../../components/Message';
import api from '../../constants/api';
import ContentMoreDetails from '../../components/Content/ContentMoreDetails';
import Tab from '../../components/Tab';
import AddVideoModal from '../../components/Content/AddVideoModal';
import ItemTable from '../../components/Content/ItemTable';
import AppContext from '../../context/AppContext';
import creationdatetime from '../../constants/creationdatetime';


const ContentUpdate = () => {
  // All state variables
  const [lineItem] = useState(null);
  
  const [contentDetails, setContentDetails] = useState();
  const [sectionLinked, setSectionLinked] = useState();
  const [categoryLinked, setCategoryLinked] = useState();
  const [subcategoryLinked, setSubCategoryLinked] = useState();
  const [description, setDescription] = useState('');
  const [activeTab, setActiveTab] = useState('1');
  const [pictureroomname, setPictureRoomName] = useState('');
  const [attachmentroomname, setAttachmentRoomName] = useState('');
  const [picturefiletypes, setPictureFileTypes] = useState('');
  const [attachmentfiletypes, setAttachmentFileTypes] = useState('');
  const [picturemodal, setPictureModal] = useState(false);
  const [attachmentModal, setAttachmentModal] = useState(false);
  const [attachmentData, setDataForAttachment] = useState({
    modelType: '',
  });
  const [pictureData, setDataForPicture] = useState({
    modelType: '',
  });
const [pictureupdate, setPictureUpdate] = useState(false);
const [attachmentupdate, setAttachmentUpdate] = useState(false);
const [audioattachmentroomname, setAudioAttachmentRoomName] = useState('');
const [audioattachmentfiletypes, setAudioAttachmentFileTypes] = useState('');
const [audioattachmentModal, setAudioAttachmentModal] = useState(false);
const [audioattachmentData, setAudioDataForAttachment] = useState({
  modelType: '',
});
const [audioattachmentupdate, setAudioAttachmentUpdate] = useState(false);
const [editaudiodatamodal, setEditAudioDataModal] = useState(null);

 //Attachments
 const dataForAttachment = () => {
  setDataForAttachment({
    modelType: 'attachment',
  });
};
//Pictures
const dataForPicture = () => {
  setDataForPicture({
    modelType: 'picture',
  });
};
//Audio Attachment
const dataForAudioAttachment = () => {
  setAudioDataForAttachment({
    modelType: 'audioattachment',
  });
};

const [addVideoModal,setAddVideoModal] = useState();
  const [valuelist, setValuelist] = useState();
  const [project, setProject] = useState([]);
  const [quote, setQuote] = useState({});

  // Navigation and Parameter Constants
  const { id } = useParams();
  const navigate = useNavigate();
  const { loggedInuser } = useContext(AppContext);
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  //Setting data in contentDetails
  const handleInputs = (e) => {
    setContentDetails({ ...contentDetails, [e.target.name]: e.target.value });
  };
  //setting data in Description Modal contentDetails
  const handleDataEditor = (e, type) => {
    setContentDetails({
      ...contentDetails,
      [type]: draftToHtml(convertToRaw(e.getCurrentContent())),
    });
  };
  //Description Modal
  const convertHtmlToDraft = (existingQuoteformal) => {
    const contentBlock = htmlToDraft(existingQuoteformal && existingQuoteformal);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      setDescription(editorState);
    }
  };
  // Get content data By content id
  const getContentById = () => {
    api
      .post('/content/getContentById', { content_id: id })
      .then((res) => {
        setContentDetails(res.data.data);
        convertHtmlToDraft(res.data.data.description);
      })
      .catch(() => {
        message('Content Data Not Found', 'info');
      });
  };
  //Edit Content
  const editContentData = () => {
    if (contentDetails.title !== '' )
    {
      contentDetails.modification_date = creationdatetime;
      contentDetails.modified_by= loggedInuser.first_name; 
      api
        .post('/content/editContent', contentDetails)
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
  // const editContentData = () => {
  //   if (
  //     contentDetails.content_title !== ''
  //   ) {contentDetails.modified_date = creationdatetime;
  //     contentDetails.modified_by= loggedInuser.first_name;
  //     api
  //       .post('/content/editContent', contentDetails)
  //       .then(() => {
  //         message('Record edited successfully', 'success');
  //       })
  //       .catch(() => {
  //         message('Unable to edit record.', 'error');
  //       });
  //   } else {
  //     message('Please fill all required fields', 'warning');
  //   }
  // };
  // getting data from Section
  const getsection = () => {
    api.get('/content/getSection', sectionLinked).then((res) => {
      setSectionLinked(res.data.data);
    });
  };
  // getting data from Category
  const getCategory = () => {
    api.get('/content/getCategory', categoryLinked).then((res) => {
      setCategoryLinked(res.data.data);
    });
  };
  // getting data from SubCategory
  const getSubCategory = () => {
    api.get('/content/getSubCategory', subcategoryLinked).then((res) => {
      setSubCategoryLinked(res.data.data);
    });
  };
  // get data from valuelist
  const getValuelist = () => {
    api
      .get('/content/getValueList')
      .then((res) => {
        setValuelist(res.data.data);
      })
      .catch(() => {
        message('valuelist not found', 'info');
      });
  };

  const getProject = () => {
    api.get('project/getOppProject').then((res) => {
      setProject(res.data.data);
    });
  };
  const getQuote = () => {
    api.post('/tender/getQuoteById', { opportunity_id: id }).then((res) => {
      setQuote(res.data.data[0]);
    });
  }; 


  const tabs = [
    { id: '1', name: 'Video' },
    { id: '2', name: 'Attachment'},
    
  ];

  //Attachments
  

  useEffect(() => {
    getsection();
    getCategory();
    getSubCategory();
    getContentById();
    getValuelist();
    getProject();
    getQuote();
    
    console.log(lineItem);
  }, [id]);

  return (
    <>
      <BreadCrumbs heading={contentDetails && contentDetails.title} />
      <Form>
        <FormGroup>
          <ComponentCardV2>
            <Row>
              <Col>
                <Button
                  color="primary"
                  onClick={() => {
                    editContentData();
                    setTimeout(() => {
                      navigate('/Content');
                    }, 1100);
                  }}
                >
                  Save
                </Button>
              </Col>
              <Col>
                <Button
                  color="primary"
                  onClick={() => {
                    editContentData();
                  }}
                >
                  Apply
                </Button>
              </Col>
              <Col>
                <Button
                  color="dark"
                  onClick={() => {
                    navigate('/Content');
                    console.log('back to list');
                  }}
                >
                  Back to List
                </Button>
              </Col>
            </Row>
          </ComponentCardV2>
          {/* Content Details Form */}
          <ContentMoreDetails
            contentDetails={contentDetails}
            handleInputs={handleInputs}
            valuelist={valuelist}
            subcategoryLinked={subcategoryLinked}
            getCategory={getCategory}
            sectionLinked={sectionLinked}
            categoryLinked={categoryLinked}
          ></ContentMoreDetails>

          <ComponentCard title="Content details">
            <ToastContainer></ToastContainer>
            <Row>
              <Col md="4">
                <FormGroup>
                  <Label> Show Title</Label>
                  <br></br>
                  <Label> Yes </Label>
                  <Input
                    name="show_title"
                    value="1"
                    type="radio"
                    defaultChecked={contentDetails && contentDetails.show_title === 1 && true}
                    onChange={handleInputs}
                  />
                  <Label> No </Label>
                  <Input
                    name="show_title"
                    value="0"
                    type="radio"
                    defaultChecked={contentDetails && contentDetails.show_title === 0 && true}
                    onChange={handleInputs}
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Published</Label>
                  <br></br>
                  <Label>Yes</Label>
                  <Input
                    name="published"
                    value="1"
                    type="radio"
                    defaultChecked={contentDetails && contentDetails.published === 1 && true}
                    onChange={handleInputs}
                  />
                  <Label>No</Label>
                  <Input
                    name="published"
                    value="0"
                    type="radio"
                    defaultChecked={contentDetails && contentDetails.published === 0 && true}
                    onChange={handleInputs}
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Label>Content Date</Label>
                  <Input
                    type="date"
                    onChange={handleInputs}
                    value={moment(contentDetails && contentDetails.content_date).format(
                      'YYYY-MM-DD',
                    )}
                    name="content_date"
                  />
                </FormGroup>
              </Col>
              {/* Description form */}
              <ComponentCard title="Description">
                <Editor
                  editorState={description}
                  wrapperClassName="demo-wrapper mb-0"
                  editorClassName="demo-editor border mb-4 edi-height"
                  onEditorStateChange={(e) => {
                    handleDataEditor(e, 'description');
                    setDescription(e);
                  }}
                />
              </ComponentCard>
            </Row>
          </ComponentCard>
        </FormGroup>
      </Form>
      <ComponentCard title="More Details">
        <ToastContainer></ToastContainer>

        <Tab toggle={toggle} tabs={tabs} />
        <TabContent className="p-4" activeTab={activeTab}>
          <TabPane tabId="1">
          <AddVideoModal
          addVideoModal={addVideoModal}
          setAddVideoModal={setAddVideoModal}
          ContentId = {id}
        />

        <Row className="mb-4">
          <Col md="2">
            <Button
              color="primary"
              onClick={() => {
                setAddVideoModal(true);
              }}
            >
              Add Video
            </Button>
          </Col>
          </Row>
          <ItemTable
          ContentId={id}
          project={project}
          quote={quote}
          />
          </TabPane>
          <TabPane tabId="2" >
          {/* Picture and Attachments Form */}

            <Form>
              <FormGroup>
              <ComponentCard title="Picture">
                  <Row>
                    <Col xs="12" md="3" className="mb-3">
                      <Button
                        className="shadow-none"
                        color="primary"
                        onClick={() => {
                          setPictureRoomName('ContentPic');
                          setPictureFileTypes(['JPG','JPEG', 'PNG', 'GIF']);
                          dataForPicture();
                          setPictureModal(true);
                        }}
                      >
                        <Icon.File className="rounded-circle" width="20" />
                      </Button>
                    </Col>
                  </Row>
                  <AttachmentModalV2
                    moduleId={id}
                    attachmentModal={picturemodal}
                    setAttachmentModal={setPictureModal}
                    roomName={pictureroomname}
                    fileTypes={picturefiletypes}
                    altTagData="Content Data"
                    desc="Content Data"
                    recordType="Picture"
                    mediaType={pictureData.modelType}
                    update={pictureupdate}
                    setUpdate={setPictureUpdate}
                  />
                  <ViewFileComponentV2 moduleId={id} roomName="ContentPic" recordType="Picture" update={pictureupdate}
                    setUpdate={setPictureUpdate}/>
                    </ComponentCard>
              </FormGroup>
            </Form>
      <Form>
              <FormGroup>
              <ComponentCard title="Attachments">
                  <Row>
                    <Col xs="12" md="3" className="mb-3">
                      <Button
                        className="shadow-none"
                        color="primary"
                        onClick={() => {
                          setAttachmentRoomName('ContentAttachment');
                          setAttachmentFileTypes(['JPG','JPEG', 'PNG', 'GIF', 'PDF']);
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
                    roomName={attachmentroomname}
                    fileTypes={attachmentfiletypes}
                    altTagData="ContentRelated Data"
                    desc="ContentRelated Data"
                    recordType="ContentRelatedPicture"
                    mediaType={attachmentData.modelType}
                    update={attachmentupdate}
                    setUpdate={setAttachmentUpdate}
                  />
                  <ViewFileComponentV2 moduleId={id} roomName="ContentAttachment" recordType="ContentRelatedPicture" update={attachmentupdate}
                    setUpdate={setAttachmentUpdate}/>
                    </ComponentCard>
              </FormGroup>
            </Form>
            <Form>
              <FormGroup>
              <ComponentCard title="Audio Attachments">
                  <Row>
                    <Col xs="12" md="3" className="mb-3">
                      <Button
                        className="shadow-none"
                        color="primary"
                        onClick={() => {
                          setAudioAttachmentRoomName('ContentAudioAttachment');
                          setAudioAttachmentFileTypes(['GIF', 'OGG', 'MP3', 'WAV', 'M4A']);
                          dataForAudioAttachment();
                          setAudioAttachmentModal(true);
                        }}
                      >
                        <Icon.File className="rounded-circle" width="20" />
                      </Button>
                    </Col>
                  </Row>
                  <AttachmentModalV2
                    moduleId={id}
                    attachmentModal={audioattachmentModal}
                    setAttachmentModal={setAudioAttachmentModal}
                    roomName={audioattachmentroomname}
                    fileTypes={audioattachmentfiletypes}
                    altTagData="ContentRelated Data"
                    desc="ContentRelated Data"
                    recordType="ContentRelatedAudio"
                    mediaType={audioattachmentData.modelType}
                    update={audioattachmentupdate}
                    setUpdate={setAudioAttachmentUpdate}
                    editaudiodatamodal={editaudiodatamodal}
                    setEditAudioDataModal={setEditAudioDataModal}
                  />
                  <AudioViewFileComponentV2 moduleId={id} roomName="ContentAudioAttachment" recordType="ContentRelatedAudio" update={audioattachmentupdate}
                    setUpdate={setAudioAttachmentUpdate}
                    />
                    </ComponentCard>
              </FormGroup>
            </Form>
          </TabPane> 
        </TabContent>
      </ComponentCard>
    </>
  );
};
export default ContentUpdate;
