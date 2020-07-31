import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';

import {BrowserRouter,Switch, Route} from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/Categoria';


 function Page404(){
    return(
      <div> 
         404 Not Found
      </div>
    );
 }

ReactDOM.render(
  <BrowserRouter >
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />

      <Route component={Page404}/>
    </Switch>
  </BrowserRouter>,
  
  document.getElementById('root')
);

