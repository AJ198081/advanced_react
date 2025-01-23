import ModalFD, {DialogRef} from "./ModalFD.tsx";
import {FormEvent, ReactNode, useContext, useEffect, useRef} from "react";
import CartContext from "../context/CartContext.tsx";
import {currencyFormatter} from "../utilities/currencyFormatter.ts";
import {Button} from "./Button.tsx";
import UserProgressContext from "../context/UserProgressContext.tsx";

interface InputProps {
    label: string,
    id: string,
    type: string,
    placeholder: string,
    required: boolean,
}

export function Input({label, id, type, placeholder, required}: InputProps): ReactNode {
    return <div className="mb-3">
        <label htmlFor={id} className="form-label">{label}</label>
        <input type={type} className="form-control" id={id} name={id} placeholder={placeholder} required={required}/>
    </div>;
}

export const Checkout = () => {

    const {items} = useContext(CartContext);
    const {progress, hideCart} = useContext(UserProgressContext);
    const dialogRef = useRef<DialogRef>(null);

    useEffect(() => {
        const modalDialog = dialogRef.current;

        if (progress === 'checkout') {
            modalDialog?.openModal();
        } else {
            modalDialog?.closeModal();
        }

        return () => {
            modalDialog?.closeModal();
        }
    }, [progress]);


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const customer = new FormData(e.target as HTMLFormElement);

        fetch('http://localhost:8080/meals/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                items,
                customer: Object.fromEntries(customer.entries())
            })
        }).then(res => {
            if (res.ok) {
                hideCart();
            } else {
                console.log(res.statusText);
            }
        }).catch(err => {
            console.log(err);
        })


    };
    return <ModalFD ref={dialogRef} className={"modal-checkout"}>
        <form onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter(items.reduce((acc, item) => acc + item.quantity * item.price, 0))}</p>
            <Input label="Name" id="name" type="text" placeholder="Name" required={true}/>
            <Input label="Email" id="email" type="email" placeholder="Email" required={true}/>
            <Input label="Street" id="street" type="text" placeholder="Street Address" required={true}/>
            <div className="row g-2">
                <div className="col">
                    <Input label="City" id="city" type="text" placeholder="City" required={true}/>
                </div>
                <div className="col">
                    <Input label="State" id="state" type="text" placeholder="State" required={true}/>
                </div>
                <div className="col">
                    <Input label="Post-Code" id="postcode" type="text" placeholder="Post code" required={true}/>
                </div>
            </div>
            <div className="row g-4">
                <div className={"col"}><Input label="Phone" id="phone" type="tel" placeholder="Phone" required={true}/>
                </div>
                <div className={"col"}><Input label="Country" id="country" type="text" placeholder="Country"
                                              required={true}/></div>
            </div>
            <p className={"modal-actions"}>
                <Button textOnly={true} type={"button"} onClick={hideCart}>Close</Button>
                <Button textOnly={false} type={"submit"}>Checkout</Button>
            </p>
        </form>
    </ModalFD>;
}

