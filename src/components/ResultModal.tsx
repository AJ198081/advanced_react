import {ForwardedRef, forwardRef, useImperativeHandle, useRef} from "react";

interface ResultModalProps {
    result: number,
    targetTime: number,
}

export interface ForwardedRefProps {
    open(): void;
}

export const ResultModal = forwardRef<ForwardedRefProps, ResultModalProps>(({result, targetTime}: ResultModalProps, ref: ForwardedRef<ForwardedRefProps>) => {

    const dialog = useRef<HTMLDialogElement | null>(null);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current!.showModal();
            }
        }
    })

    return (
        <dialog ref={dialog}>
            <h2>Your {result > 0 ? 'Won' : 'Lost'} </h2>
            <p>Your target time was <strong>{targetTime}</strong> second {`${targetTime > 1 ? 's' : ''}`}</p>
            <p>You stopped the timer with X seconds left</p>
            <form method={"dialog"}>
                <button>Play Again</button>
            </form>
        </dialog>
    )

});