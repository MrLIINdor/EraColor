import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Color from "./colorCard"


const greenList=["#70C986", "#62B075", "#549765", "#467E54", "#386543"];


ReactDOM.render(
  <div className='tabl'>
    {greenList.map(el=> <Color bg={el}/>)}
  </div>,
  document.querySelector('#mains')
);

