document.getElementById('mybutton').addEventListener('click', function(e) {
    alert('button clicked');
    }
)

document.getElementById('mysecondbutton').addEventListener('click', function(e) {
    console.log(e.target);
    console.log(e.target.classList);
    var parento = e.target.parentElement;
    console.log(parento);
    parento.classList.add('red-background');
    parento.classList.remove('blue-background');
    console.log(parento.classList);
    }
)

document.getElementById('mythirdbutton').addEventListener('click', function(e) {
        var parento = e.target.parentElement;
        console.log(parento);
        parento.classList.toggle('red-background');
        console.log(parento.classList);
    }
)