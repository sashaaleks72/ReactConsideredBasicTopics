export const getQuantityOfPages = (elementsQuantity, limit) => {
    return Math.ceil(elementsQuantity / limit);
};

export const getPagesArray = (quanOfPages) => {
    const pagesArray = [];

    for (let i = 0; i < quanOfPages; i++) {
        pagesArray.push(i + 1);
    }

    return pagesArray;
};
