// 104. 二叉树的最大深度
// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。

// 通过次数908,022提交次数1,177,464

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 解题思路
// 求最大深度，考虑使用深度优先遍历
// 在深度优先遍历过程中，记录每个节点所在的层级，找出最大的层级即可

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let res = 0;
  const dfs = (n, l) => {
    if (!n) return;

    if (!n.left && !n.right) {
      res = Math.max(res, 1);
    }

    dfs(n.left, l + 1);
    dfs(n.right, l + 1);
  };

  dfs(root, 1);

  return res;
};
