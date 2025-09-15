const products = [
    { name: "A", price: 100, discount: 0.1, quantity: 2 },
    { name: "B", price: 200, discount: 0.2, quantity: 1, bulkDiscount: { minQuantity: 2, extraDiscount: 0.05 } },
    { name: "C", price: 300, discount: 0, quantity: 3, bulkDiscount: { minQuantity: 3, extraDiscount: 0.1 } }
];

function getOrderSummary(products) {
    let totalBeforeDiscount = 0;
    let totalAfterDiscount = 0;
    const details = [];

    for (let product of products) {
        const { name, price, discount, quantity, bulkDiscount } = product;
        totalBeforeDiscount += price * quantity;

        let finalPrice = price * (1 - discount);

        if (bulkDiscount && quantity >= bulkDiscount.minQuantity) {
            finalPrice *= (1 - bulkDiscount.extraDiscount);
        }

        finalPrice = Math.round(finalPrice); 
        const subtotal = finalPrice * quantity;
        totalAfterDiscount += subtotal;

        details.push({
            name,
            finalPrice,
            quantity,
            subtotal
        });
    }

    return {
        totalBeforeDiscount,
        totalAfterDiscount,
        details
    };
}

console.log(getOrderSummary(products));
