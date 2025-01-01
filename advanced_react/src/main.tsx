import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
// import './index.css' // For Hooks Project
// import {AppHooks} from './AppHooks.tsx'
import './index_forms.css' // For Forms project
import 'bootstrap/dist/css/bootstrap.min.css'
import {AppForms} from "./AppForms.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/*<AppHooks />*/}
        <AppForms/>
    </StrictMode>,
)
