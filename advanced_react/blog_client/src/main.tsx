import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// @ts-expect-error
import 'bootstrap/dist/css/bootstrap.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <div className="bg-dark text-white-50" style={{height: "100vh"}}>
          <App />
      </div>
  </StrictMode>,
)
