window.onload = () =>{
  const API_URL =
  'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

  const app = new Vue({
    el: '#app',
    data: {
      goods: [],
      filteredGoods: [],
      isVisibleCart: true
    },
    methods:{
      fetchGoods(method, url, callback){
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
    },
    filterGoods(){
        const searchString = document.querySelector('.searchString').value;
        const regExpSearch = new RegExp(`${searchString}`, 'i');
        console.log(regExpSearch);
        this.filteredGoods = this.goods.filter(good => {
          console.log(regExpSearch.test(good.product_name));
          return regExpSearch.test(good.product_name)});
        console.log(this.filteredGoods);
    }
  },
  mounted() {
    this.fetchGoods('GET', `${API_URL}/catalogData.json`)
    .then(response => {
      this.goods = JSON.parse(response);
      this.filteredGoods = JSON.parse(response);
    })
    }
  });
}