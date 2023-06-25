var num = 10;

var val = Math.floor(Math.random() * 100) + 1;



let btn = document.getElementsByTagName("button")[0];

let class_list = document.getElementsByClassName("hid")[0].classList;

let arr = [];

btn.addEventListener("click", function(){

    


    let inp = document.querySelector(".inp"); // everytime the user clicks a button - the input is taken

    if(val != inp.value){

        class_list.remove("hid");

        num = num - 1;

        if(num <= 0){
            
            window.open("page4.html","_self");
            return;
        }

        let obj = document.getElementsByClassName("num")[0];
        obj.textContent = num;

        arr.push(inp.value);

        let str = "";

        for(let i = 0; i < arr.length; i++){

            if(i == arr.length - 1){
                str = str + arr[i];
            }else{
                str = str + arr[i] + " , ";
            }

            

        }


        let guessed = document.querySelector(".numbers_guessed");

        

        
        guessed.textContent = str;


        inp.value = null;

        

    }else{
        window.open("page3.html","_self");
    }
    

});


// why don't non-anonymous funcyions work with click event - stimulate a mouse click

