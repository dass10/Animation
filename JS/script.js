function showAlert(){
    //we will use alert and console,log for debugging


    //alert("hello world");
    //console.log("Hello world in console");
    //setTimeout is used to pause the actions
    setTimeout(function () {
        alert("hello world");
        console.log("Hello world in console");
    }, 3800);

    }
    function showLoop() {
    //setinterval is used to loop animation or function in javascript
        // function hello() {
        // alert("hello world from loop");
        //console.log('hello world from loop");
        //}

     setInterval(function () {
         alert("hello world from loop");
         console.log("hello world from loop");
     }, 3000);

}

function moveImage() {
    image = document.getElementById("movingImage");
    x = 10; //left
    y = 10; //top
    speed = Number(document.getElementById("speedInput").value);
    //create a function in loop,and loop it each half second
    setInterval(function () {

        x=x+speed;
        y=y+speed;
        console.log("x=",x);
        console.log("y=", y);
        image.style.left = x+"px";
        image.style.top = y+"px";
        }, 500);

}

