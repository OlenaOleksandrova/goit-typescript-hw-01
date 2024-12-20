type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}

function compare<T extends Pick<AllType, keyof AllType>>(
    top: T,
    bottom: T
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}
const example = {
    name: "Top Item",
    position: 1,
    color: "Red",
    weight: 100,
};
console.log(example)
