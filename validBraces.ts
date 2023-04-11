function validBraces(braces: string) {
  const openers = ["(", "{", "["];
  const closers = [")", "}", "]"];
  const stack: string[] = [];
  for (let index = 0; index < braces.length; index++) {
    const element = braces[index];
    const findCloser = closers.indexOf(element);
    if (findCloser !== -1 && stack.length > 0) {
      if (stack[stack.length - 1] !== openers[findCloser]) {
        return false;
      }
      stack.pop();
    } else {
      stack.push(element);
    }
  }

  return stack.length === 0;
}

/*
    "(){}[]"   =>  True
    "([{}])"   =>  True
    "(}"       =>  False
    "[(])"     =>  False
    "[({})](]" =>  False
  */
