// 链表形式 得到JSON上的VAL

const json = {
  a: { b: { c: 1 } },
  d: { e: 2 },
};

const path = ["a", "b", "c"];

p = json;
path.forEach((k) => {
  p = p[k];
});
