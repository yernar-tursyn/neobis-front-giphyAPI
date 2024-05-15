const inputField = document.getElementById('myInput');

inputField.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    console.log('Привет');
    inputField.value = '';
  }
});