//set 操作
// 使用set对象：new add delete has size
// 迭代set 多种迭代方法 set与array反转



let mySet = new Set();

mySet.add(1)
const b = { a: 1 }
mySet.add({ a: 1 })
mySet.add(b)


mySet.delete(1)

// size 集合的尺寸
console.log(mySet.size) // 2

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

