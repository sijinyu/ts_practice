// 함수 정의
// interface 는 확장이 가능하다.

interface Add {
  (num1: number, num2: number): number;
}

const add: Add = function (x, y) {
  return x + y;
};

interface isAudlt {
  (age: number): boolean;
}

const a: isAudlt = (age) => {
  return age > 19;
};

//클래스 정의

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

interface Benz extends Car {}

class Bmw implements Car {
  color = "red";
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log("시작");
  }
}

const b = new Bmw("green");
console.log(b);
console.log(b.start());
