window.onload = () => {
  let text = "'After the sunset,' he said. 'We'll have to go home.'";
  const regexp1 = /\B\'/g;
  let newText = text.replace(regexp1, '\"');
  console.log(newText);
  //регулярные выражения для полей: имя, телефон, email
  const $error = document.querySelector('.error');
  const $submitBtn = document.querySelector('.submit');
  const regexpName = /[^A-Za-zА-Яа-я\s]/;
  const regexpPhone = /\+7\(\d{3}\)\d{3}-\d{4}$/;
  const regexpEmail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/i;
  $submitBtn.addEventListener('click',  (e)=>{
    const items = document.querySelectorAll('input[type = "text"]');
    $error.textContent = '' //ощищаем блок с сообщениями об ошибках
    let errorText = '';
    items.forEach((item) => {
      item.classList.remove('select'); //класс для выделения полей при ошибке
      switch(item.id){
        case 'user-name':
          if(item.value.match(regexpName) != null){
            errorText += '<p>Имя пользователя должно содержать только буквы</p>';
            item.classList.add('select');
          }
          break;
        case 'phone':
          if(item.value.match(regexpPhone) == null){
            errorText += '<p>Телефон должен быть в формате +7(000)000-0000</p>';
            item.classList.add('select');
          }
          break;
        case 'email':
          if(item.value.match(regexpEmail) == null){
            errorText += '<p>Email должен иметь вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.</p>';
            item.classList.add('select');
          }
          break;
        default:
          break;
      }
    });
    if(errorText >''){
      $error.insertAdjacentHTML('afterbegin',errorText)
    };
  });
}