const fontSizeControl = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
  const minFontSize = 16; 
  const maxFontSize = 96; 
  const inputValue = fontSizeControl.value;
  

  const fontSize = minFontSize + ((maxFontSize - minFontSize) * (inputValue - fontSizeControl.min)) / (fontSizeControl.max - fontSizeControl.min);
  
  textElement.style.fontSize = fontSize + 'px';
});
