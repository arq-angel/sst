import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import {ApiDataProvider} from "./contexts/ApiDataContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ApiDataProvider>
          <App />
      </ApiDataProvider>
  </React.StrictMode>,
)
