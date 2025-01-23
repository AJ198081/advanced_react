import {createContext, ReactNode, ReactPortal, useState} from 'react';

export interface UserProgress {
    progress: string,
    showCart: () => void,
    showCheckout: () => void,
    hideCart: () => void,
    hideCheckout: () => void,
}

const defaultUserProgress = {
    progress: '',
    showCart: () => {
    },
    showCheckout: () => {
    },
    hideCart: () => {
    },
    hideCheckout: () => {
    }
}

const UserProgressContext = createContext<UserProgress>(defaultUserProgress);

export const UserProgressContextProvider = ({children}: {children: ReactNode | ReactPortal}): ReactNode => {

    const [progress, setProgress] = useState<string>('');

    const showCart = () => {
        setProgress('cart');
    }
    const showCheckout = () => {
        setProgress('checkout');
    }
    const hideCart = () => {
        setProgress('');
    }
    const hideCheckout = () => {
        setProgress('');
    }

    return <UserProgressContext.Provider value={{progress, showCart, showCheckout, hideCart, hideCheckout}}>
        {children}
    </UserProgressContext.Provider>;
}

export default UserProgressContext;
