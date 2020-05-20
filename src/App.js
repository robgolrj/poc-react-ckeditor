import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class App extends Component {
  state = {
    stringHtml : "<p>Conteúdo dentro do estado</p>"
  }

  mudaTexto = (data) => {
    this.setState({stringHtml: data});
  }

    render() {
        return (
            <div className="App">
                <h2>Poc reactjs com ckeditor</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data={this.state.stringHtml}
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                      const data = editor.getData();
                      this.mudaTexto(data);                      
                      console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }                    
                />
                <h2>HTML gerado</h2>
                <xmp>
                  {this.state.stringHtml}
                </xmp>
                
                
                <div ref="http://www.tjrj.jus.br/documents/10136/3067978/anexo-ii-manual-modelo-nacional-interoperabilidade.pdf" id='viewer' style={{ width: '100%', height: '100%' }}>

                </div>

                <iframe src="http://www.tjrj.jus.br/documents/10136/3067978/anexo-ii-manual-modelo-nacional-interoperabilidade.pdf" title="title">
                  
              </iframe>
                

            </div>
        );
    }
}

export default App;