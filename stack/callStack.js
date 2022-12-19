// 函数调用堆栈

const f1 = () => {
    f2()
}

const f2 = () => {
    f3()
}

const f3 = () => {}

f1();