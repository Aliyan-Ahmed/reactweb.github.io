import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Test from './App'; 
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render( 
  <>
<BrowserRouter>
<Test />
</BrowserRouter>
</>,
 document.getElementById('root')
);
