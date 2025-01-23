import {createPortal} from "react-dom";
import {ForwardedRef, forwardRef, ReactNode, ReactPortal, useContext, useImperativeHandle, useRef} from "react";
import UserProgressContext from "../context/UserProgressContext.tsx";

interface ModalProps {
    children?: ReactNode,
    className?: string,
}

export interface DialogRef {
    openModal: () => void,
    closeModal: () => void
}

const ModalFD = ({children, className = ''}: ModalProps, ref: ForwardedRef<DialogRef>): ReactPortal => {

    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const {hideCart} = useContext(UserProgressContext);

    useImperativeHandle(
        ref,
        () => ({
            openModal: () => {
                dialogRef.current?.showModal();
            },
            closeModal: () => {
                dialogRef.current?.close();
            }
        }),
    );

    return createPortal(<dialog ref={dialogRef} className={`${className}`} onCancel={hideCart}>
            {children}
        </dialog>,
        document.getElementById('modal')!);
};

export default forwardRef<DialogRef, ModalProps>(ModalFD);