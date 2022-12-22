//set 操作
// 使用set对象：new add delete has size
// 迭代set 多种迭代方法 set与array反转



let mySet = new Set();

mySet.add(1)
const b = { a: 1 }
mySet.add({ a: 1 })
mySet.add(b)

mySet.add(5)


mySet.delete(1)

// size 集合的尺寸
console.log(mySet.size) // 3

// 迭代set
for (let i of mySet) {
    console.log(i)
}

for (let i of mySet.keys()) {
    console.log(i)
}


for (let i of mySet.values()) {
    console.log(i)
}

for (let [key, value] of mySet.entries()) {
    console.log(key, value)
}

// set->array 互转
const myArr = [...mySet]

const myArr1 = Array.from(mySet);

// array -> set
const mySet2 = new Set([1, 2, 3])

// 求交集
const intersection = new Set([...mySet].filter(s => mySet2.has(x)))

// 求差集
const difference = new Set([...mySet].filter(x => !mySet2.has(x)))
