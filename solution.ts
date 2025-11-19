const formatValue = (
  value: string | number | boolean
): string | number | boolean | undefined => {
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

const getLength = (value: string | number[]): number | undefined => {
  if (typeof value === "string") {
    return value.split("").length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
};

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

const getUniqueValues = <T extends string | number>(
  array1: T[],
  array2: T[]
): T[] => {
  const unique: T[] = [];
  const both = [...array1, ...array2];

  for (let i = 0; i < both.length; i++) {
    let exists = false;
    for (let j = 0; j < unique.length; j++) {
      if (unique[j] === both[i]) {
        exists = true;
        break;
      }
    }
    if (!exists) unique[unique.length] = both[i];
  }

  return unique;
};

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

    const total = i.quantity * i.price * discountRate;
    return (sum += i.quantity * i.price - total);
  });
  return sum;
};
