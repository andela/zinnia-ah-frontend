import React, { Component } from 'react';
import axios from 'axios';
import { EditorState, convertToRaw } from 'draft-js';
import Navbar from '../../presentationals/Navbar/Navbar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Editor.scss';

//Reducer
import { createArticle } from '../../../store/modules/article';

//Components
import Button from '../../presentationals/Button/Button';
import Input from '../../presentationals/Input/Input';
import Loader from '../../presentationals/Loader/Loader';

export class EditorContainer extends Component {
  state = {
    title: '',
    description: '',
    body: EditorState.createEmpty(),
    imageThumbnail: '',
  };

  onEditorStateChange = body => {
    this.setState({
      body,
    });
  };

  inputHandler = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  fileUploadHandler = async file => {
    const { imageThumbnail } = this.state;
    const url = 'https://api.cloudinary.com/v1_1/trix/image/upload';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'zinniahteam');

    const data = await axios.post(url, formData, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      },
    });

    if (imageThumbnail === '') {
      this.setState({
        imageThumbnail: data.data.secure_url,
      });
    }

    return data;
  };
  submitArticle = event => {
    event.preventDefault();

    const getDescription = string => {
      return string.substring(0, 400);
    };

    const { title, body, imageThumbnail } = this.state;
    const description = `${getDescription(
      JSON.stringify(body.getCurrentContent().getPlainText()),
    )}...`;

    const articleInput = {
      title,
      description,
      imageThumbnail,
      body: draftToHtml(convertToRaw(body.getCurrentContent())),
    };
    this.props.createArticle(articleInput);
  };

  render() {
    const {
      article: { isLoading },
    } = this.props;
    const { body } = this.state;
    return (
      <div>
        {isLoading && <Loader text="please wait" size="large" />}
        <Navbar />
        <Input
          placeholder="Title"
          className="dark"
          type="text"
          onChange={this.inputHandler}
          value={this.state.title}
          name="title"
        />
        <div className="editor-container">
          <Editor
            toolbarOnFocus
            editorState={body}
            placeholder="Write your post..."
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
            toolbar={{
              options: [
                'inline',
                'blockType',
                'textAlign',
                'colorPicker',
                'link',
                'emoji',
                'image',
                'history',
              ],
              inline: { inDropdown: true },
              list: { inDropdown: true },
              textAlign: { inDropdown: true },
              link: { inDropdown: true },
              history: { inDropdown: true },
              image: {
                uploadCallback: this.fileUploadHandler,
                placeHolder: 'Write your story...',
                previewImage: true,
                inputAccept:
                  'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                alignmentEnabled: false,
                alt: { present: false, mandatory: false },
                defaultSize: {
                  height: '500',
                  width: '1000',
                },
              },
            }}
          />
          <Button
            type="submit"
            value="POST ARTICLE"
            className="btn-dark"
            onClick={this.submitArticle}
          />
        </div>
      </div>
    );
  }
}

EditorContainer.propTypes = {
  createArticle: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  article: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ article: state.article });

export default connect(
  mapStateToProps,
  { createArticle },
)(EditorContainer);
