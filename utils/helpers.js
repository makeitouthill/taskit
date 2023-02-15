module.exports = {
    eq: (a, b) => {
        return (a === b ) ? true : false;
    },
    format_price: (price) => {
        let USDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        return USDollar.format(price,2);
    }
};
