window.onload = () =>{
//создать класс для товара
class GoodItem{
  constructor(title, price, img) {
    this.title = title;
    this.price = price;
    this.img = img;
  }
  render(){
    return `<div class="goods-item"><img class="goods-img" src=${this.img} alt="Картинка товара"><div class="good-info-wrap"><span class="good-title">${this.title}</span><span class="good-price">${this.price}$</span></div><button class="add-to-cart"></button></div>`;
  }
}
//создать класс для списка товаров
class GoodsList{
  constructor(){
    this.goods = [];
  }
  fetchGoods(){
    this.goods = [
      { title: 'Lorem Ipsum is simply', price: 150, img: 'img/good-1.png'},
      { title: 'Nullam vestibulum', price: 50, img: 'img/good-2.png'},
      { title: 'Donec et lorem suscipit', price: 350, img: 'img/good-3.png'},
      { title: 'Curabitur pretium duis', price: 250, img: 'img/good-4.png'},
      { title: 'Donec et lorem suscipit', price: 350, img: 'img/good-3.png'},
      { title: 'Curabitur pretium duis', price: 250, img: 'img/good-4.png'},
      ];
    }
  render(){
    let textHTML = '';
    this.goods.forEach(goods => {
      const goodItem = new GoodItem(goods.title, goods.price, goods.img);
      textHTML += goodItem.render();
    })
    document.querySelector('.goods-list').insertAdjacentHTML("afterbegin",textHTML);
  }
}
  const list = new GoodsList;
  list.fetchGoods();
  list.render();

  //класс для элемента товара корзины
  class CartGoodItem extends GoodItem{
    constructor(title, price, img, count){
      super(title, price, img);
      this.count = count;
    }
    itemPrice(){//стоимость товара с учетом количества
      return this.price*this.count;}
    increaseCount(){  //увеличение единиц товара
      return ++this.count;}
    decreaseCount(){  //уменьшиение единиц товара
      return --this.count;}
    //удаление товара
  }
//класс для корзины
  class CartGoodList{
    constructor(){
      this.goodList = [];
    }
    fetchGoods(){}
    getFullCount(){}//суммарное количество товаров в корзине
    getFullPrice(){}//суммарная стоимость товаров в корзине
    clearCart(){}//очистить корзину
  }
}