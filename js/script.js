console.log("Start");

let a=10;

function aaa(){
    let a=200;// a is local variable it's only return the this block
    console.log("I'm form aaa");
    bbb();
}

function bbb(){
    console.log("I'm form bbb");
    console.log(a);
}

aaa();


let aaa1=()=>{
    console.log("aaa1");
    var a=200;
    function aaa2(){
        console.log(a);
    }
    aaa2();
}

aaa1();


function add(){
    let a=30;
    var b=90;

    console.log(a+b);
}

add();



console.log("End");