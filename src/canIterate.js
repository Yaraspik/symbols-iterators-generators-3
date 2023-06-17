export default function canIterate(object) {
  return Symbol.iterator in Object(object);
}

console.log(
  canIterate(new Map()), // true
  canIterate(new Set()), // true
  canIterate(null), // false
  canIterate(10), // false
  canIterate('Netology'), // true
);
