

 const btn = document.getElementsByTagName("button");


 //btn[0].addEventListener('click', () => console.log('Has pulsado el botón 1'));
 //btn[1].addEventListener('click', () => console.log('Has pulsado el botón 2'));

 btn[0].addEventListener('click', () => document.body.style.backgroundColor = 'red');
 btn[1].addEventListener('click', () => document.body.style.backgroundColor = 'green');
