// 206

// 示例: 输入 1-> 2 -> 3 -> 4 -> 5 -> null
//      输出 null -> 5 -> 4 -> 3 -> 2 -> 1

// 206. 反转链表
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

// 示例 1：

// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]
// 示例 2：

// 输入：head = [1,2]
// 输出：[2,1]
// 示例 3：

// 输入：head = []
// 输出：[]

// 提示：

// 链表中节点的数目范围是 [0, 5000]
// -5000 <= Node.val <= 5000

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
var reverseList = function (head) {
  let p1 = head;
  let p2 = null;

  while (p1) {
    console.log(p1.val, p2 && p2.val)
    const tmp = p1.next;

    p1.next = p2;

    p2 = p1;
    p1 = tmp;
  }

  return p2;
};
