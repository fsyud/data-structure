class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  getParentIndex(i) {
    // Math.floor((i-1)/2)  取商
    return (i - 1) >> 1; // 二进制数字往右边移一位
  }
  getLeftIndex(i) {
    return i * 2 + 1;
  }
  getRightIndex(i) {
    return i * 2 + 2;
  }
  shiftUp(index) {
    if (index === 0) return;
    const parentIndex = this.getParentIndex(index);

    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  shiftDown(index) {
    const LeftIndex = this.getLeftIndex(index);
    const RightIndex = this.getRightIndex(index);

    if (this.heap[LeftIndex] < this.heap[index]) {
      this.swap(LeftIndex, index);
      this.shiftDown(LeftIndex);
    }

    if (this.heap[RightIndex] < this.heap[index]) {
      this.swap(RightIndex, index);
      this.shiftDown(LeftIndex);
    }
  }

  // 插入
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  // 删除
  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

const h = new MinHeap();

h.insert(3);
h.insert(2);
h.insert(1);
h.pop();
