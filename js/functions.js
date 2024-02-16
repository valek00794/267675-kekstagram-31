export function checkStrLength(str, maxLength) {
  return str.length <= maxLength;
}

export function checkStrPalindrome(str) {
  const strNotmalize = str.replaceAll().toLowerCase();
  let newStr = '';
  for (let i = strNotmalize.length; i--; 0) {
    newStr += strNotmalize[i];
  }
  return strNotmalize === newStr;
}

