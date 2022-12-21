const instance = (A, B) => {
  const p = A;

  while (p) {
    if ((p = B.prototype)) {
      return true;
    }
    p = p.__proto__;
  }

  return false;
};
