function likes(names) {
  const arrLength = names.length;
  if (arrLength === 0) return "no one likes this";
  if (arrLength < 2) return `${names[0]} likes this`;
  if (arrLength < 3) return `${names[0]} and ${names[1]} like this`;
  if (arrLength < 4)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;

  return `${names[0]}, ${names[1]} and ${arrLength - 2} others like this`;
}

/**
  []                                -->  "no one likes this"
  ["Peter"]                         -->  "Peter likes this"
  ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
  ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
  ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
 */
