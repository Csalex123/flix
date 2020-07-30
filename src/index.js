import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/home/App';
import CadastroVideo from './pages/cadastro/Video';
import Error404 from './components/404';
import Categoria from './pages/cadastro/Categoria';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App}  />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={Categoria} />
      <Route component={Error404} /> { /* Quando o Route não tem path, ele vira o 404 */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


