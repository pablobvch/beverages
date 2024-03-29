export const formatPriceInDollars = (priceInCents) =>{
    const priceInDollars = priceInCents /  100;

    const formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits:  2,
      maximumFractionDigits:  2
    }).format(priceInDollars);

    return formattedPrice;
  }