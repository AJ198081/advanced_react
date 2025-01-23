export const currencyFormatter = (value: number) => {



    return new Intl.NumberFormat(window.navigator.language, {
            style: 'currency',
            currency: getCurrencySymbol(window.navigator.language),
            currencyDisplay: 'symbol',
            maximumFractionDigits: 2,
        }
    ).format(value);
}

const getCurrencySymbol = (locale: string) => {
    switch (locale) {
        case 'en-US':
            return `USD`;
        case 'en-GB':
            return `GBP`;
        case 'en-IN':
            return `INR`;
        default:
            return `AUD`;
    }
}