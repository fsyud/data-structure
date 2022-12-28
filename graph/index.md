# 图是什么

- 图是**网络结构**的抽象模型，是一组由边连接的节点
- 图可以表示任何二元关系，比如路、航班......
- JS中没有图，但是可以用Object和Array构件图
- 图的表示法：邻接矩阵、邻接表、关联矩阵......

![VeryCapture_20221227181631](https://user-images.githubusercontent.com/26371465/209651742-0536c42b-fcfb-4edb-8535-341e81dfc6a6.jpg)

![VeryCapture_20221227181854](https://user-images.githubusercontent.com/26371465/209651950-efd9b286-2199-4e0e-9cc3-02145253ff82.jpg)


# 图的常用操作

- 深度优先遍历
- 广度优先遍历


# 什么是深度/广度优先遍历

- 深度优先遍历：尽可能深的搜索图的分支
- 广度优先遍历：先访问离根节点最近的节点



### 深度优先遍历口诀![VeryCapture_20221227182900](https://user-images.githubusercontent.com/26371465/209754001-bc6f875b-646f-4c64-9b52-e909f38ab782.jpg)


- 访问根节点
- 对根节点的**没访问过的相邻节点**挨个进行深度优先遍历


![VeryCapture_20221227182900](https://user-images.githubusercontent.com/26371465/209754008-7fd10b29-2fd7-4741-a085-75ccd2e05ac4.jpg)
