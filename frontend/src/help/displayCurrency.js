const displayUSDCurrency = (num) => {
    // Ensure the input is a number
    if (isNaN(num)) {
        throw new Error("Input must be a number");
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });

    return formatter.format(num);
}

export default displayUSDCurrency;
