var addTwoNumbers = function(l1, l2) {
  let l3 = new ListNode(null);
  let dummy = l3;
  let carry = 0;
  
  while (l1 || l2) {
    let x = l1 === null ? 0 : l1.val;
    let y = l2 === null ? 0 : l2.val;

    let sum = x + y + carry;
    let rem = 0;
    carry = Math.floor(sum / 10);
    rem = sum % 10;
    l3.next = new ListNode(rem);
    l3 = l3.next;
    
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  if (carry > 0) {
    l3.next = new ListNode(carry);
  }
  return dummy.next;
};

// Array Version
var addTwoNumbers = function(l1, l2) {
  let l3 = [];
  let len = Math.max(l1.length, l2.length);
  let carry = 0;
  let i = 0;

  for (i; i < len; i++) {
    l1[i] = l1[i] || 0;
    l2[i] = l2[i] || 0;
    let sum = l1[i] + l2[i];
    let rem = 0;
    if (carry > 0) {
      sum += carry;
      carry = 0;
    }
    if (sum > 9) {
      carry = 1;
      rem = sum % 10;
      l3.push(rem)
    } else {
      l3.push(sum);
    }
    if (i == len-1 && carry == 1) {
      l3.push(carry)
    }
  }

  return l3;
};
