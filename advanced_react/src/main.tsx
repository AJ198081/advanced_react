import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
// import './index.css' // For Hooks Project
// import {AppHooks} from './AppHooks.tsx'
// import './index_forms.css' // For Forms project
// import './index_food_delivery.css' // For Food Delivery project
// import {AppForms} from "./AppForms.tsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import {AppFoodDelivery} from "./AppFoodDelivery.tsx";


        createRoot(document.getElementById('root')!).render(
        <StrictMode>
            {/*<AppHooks />*/}
            {/*<AppForms/>*/}
            <AppFoodDelivery/>
    </StrictMode>,
)
