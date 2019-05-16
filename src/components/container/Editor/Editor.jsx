import React, { Component } from 'react';
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

  submitArticle = event => {
    event.preventDefault();

    const getDescription = string => {
      return string.substring(0, 600);
    };

    const { title, body, imageThumbnail } = this.state;

    const articleInput = {
      title,
      description: getDescription(
        draftToHtml(convertToRaw(body.getCurrentContent())),
      ),
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
        {/* <Input
          placeholder="Description"
          className="dark"
          type="text"
          onChange={this.inputHandler}
          value={this.state.description}
          name="description"
        /> */}
        <div className="editor-container">
          <Editor
            toolbarOnFocus
            editorState={body}
            placeholder="Write your post..."
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
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
