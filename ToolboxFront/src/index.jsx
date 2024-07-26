import React from 'react'
import App from './App/app.jsx'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals.js'

const root = ReactDOM.createRoot(document.getElementById("root"))
const pjson = require('../package.json')
console.log("Toolbox Version: ", pjson.version)

global.React = React

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()


