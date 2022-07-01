const form = document.querySelector('form');
const submitBtn = form.querySelector('button');


submitBtn.addEventListener('click', validateForm);


function validateForm (e) {
  if (!form.checkValidity()) {
    e.preventDefault();
    form.classList.add('invalid-input');
  }
  
  setTimeout(function() {
    form.classList.remove('invalid-input');
  }, 3000);
  
}

