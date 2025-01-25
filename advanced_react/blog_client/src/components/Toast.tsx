import {ToastProps} from "react-bootstrap";

export interface ToastProp extends ToastProps {
    title: string,
    body: string,
}

export function Toast({title, body}: ToastProp) {

    return <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <img src="" className="rounded me-2" alt="..."/>
                <strong className="me-auto">{title}</strong>
                <small>11 mins ago</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
                {body}
            </div>
        </div>
    </div>

}