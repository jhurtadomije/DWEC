

document.getElementById('normal').addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    document.body.style.fontFamily = 'Arial, sans-serif';
});

document.getElementById('minimalista').addEventListener('click', function() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Helvetica, sans-serif';
});

document.getElementById('normal').addEventListener('click', function() { 
    document.getElementById('themeStylesheet').href = 'normal.css'; 
}); 
document.getElementById('minimalista').addEventListener('click', function() {
     document.getElementById('themeStylesheet').href = 'minimalista.css'; 
    });