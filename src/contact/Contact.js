import React from 'react';
import './Contact.css';
import ReactQuill from 'react-quill';
import theme from 'react-quill/dist/quill.snow.css';
import data from './Contact.json';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);

    this.modules = {
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
      ],
    };
    this.formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image'
    ];
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    return (
      <div className="main-page contact">
        <section>
          <ReactQuill theme="snow"
                      value={this.state.text}
                      modules={this.modules}
                      formats={this.formats}
                      onChange={this.handleChange} />
        </section>
      </div>
    )
  }
}

export default Contact;
