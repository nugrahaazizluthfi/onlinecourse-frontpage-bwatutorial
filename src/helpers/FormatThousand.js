const FormatThousand = (number = 0) => {
  const thousand = new Intl.NumberFormat();
  return thousand.format(number);
};

export default FormatThousand;
