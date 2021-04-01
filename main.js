window.onload = () =>{
  //создать класс для товара
  class GoodItem{
    constructor(title, price) {
      this.title = title;
      this.price = price;
    }  
    render(){
      let titleHtml = `<span class="good-title">${this.title}</span>`;
      let priceHtml = `<span class="good-price">${this.price}$</span>`;
      let goodHtml = `<div class="good-info-wrap">${titleHtml}${priceHtml}</div>`;
      return `<div class="goods-item">${goodHtml}<button class="add-to-cart"></button></div>`;
    }
  }
//создать класс для списка товаров
class GoodsList{
  constructor(){
    this.goods = [];
  }
  fetchGoods(method, url){
    return new Promise((resolve, reject)=>{
      let xhr;
      if(window.XMLHttpRequest){
        xhr = new window.XMLHttpRequest();
    }
      else if(window.ActiveXObject){
        xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
      }
      xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            resolve(xhr.responseText);
          }
          else { 
            reject('Error'); 
          }    
        }
      }
      xhr.open(method, url, true);
      xhr.send();
    })
   }
  render(){
    let textHTML = '';
    this.goods.forEach(goods => {
      const goodItem = new GoodItem(goods.product_name, goods.price);
      textHTML += goodItem.render();
    })
    document.querySelector('.goods-list').insertAdjacentHTML("afterbegin",textHTML);
  }
  //расчет полной стоимости товаров
  getFullPrice(){
    return this.goods.reduce((fullPrice, goodItem) => fullPrice + goodItem.price, 0);
  }
}
class CartItem{ //конструктор класса "Товар корзины"
  constructor(good, count = 1){
    this.item = good;
    this.count = count;
  }
}
class Cart{ //конструктор класса "Корзина"
  constructor(){
    this.cartItems = [];
  }
  push(good){ //добавление товара в корзину
    let cartItem;
    cartItem = this.cartItems.find(item => item.name === good.name)
    if(cartItem){
      cartItem.count +=1;
    }
    else{
      cartItem = new CartItem(good);
      this.cartItems.push(cartItem);
    }
  }
  getCartGoods() { //получение списка товаров в корзине
    return this.cartItems;
  }
}
//добавление товара в корзину
const addToCart = (good) => cart.push(good);

const  url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
const list = new GoodsList;
const cart = new Cart;
list.fetchGoods('GET', `${url}/catalogData.json`)
.then(response =>{
  list.goods = JSON.parse(response);
  list.render();
})
}