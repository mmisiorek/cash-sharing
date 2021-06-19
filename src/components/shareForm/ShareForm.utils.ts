export const getInputValue = (
  value: string,
  decimals?: number
): string | null => {
  const decimalSupport = decimals && decimals !== 0;
  const isValueEndsWithSingleDot =
    value.split(".").length - 1 === 1 && value.endsWith(".");

  const integerAmountPattern = "^\\d{0,30}";
  const decimalAmountPattern = `(\\.\\d{1,${decimals}})?$`;

  if (decimalSupport) {
    const decimalLimitRegex = new RegExp(
      integerAmountPattern + decimalAmountPattern
    );

    if (value.match(decimalLimitRegex)) {
      return value;
    }
  } else {
    const integerLimitRegex = new RegExp(integerAmountPattern + "?$");

    if (value.match(integerLimitRegex)) {
      return value;
    }
  }

  if (isValueEndsWithSingleDot && decimalSupport) {
    const replacedValue = value.replace(/^0+/, "");

    if (replacedValue.length === 1 && replacedValue === ".") {
      return "0.";
    }

    return replacedValue;
  }

  return null;
};
