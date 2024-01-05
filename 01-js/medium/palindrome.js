/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let i=0,j=str.length-1;
  while(i<j){
    while(str[i].charCodeAt(0)<97 || str[i].charCodeAt(0)>122) i++;
    while(str[j].charCodeAt(0)<97 || str[j].charCodeAt(0)>122) j--;
    if(str[i]!==str[j]){
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
