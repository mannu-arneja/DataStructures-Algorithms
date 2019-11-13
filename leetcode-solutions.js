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