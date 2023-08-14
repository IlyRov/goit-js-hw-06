 const validationInput = document.getElementById('validation-input');

  validationInput.addEventListener('blur', () => {
    const expectedLength = parseInt(validationInput.getAttribute('data-length'));
    const inputValue = validationInput.value.trim().length;

    if (inputValue === expectedLength) {
      validationInput.classList.remove('invalid');
      validationInput.classList.add('valid');
    } else {
      validationInput.classList.remove('valid');
      validationInput.classList.add('invalid');
    }
  });