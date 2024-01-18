const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

function convertToRoman(num) {
  const romanNumerals = {
    M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
  };

  let roman = '';

  if (num < 1) {
    return 'Please enter a number greater than or equal to 1';
  } else if (num >= 4000) {
    return 'Please enter a number less than 4000';
  }

  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      roman += key;
      num -= romanNumerals[key];
    }
  }

  return roman;
}

// check if input is empty and convert to Roman numeral.
function empty() {
  const input = document.getElementById('number').value;
  const num = parseInt(input);
  
  if (num === -1) {
    output.textContent = 'Please enter a number greater than or equal to 1';
  } else if (num >= 4000) {
    output.textContent = 'Please enter a number less than or equal to 3999';
  } else if(input === ''){
    output.textContent = 'Please enter a valid number'
  } else {
    const romanValue = convertToRoman(num);
    output.textContent = romanValue;
  }
}

convertButton.addEventListener('click', empty);