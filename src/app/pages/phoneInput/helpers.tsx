const getDigitsOnly = (s: string) => {
  return s.replace(/[^\d]/g, ""); // remove all non-digits
};

const formatPhoneNumber = (value: string) => {
  let formattedText = getDigitsOnly(value);
  if (formattedText.length > "123".length) {
    formattedText = formattedText.replace(/(\d{3})/, "($1) "); // format "123" as "(123)""
    if (formattedText.length > "(123) 456".length) {
      formattedText = formattedText.replace(/\((\d{3})\) (\d{3})/, "($1) $2-"); // format "(123) 4567" as "(123) 456-7"
    }
  }
  return formattedText;
};

const isDigit = (c: string) => {
  return c >= "0" && c <= "9";
};

const countDigitsBeforeCursor = (text: string, cursorPosition: number) => {
  let i = 0;
  let digitCount = 0;
  while (i < cursorPosition && i < text.length) {
    if (isDigit(text.charAt(i))) {
      digitCount++;
    }
    i++;
  }
  return digitCount;
};

const getCursorPositionAfterNDigits = (
  text: string,
  numDigitsBeforeCursor: number,
) => {
  let i = 0;
  let digitCount = 0;
  while (i < text.length) {
    if (isDigit(text.charAt(i))) {
      digitCount++;
      if (digitCount === numDigitsBeforeCursor) return i + 1;
    }
    i++;
  }
  return 0;
};

export const getNewValueAndCursorPosition = (
  unformattedPhoneNumber: string,
  oldCursorPosition: number,
) => {
  const numDigitsBeforeCursor = countDigitsBeforeCursor(
    unformattedPhoneNumber,
    oldCursorPosition,
  );

  const formattedPhoneNumber = formatPhoneNumber(unformattedPhoneNumber);
  const newCursorPosition = getCursorPositionAfterNDigits(
    formattedPhoneNumber,
    numDigitsBeforeCursor,
  );
  return { formattedPhoneNumber, newCursorPosition };
};

export const debugField = (field: string, cursorPosition: number) => {
  return `${field.slice(0, cursorPosition)}|${field.slice(cursorPosition)}`;
};
