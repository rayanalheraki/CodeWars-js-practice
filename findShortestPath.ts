function dirReduc(arr: string) {
  const stack: Array<string> = [];
  const directions = {
    WEST: "EAST",
    EAST: "WEST",
    SOUTH: "NORTH",
    NORTH: "SOUTH",
  };

  for (let index = 0; index < arr.length; index++) {
    const direction = arr[index];
    const opposite = directions[direction];

    if (stack[stack.length - 1]?.toUpperCase() === opposite) {
      stack.pop();
    } else {
      stack.push(direction);
    }
  }
  return stack;
}

/*
    input => output
    ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"] => ["WEST"]			
    ["NORTH", "WEST", "SOUTH", "EAST"] => ["NORTH", "WEST", "SOUTH", "EAST"]
    ["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"] = >
  */
