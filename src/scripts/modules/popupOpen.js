const popup = document.querySelector('#popup'),
popOpen = document.querySelectorAll('[data-popup-open]'),
popupParent = document.querySelector('.popup-container'),
telInput = document.querySelectorAll('[data-tel-input]');

telInput.forEach((item) =>{
  item.addEventListener('input',(e) =>{
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    console.log(x);
  e.target.value = !x[2] ? x[1] : '' + x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '');
  });
});


function popupTrigle () {

  popOpen.forEach((item) =>{
      item.addEventListener('click',(event) =>{
        event.preventDefault();
        popupOpen();
      });
  });
  popupParent.addEventListener('click', (e)=>{
    if (e.target == popupParent){
      popupClose();
    }
  });
}

 function popupOpen (){
  popup.style.display ="block";
  document.querySelector('body').style.overflow ="hidden";
 }

 function popupClose (){
  popup.style.display ="none";
  document.querySelector('body').style.overflow ="";
 }

export default popupTrigle;