import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <div className="bg-dark text-white-50" style={{height: "100vh"}}>
          <App />
      </div>
  </StrictMode>,
)
