import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { AuthContexProvider } from './Context/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContexProvider>
    <App />
    </AuthContexProvider>
  </React.StrictMode>,
)
