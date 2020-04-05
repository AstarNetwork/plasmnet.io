export const addComma = (price: string, decimal: number): string => {
    const priceNum = Number(price);
    return priceNum.toFixed(decimal).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
};
