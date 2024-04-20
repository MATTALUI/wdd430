import React from 'react'
import ReactDOM from 'react-dom/client'
import Todos from './WK01-Todos';
import "./index.css";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <header>WDD 430</header>
    <main>
      <Todos />
    </main>
  </React.StrictMode>,
)
