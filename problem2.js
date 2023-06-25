/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
a. 1 <= s.length <= 10^5
b. s consists of only lowercase English letters.
*/

const nonRepeat = (str) => {
    const charCount = new Map();

    // Count the occurrences of each character
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  
    // Find the index of the first non-repeating character
    for (let i = 0; i < str.length; i++) {
      if (charCount.get(str[i]) === 1) {
        return i;
      }
    }
  
    return -1; 
};

let str = 'leetcode';
console.log(nonRepeat(str)); // Output: 0

let str1 = 'loveleetcode';
console.log(nonRepeat(str1)); // Output: 2

let str2 = 'aabb';
console.log(nonRepeat(str2)); // Output: -1