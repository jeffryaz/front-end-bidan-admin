const format = (countryCode, currency, number) => {
  const options = {
    currency,
    style: "currency",
    currencyDisplay: "symbol",
    maximumSignificantDigits: 13,
  };

  return new Intl.NumberFormat(countryCode, options).format(number);
};

export const rupiah = (number) => format("id-ID", "IDR", number);

export default format;
