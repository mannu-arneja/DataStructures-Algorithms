// LeetCode

// Add Two Numbers 
// https://leetcode.com/problems/add-two-numbers

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Push array to linked list
function arrToNode(arr) {
    if (arr.length === 0) return;
    let result = new ListNode(arr.shift());
    let node = result
    while (arr.length) {
        node.next = (new ListNode(arr.shift()))
        node = node.next
    }
    return result
}

// solution
const addTwoNumbers = function(l1, l2) {
    let firstNum = []
    let secondNum = []
    
    let node = l1
    while (node) {
        firstNum.push(node.val)
        node = node.next
    }
    
    node = l2
    while (node) {
        secondNum.push(node.val)
        node = node.next
    }
    
    let sum = BigInt(firstNum.reverse().join('')) + BigInt(secondNum.reverse().join(''))
    let sumArr = sum.toLocaleString('fullwide', {useGrouping: false}).split('').reverse()
    let result = new ListNode(sumArr.shift());
    node = result
    while (sumArr.length) {
        node.next = (new ListNode(sumArr.shift()))
        node = node.next
    }
    
    return result
};



//test 
// let l1 = arrToNode([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
// let l2 = arrToNode([5,6,4])
// addTwoNumbers(l1, l2)


// Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = function (str) {
    let set = new Set();
    let counts = [];

    for (char of str) {
        if (!set.has(char)) {
            set.add(char)
        } else {
            counts.push(set.size)

            let arr = Array.from(set.keys())
            let newArr = arr.slice(arr.indexOf(char) + 1)

            set.clear()
            newArr.forEach(val => {
                set.add(val)
            })
            set.add(char)
        }
    }
    counts.push(set.size)

    return Math.max(...counts)
}
//test
// lengthOfLongestSubstring('dvdf') // -> 3



// ZigZag Conversion
// https://leetcode.com/problems/zigzag-conversion/

zigZag = (s, numRows) => {
    // init hash[row] = chars
    let hash = {}
    // init current row integer at base value
    let curRow = 0
    // init direction flag
    let dir_flag = -1

    for (char of s) {
        // add char to hash at key of current row
        hash[curRow] ? hash[curRow] += (char) : hash[curRow] = char;

        // increment or decrement current row on condition of direction flag
        dir_flag === -1 ? curRow += 1 : curRow -= 1

        // invert direction at maximum row and base row
        if (curRow === numRows-1 || curRow === 0) dir_flag = -dir_flag
    }

    return Object.values(hash).join('')
}
//test
// zigZag("PAYPALISHIRING", 3) // "PAHNAPLSIIGYIR"
// console.log(zigZag("PAYPALISHIRING", 3));
//  P   A   H   N
//  A P L S I I G
//  Y   I   R

// zigZag("PAYPALISHIRING", 4) // "PINALSIGYAHRPI"
// console.log(zigZag("PAYPALISHIRING", 4));
//  P     I    N
//  A   L S  I G
//  Y A   H R
//  P     I



// Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/

const longestPalindrome = function (s) {
    let result = "";
    let strTable = Array.from({ length: s.length }, () => new Array(s.length).fill(false))

    // one-char palindrome
    for (let i = 0; i < s.length; i++) {
        strTable[i][i] = true

        result = s[i]
    }

    // two-char palindrome
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            strTable[i][i + 1] = true

            result = s.substring(i, i + 2)
        }
    }

    // >2 char palindrome
    for (let k = 2; k <= s.length; k++) {
        for (let i = 0; i <= s.length - k; i++) {
            j = i + k - 1

            if (s[i] === s[j] && strTable[i + 1][j - 1] === true) {
                strTable[i][j] = true

                result = k > result.length ? s.substring(i, j + 1) : result
            }
        }
    }
    return result
}
// test
// longestPalindrome('racecar')
// console.table(strTable)
// ┌─────────┬───────┬───────┬───────┬───────┬───────┬───────┬───────┐
// │ (index) │   0   │   1   │   2   │   3   │   4   │   5   │   6   │
// ├─────────┼───────┼───────┼───────┼───────┼───────┼───────┼───────┤
// │    0    │ true  │ false │ false │ false │ false │ false │ true  │
// │    1    │ false │ true  │ false │ false │ false │ true  │ false │
// │    2    │ false │ false │ true  │ false │ true  │ false │ false │
// │    3    │ false │ false │ false │ true  │ false │ false │ false │
// │    4    │ false │ false │ false │ false │ true  │ false │ false │
// │    5    │ false │ false │ false │ false │ false │ true  │ false │
// │    6    │ false │ false │ false │ false │ false │ false │ true  │
// └─────────┴───────┴───────┴───────┴───────┴───────┴───────┴───────┘ 