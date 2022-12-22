const m = new Map()

// 增
m.set('a', 'aa')
m.set('b', 'bb')

// 删
m.delete('b')

// m.clear() // 所有清除

// 改
m.set('a', 'aaa')


// 查
console.log(m.get('a'))
