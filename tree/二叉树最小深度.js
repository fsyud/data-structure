// 111. 二叉树的最小深度
// 给定一个二叉树，找出其最小深度。

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

// 示例 1：
//     3
//    / \
//   9  20
//     /  \
//    15   7

// 输入：root = [3,9,20,null,null,15,7]
// 输出：2
// 示例 2：

// 输入：root = [2,null,3,null,4,null,5,null,6]
// 输出：5

// 提示：

// 树中节点数的范围在 [0, 105] 内
// -1000 <= Node.val <= 1000
// 通过次数492,775提交次数957,580

// 解题思路
// 求最小深度，考虑使用广度优先遍历
// 在广度优先遍历过程中，遇到子节点，停止遍历，返回节点层级

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return;

  const q = [[root, 1]];

  while (q.length) {
    const [n, l] = q.shift();

    if (!n.left && !n.right) {
      return l;
    }

    if (n.left) {
      q.push([n.left, l + 1]);
    }

    if (n.right) {
      q.push([n.right, l + 1]);
    }
  }
};
