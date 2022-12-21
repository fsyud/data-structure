
// obj -> Object.prototype -> null
// func -> Function.prototype -> Object.prototype -> null
// arr -> Array.prototype -> Object.prototype -> null

const obj = {};
const func = () => {};
const arr = [];