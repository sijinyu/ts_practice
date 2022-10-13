// 함수

function hello(name = "world", age?: number): string {
  return `Hello, ${name}`;
}
const result = hello("sam", 123);

function add(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

interface User {
  name: string;
  age: number;
}

const Sam: User = { name: "sam", age: 123 };

function showName(this: User, age: number, gender: "m" | "f") {
  console.log(this.name);
}

const a = showName.bind(Sam);
a(30, "m");

function join(name: string, age: string): string;
function join(name: string, age: number): User;
function join(name: string, age: number | string): User | string {
  if (typeof age === "number") {
    return {
      name,
      age,
    };
  } else {
    return "나이는 숫자로 입력해주세요.";
  }
}

const sam: User = join("sam", 30);
