import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './styles.css'
import * as pdf from './pdf'
class App extends Component {
  state = {
    stringHtml: "<p>Conteúdo dentro do estado</p>",
    pdf: ''
    }

    componentDidMount(){
      console.log(pdf.conteudo());
      this.setState({pdf: pdf.conteudo()})
    }

  mudaTexto = (data) => {
  this.setState({ stringHtml: data});
  }

  render() {
    return (
      <section className="container">
        <h2>POC com React e CKEDITOR</h2>
        <div className="left-half">
          <CKEditor 
            editor={ClassicEditor}
            data={this.state.stringHtml}
            onInit={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              this.mudaTexto(data);
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          />
          <h2>HTML gerado</h2>
        <xmp style={{width:"50px"}}>
            {this.state.stringHtml}
          </xmp>          
        </div>
        <div className="right-half">
          <embed src={this.state.pdf}
            style={{width:"100%", height: "100%"}} title="title">
          </embed>
        </div>
      </section>

    );
  }
}

export default App;