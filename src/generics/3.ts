function merge<T, U> (objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
}

const objA = { name: 'Olena2', age: 38 };
const objB = {job: "Developer", country: "Ukraine" };

const all = merge(objA, objB);
console.log(all);