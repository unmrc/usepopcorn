import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    ></StarRating>
    <StarRating
      size={24}
      color='red'
      className='test'
      defaultRating={3}
    ></StarRating>

    <Test></Test> */}
  </React.StrictMode>
);
