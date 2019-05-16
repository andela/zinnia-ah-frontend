import React, { Component } from 'react';
import axios from 'axios';
import { EditorState, convertToRaw } from 'draft-js';
import Navbar from '../../presentationals/Navbar/Navbar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { WithContext as ReactTags } from 'react-tag-input';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Editor.scss';

//Reducer
import { createArticle } from '../../../store/modules/article';

//Components
import Button from '../../presentationals/Button/Button';
import Loader from '../../presentationals/Loader/Loader';
import TextArea from '../../presentationals/TextArea/TextArea';

export class EditorContainer extends Component {
  state = {
    title: '',
    description: '',
    body: EditorState.createEmpty(),
    imageThumbnail: '',
    tags: [],
  };

  handleDelete = i => {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  };

  handleAddition = tag => {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  };

  handleDrag = (tag, currPos, newPos) => {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
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

  onChange = () => {};
  tags = () => {};

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
      return string.substring(0, 500);
    };

    const { title, body, imageThumbnail, tags } = this.state;
    const description = `${getDescription(
      JSON.stringify(body.getCurrentContent().getPlainText()),
    )}...`;

    const articleInput = {
      title,
      description,
      imageThumbnail,
      body: draftToHtml(convertToRaw(body.getCurrentContent())),
      tags,
    };
    this.props.createArticle(articleInput);
  };

  render() {
    const {
      article: { isLoading },
    } = this.props;

    const { body, tags } = this.state;

    const KeyCodes = {
      comma: 188,
      enter: 13,
    };

    const delimiters = [KeyCodes.comma, KeyCodes.enter];

    return (
      <div>
        {isLoading && <Loader text="please wait" size="large" />}
        <Navbar />
        <TextArea
          placeholder="Title"
          className="dark"
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
          <div>
            <ReactTags
              tags={tags}
              // suggestions={suggestions}
              handleDelete={this.handleDelete}
              handleAddition={this.handleAddition}
              handleDrag={this.handleDrag}
              delimiters={delimiters}
            />
          </div>
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
