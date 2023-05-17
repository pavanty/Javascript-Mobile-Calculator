
const inputdata = document.getElementById('inputvalue');
var string = '';

 document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', b => {
    if (b.target.innerHTML === 'C') {
      string = '';
    }
    else if (b.target.innerHTML === '=') {
      string = eval(string);
    }
     else {
      string = string +b.target.innerHTML;
    }
    inputdata.value = string;
  });
});
