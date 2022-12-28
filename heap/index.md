# 堆是什么

- 堆是一种特殊的**完全二叉树**
- 所有的节点都大于等于（最大堆）或小于等于（最小堆）它的子节点

![VeryCapture_20221228184656](https://user-images.githubusercontent.com/26371465/209800382-5543e811-ff9c-4007-80f4-9be7f6817c84.jpg)

# JS中的堆

- JS中通常使用数组表示堆
- 左侧子节点的位置是 2*index + 1
- 右侧子节点的位置是 2*index + 2
- 父节点位置是 (index - 1)/2  // 求商

![VeryCapture_20221228184750](https://user-images.githubusercontent.com/26371465/209800496-9a0731a7-f794-440b-ab66-9b38d8d574f9.jpg)


# 堆的应用

- 堆能高效、快速的找出最大值和最小值，时间复杂度：O(1)
- 找出第K个最大（小）元素。


![VeryCapture_20221228191025](https://user-images.githubusercontent.com/26371465/209803256-c79f4b06-e455-49f1-b1d5-b085768c74f0.jpg)
