// 102. 二叉树的层序遍历
// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。

// 示例 1：
//     3
//    / \
//   9  20
//     /  \
//    15   7

// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]
// 示例 2：

// 输入：root = [1]
// 输出：[[1]]
// 示例 3：

// 输入：root = []
// 输出：[]

// 提示：

// 树中节点数目在范围 [0, 2000] 内
// -1000 <= Node.val <= 1000
// 通过次数724,503提交次数1,109,544
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 解题思路
// 层序遍历顺序就是广度优先遍历
// 不过在遍历时候需要记录当前节点所处的层级，方便将其添加到不同的数组中

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const q = [[root, 0]];

  const res = [];

  while (q.length) {
    const [n, level] = q.shift();

    if (!res[level]) {
      res.push([n.val]);
    } else {
      res[level].push(n.val);
    }

    if (n.left) q.push([n.left, level + 1]);

    if (n.right) q.push([n.right, level + 1]);
  }

  return res;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const q = [root];

  const res = [];

  while (q.length) {
    let len = q.length;
    res.push([]);
    while (len--) {
      const n = q.shift();
      res[res.length - 1].push(n.val);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
  }

  return res;
};
