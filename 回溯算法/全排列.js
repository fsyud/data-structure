// 46. 全排列
// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 示例 2：

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]
// 示例 3：

// 输入：nums = [1]
// 输出：[[1]]

// 提示：

// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// nums 中的所有整数 互不相同
// 通过次数778,874提交次数987,850

// 解题思路
// 要求：1、所有排列情况 2、没有重复元素
// 有出路，有死路
// 考虑使用回溯算法

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];

  const backtrack = (path) => {
    if (path.length === nums.length) {
      res.push(path);
    }

    nums.forEach((n) => {
      if (path.includes(n)) {
        return;
      }

      console.log(path.concat(n), "n");
      backtrack(path.concat(n));
    });
  };

  backtrack([]);

  return res;
};
