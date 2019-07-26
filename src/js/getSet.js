
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    walk() {
      alert("I walk: " + this.name);
    }
  }
  
  class Rabbit extends Animal {
    constructor() {
      // вызвать конструктор Animal с аргументом "Кроль"
       super("Кроль"); // то же, что и Animal.call(this, "Кроль")
    }
  }
  
  new Rabbit().walk(); // I walk: Кроль