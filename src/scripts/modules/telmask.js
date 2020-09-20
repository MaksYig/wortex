const telMask = ()=>{

function phoneMask (inputSelector){
  const input = document.querySelectorAll(inputSelector);

  input.forEach((item) =>{
      item.addEventListener('input', (e) =>{
       let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

      e.target.value = !x[2] ? x[1] : '' + x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '') + (x[4] ? '-' + x[4] : '');

      });
  });

}

phoneMask('[data-tel-input]');

};

export default telMask;