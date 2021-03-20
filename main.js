window.onload = () =>{
  const goods = [
  { title: 'Lorem Ipsum is simply', price: 150, img: 'img/good-1.png'},
  { title: 'Nullam vestibulum', price: 50, img: 'img/good-2.png'},
  { title: 'Donec et lorem suscipit', price: 350, img: 'img/good-3.png'},
  { title: 'Curabitur pretium duis', price: 250, img: 'img/good-4.png'},
  { title: 'Donec et lorem suscipit', price: 350, img: 'img/good-3.png'},
  { title: 'Curabitur pretium duis', price: 250, img: 'img/good-4.png'},
  ];
  const renderGoodsItem = (title, price, img) => {
  return `<div class="goods-item"><img class="goods-img" src=${img} alt="Картинка товара"><div class="good-info-wrap"><span class="good-title">${title}</span><span class="good-price">${price}$</span></div><button class="add-to-cart"></button></div>`;
  };
  const renderGoodsList = (list = []) => {
  let goodsList = list.map(item =>
    renderGoodsItem(item.title, item.price, item.img));
  document.querySelector('.goods-list').insertAdjacentHTML("afterbegin",goodsList.join(''));
  }
  renderGoodsList(goods);
}
