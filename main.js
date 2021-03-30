window.onload = () =>{
  const url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
  let xhr;
  if(window.XMLHttpRequest){
    xhr = new window.XMLHttpRequest();
  }
  else if(window.ActiveXObject){
    xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
  }
  function loadGoodsList(url, callback){
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4){
        callback(xhr.responseText);
      }
    }
    xhr.open('GET', url, true);
    xhr.send();
  };
//создать класс для товара
  class GoodItem{
    constructor(product_name, price) {
      this.product_name = product_name;
      this.price = price;
    }  
    render(){
   //   let goodImage = `<img class="goods-img" src=${this.img} alt="Картинка товара">`;
      let goodTitlePrice = `<div class="good-info-wrap"><span class="good-title">${this.product_title}</span><span class="good-price">${this.price}$</span></div>`;
      return `<div class="goods-item">${goodTitlePrice}<button class="add-to-cart"></button></div>`;
    }
  }
//создать класс для списка товаров
class GoodsList{
  constructor(){
    this.goods = [];
  }
  fetchGoods(callback){
    loadGoodsList(`${url}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);})
      callback();
    }
  render(){
    let textHTML = '';
    console.log(this.goods);
    this.goods.forEach(goods => {
      const goodItem = new GoodItem(goods.product_name, goods.price);
      textHTML += goodItem.render();
    })
    document.querySelector('.goods-list').insertAdjacentHTML("afterbegin",textHTML);
  }
  //расчет полной стоимости товаров
  getFullPrice(){
    return this.goods.reduce((fullPrice, goodItem) => fullPrice + goodItem.price, 0);}
  }
  const list = new GoodsList;
  list.fetchGoods(()=>{list.render();});
//  console.log('Полная стоимость товаров', list.getFullPrice());

  //класс для элемента товара корзины
  class CartGoodItem extends GoodItem{
    constructor(title, price, count){
      super(title, price);
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