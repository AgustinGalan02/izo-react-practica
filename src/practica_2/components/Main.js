import React from 'react';
import Body from './Body';
import Page from './Page';
import BlogPost from './BlogPost';

const Main = ({ pageBody, externalLinks }) => {
  return (
    <main>
      <Body pageBody={pageBody} />
      <nav>
        <ul>
          {externalLinks.map((link, index) => (
            <li key={index}>
              <a style={{ fontSize: '25px' }} href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <Page>
        <p style={{ fontSize: '25px' }}>¡HOLA!</p>
      </Page>
      <BlogPost
        title="Receta de Chipa"
        body={
          <div>
            <b>Ingredientes:</b>
            <br /><br />
            - 250 gramos de almidón de mandioca.
            <br />
            - 100 gramos de queso fresco rallado.
            <br />
            - 100 gramos de queso parmesano rallado.
            <br />
            - 1 huevo.
            <br />
            - 50 gramos de mantequilla derretida.
            <br />
            - Sal al gusto.
            <br /><br />
            <b>Instrucciones:</b>
            <br /><br />
            1. Precalienta el horno a 200°C (392°F).
            <br />
            2. En un bol, mezcla el almidón de mandioca, los quesos, el huevo y la mantequilla.
            <br />
            3. Amasa la mezcla hasta obtener una masa homogénea.
            <br />
            4. Forma pequeñas bolas con la masa y colócalas en una bandeja para horno.
            <br />
            5. Hornea durante unos 15-20 minutos o hasta que las chipas estén doradas.
            <br />
            6. ¡Disfruta de tus chipas recién horneadas!
          </div>
        }
      />
    </main>
  );
}

export default Main;
