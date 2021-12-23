# 206. 反转单链表 Reverse Linked List

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let cur = head
  let pre = null

  while(cur !== null) {
    const temp = cur.next
    cur.next = pre
    pre = cur
    cur = temp  
  }

  return pre
};
```