import {ReactNode, useEffect, useRef} from "react";
import {createPortal} from "react-dom";

interface ModalProps {
    open?: boolean,
    onClose?: () => void,
    children?: ReactNode
}

export const Modal = ({open, onClose, children}: ModalProps): ReactNode => {
    const dialog = useRef<HTMLDialogElement | null>(null);

    useEffect(() => {
        if (open) {
            dialog.current?.showModal();
        } else {
            dialog.current?.close();
        }
    }, [open]);

    return createPortal(
        <dialog className="modal" ref={dialog} onClose={onClose}>
            {open ? children : null}
        </dialog>,
        document.getElementById('modal')!
    );
}