// storing information on browser with localStrorage
if (!localStorage.getItem('counter')) { // if there is not counter variable
    localStorage.setItem('counter', 0);
}

function hello() {
    const heading = document.querySelector('h1'); // if value never gonna change. use const
    if (heading.innerHTML === 'Hello') { // === -> strict equality. has to be same type
        // -> values should be same but can be different type
        heading.innerHTML = "Goodbye";
    } else {
        heading.innerHTML = "Hello";
    }
}
function count() {
    const heading = document.querySelector('h2');
    let counter = localStorage.getItem('counter');
    counter++;
    heading.innerHTML = counter;
    localStorage.setItem('counter', counter);

    // if (counter % 10 === 0) {
    //    alert(`Count is now ${counter}`); // for f strings use `<string>` ${<variable>}
    // }
}
// If you do this before DOM is loaded, then js cant find the elements.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('h2').innerHTML = localStorage.getItem('counter');
    document.getElementById('count').onclick = count;
    document.getElementById('hello').onclick = hello;

    setInterval(count, 1000); // every 1000ms runs the count function
}); // addeventlistener takes two arguments: event and the function 
