import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { MyTeacherProvider } from './context/MyTeacherContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyTeacherProvider>
        <App />
    </MyTeacherProvider>
  </StrictMode>,
)
