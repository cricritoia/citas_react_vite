import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// con las siguientes lineas se renderiza App pero no funciona localStorage

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// con estalineaserenderiza App y funcionaellocalStorage
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
