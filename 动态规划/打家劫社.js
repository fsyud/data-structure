// 198. 打家劫舍
// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。

// 示例 1：

// 输入：[1,2,3,1]
// 输出：4
// 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。
// 示例 2：

// 输入：[2,7,9,3,1]
// 输出：12
// 解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//      偷窃到的最高金额 = 2 + 9 + 1 = 12 。

// 提示： 

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 400
// 通过次数674,233提交次数1,246,646

// 解题思路
// f(k) = 从前k个房屋中能偷窃到的最大数额
// Ak = 第k个房屋的钱数
// f(k) = max(f(k-2) + Ak, f(k-1))

/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    const dp = [0, nums[0]]

    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
    }

    return dp[nums.length]
};


/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    const dp0 = 0;
    const dp1 = nums[0]

    for (let i = 2; i <= nums.length; i++) {
        const dp2 = Math.max(dp0 + nums[i - 1], dp1)
        dp0 = dp1;
        dp1 = dp2;
    }

    return dp1;
};