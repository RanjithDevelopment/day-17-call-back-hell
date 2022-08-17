function timer(count) {
   
    let counter10 = setTimeout(() => {
        count = count;
       document.querySelector(".p").innerHTML=count;
      console.log(count);
    }, 1000);
    
    let counter = setTimeout(() => {
        count = count - 1;
       document.querySelector(".p1").innerHTML=count;
       console.log(count);
    }, 1000);
    let counter1 = setTimeout(() => {
        count = count - 1;
        document.querySelector(".p2").innerHTML=count;
        console.log(count);
    }, 1000);
    let counter2 = setTimeout(() => {
        count = count - 1;
        document.querySelector(".p3").innerHTML=count;
        console.log(count);
    }, 1000);
    let counter3 = setTimeout(() => {
        count = count - 1;
        document.querySelector(".p4").innerHTML=count;
        console.log(count);
    }, 1000);
    let counter4= setTimeout(() => {
        count = count - 1;
        document.querySelector(".p5").innerHTML=count;
        console.log(count);
    }, 1000);
    let counter5 = setTimeout(() => {
        count = count - 1;
        document.querySelector(".p6").innerHTML=count;
        console.log(count);
    }, 1000);
    let counter6 = setTimeout(() => {
        count = count - 1;
        document.querySelector(".p7").innerHTML=count;
        console.log(count);
    }, 1000);
    let counter7 = setTimeout(() => {
        count = count - 1;
        document.querySelector(".p8").innerHTML=count;
        console.log(count);
    }, 1000);
    let counter8 = setTimeout(() => {
        count = count - 1;
        document.querySelector(".p9").innerHTML=count;
        console.log(count);
    }, 1000);
    let counter9 = setTimeout(() => {
       
        document.querySelector(".res").innerHTML="Happy Independece Day";
        console.log("Happy Independece Day");
    }, 1000);
    
    
}

timer(10);