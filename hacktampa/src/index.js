import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from "axios"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let data;
document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    setTimeout(function(){
      for (const div of document.querySelectorAll("div")) {
        if (div.textContent.includes("date") && div.textContent[0] == '{') {
          data = div.textContent;
          const obj = JSON.parse(data);
          fetch('http://localhost:3000/mentalDb/', {
            method: 'POST',
            body: obj
        })
          console.log(obj);
        }
      }
  }, 2000);
    }
});


