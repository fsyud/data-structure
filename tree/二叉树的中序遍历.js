// 94. 二叉树的中序遍历
// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。

// 示例 1：

// 输入：[1, null, 2, 3]
// 1
//  \
//   2
//   /
// 3

// 输出：[1,3,2]

// 输入：root = [1,null,2,3]
// 输出：[1,3,2]
// 示例 2：

// 输入：root = []
// 输出：[]
// 示例 3：

// 输入：root = [1]
// 输出：[1]

// 提示：

// 树中节点数目在范围 [0, 100] 内
// -100 <= Node.val <= 100

// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

// 通过次数1,031,922提交次数1,355,080

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 递归

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];
  const rec = (n) => {
    if (!n) return;

    rec(n.left);
    res.push(n.val);
    rec(n.right);
  };

  rec(root);

  return res;
};

// 迭代

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = [];
  const stack = [];

  let p = root;

  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }

    const n = stack.pop();

    res.push(n.val);

    p = p.right;
  }

  return res;
};
