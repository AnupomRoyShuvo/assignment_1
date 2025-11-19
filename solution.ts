//Todo --- Problem 1

const formatValue = (
  value: string | number | boolean
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    if (value === true) {
      return false;
    } else if (value === false) {
      return true;
    }
  }
};

// console.log(formatValue("hello"));
// console.log(formatValue(5));
// console.log(formatValue(false));

//Todo --- Problem 2

const getLength = (value: string | number[]): number => {
  if (typeof value === "string") {
    return value.split("").length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
};

// console.log(getLength("typescript"));
// console.log(getLength([10, 20, 30, 40]));

//Todo --- Problem 3

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const person1 = new Person("John Doe", 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());

//Todo --- Problem 4

type Books = {
  title: string;
  rating: number;
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
  { title: "Book D", rating: 6.0 },
];

const filterByRating = (value: Books[]): Books[] => {
  return value.filter((i) => {
    if (i.rating < 0 || i.rating > 5) {
      console.log(`${i.title} Must Need A Rating Betwen 0-5`);
      return false;
    } else {
      return i.rating >= 4;
    }
  });
};
// console.log(filterByRating(books));

// Todo - Problem 5

const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

type activity = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (value: activity[]): activity[] => {
  return value.filter((i) => {
    return i.isActive === true;
  });
};

// console.log(filterActiveUsers(users));

// Todo - Problem 6

const myBook: Book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publishedYear: 1925,
  isAvailable: true,
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (value: Book) => {
  console.log(
    `Title: ${value.title}, Author: ${value.author}, Published: ${
      value.publishedYear
    }, Available: ${value.isAvailable ? "Yes" : "No"}`
  );
};

printBookDetails(myBook);

// Todo - Problem 7

type Arr = {
  value1: any[];
  value2: any[];
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const array3 = ["apple", "banana", "cherry"];
const array4 = ["banana", "date", "fig"];

const getUniqueValues = <T extends string | number>(
  arr1: T[],
  arr2: T[]
): T[] => {
  const unique: T[] = [];
  const all = [...arr1, ...arr2];

  for (let i = 0; i < all.length; i++) {
    let exists = false;
    for (let j = 0; j < unique.length; j++) {
      if (unique[j] === all[i]) {
        exists = true;
        break;
      }
    }
    if (!exists) unique[unique.length] = all[i];
  }

  return unique;
};

// Test
// Output: [1, 2, 3, 4, 5, 6, 7]

console.log(getUniqueValues(array3, array4));

// Todo - Problem 8

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

type product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (value: product[]): number => {
  let sum = 0;

  value.map((i) => {
    const discount = i.discount ?? 0;
    const discountRate = discount / 100;

    // console.log(discount);
    const total = i.quantity * i.price * discountRate;
    return (sum += i.quantity * i.price - total);
  });
  return sum;
};

// console.log(calculateTotalPrice(products));
