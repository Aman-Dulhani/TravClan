export const maxMinValue = (action, array) => {
    if (!isArrayValidAndNotEmpty(array)) {
        return { amount: 0 };
    }
    switch(action) {
    case 'max':
        const max = array.reduce((prev, current) => {
            return (prev.amount > current.amount) ? prev : current;
        }, { amount: 0 });
        return max;
    case 'min':
        const min = array.reduce((prev, current) => {
            return (prev.amount < current.amount) ? prev : current;
        }, { amount: Infinity });
        return min
    default:
        break;
    }
}

export const isArrayValidAndNotEmpty = anArray => anArray && Array.isArray(anArray) && anArray.length > 0;