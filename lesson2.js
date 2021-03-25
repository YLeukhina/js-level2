//формирование справочника с добавками
const allToppings = [
  {name: 'cheese', price: 10, calories: 20},
  {name: 'salad', price: 20, calories: 5},
  {name: 'potatoes', price: 15, calories: 10},
  {name: 'condiment', price: 15, calories: 0},
  {name: 'mayonnaise', price: 20, calories: 5}
];
//класс Гамбургер
class Hamburger{
  constructor(size = 'small', price = 50, calories = 20) {
    this.price = price;
    this.calories = calories;
    this.size = size;
    this.toppings = [];
  }
  //добавление добавок. Если добавка есть в справочнике добавок, то к текущей стоимости/калорийности гамбургера добавляется стоимость/калорийность добавки
  addToppings(toppingList){
    for(let elem in toppingList)
    {
      let newTopping = allToppings.find(item => item.name == toppingList[elem]);
      if(newTopping){
        this.price += newTopping.price;
        this.calories += newTopping.calories;
        this.toppings.push(newTopping.name);}
    }
  }
  //получить стоимость гамб.
  getPrice(){
    return `Гамбургер стоит ${this.price} рублей`;
  }
  //получить калорийность гамб.
  getCalories(){
    return `Калорийность гамбургера: ${this.calories} ккал`;
  }
  //получить список добавок
  getToppings(){
    return `Добавки: ${this.toppings.join(', ')}`;
  }
}

const hamburger = new Hamburger('big', 100, 40);
hamburger.addToppings(['cheese', 'cheese', 'salad']);
console.log(hamburger.getToppings());
console.log(hamburger.getPrice());
console.log(hamburger.getCalories());