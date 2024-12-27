import {ForwardedRef, forwardRef, ReactNode, useImperativeHandle, useRef} from "react";
import {createPortal} from "react-dom";

interface ResultModalProps {
    result: number,
    targetTime: number,
    handleRest: () => void
}

export interface ForwardedRefProps {
    open(): void;

    reset(): string;
}

const ResultModal = (
    {result, targetTime, handleRest}: ResultModalProps,
    ref: ForwardedRef<ForwardedRefProps>
): ReactNode => {

    const dialog = useRef<HTMLDialogElement | null>(null);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current!.showModal();
            },
            reset() {
                dialog.current!.close();
                return "5";
            }
        }
    })

    return createPortal(<dialog ref={dialog} onClose={handleRest}>
        <h2>Your {result > 0 ? 'Won' : 'Lost'} </h2>
        <p>Your target time was <strong>{targetTime}</strong> second {`${targetTime > 1 ? 's' : ''}`}</p>
        <p>You stopped the timer with {(result / 1000).toFixed(2)} seconds left</p>
        <form method={"dialog"}>
            <button onClick={handleRest}>Play Again</button>
        </form>
    </dialog>, document.getElementById('modal')!);
};

// The ForwardedRefProps & the actual Props get passed to the (ResultModal)
export default forwardRef<ForwardedRefProps, ResultModalProps>(ResultModal);
