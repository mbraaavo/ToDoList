//Grab some DOM stuff :)
let user_input = document.querySelector('#input');
let add_button = document.querySelector('#add_button');
let main_field = document.querySelector('.main_field');


add_button.addEventListener("click", () =>{
    let to_do = user_input.value;

    let html = '';
    html += '<div class="item-box">';
    html += '<div class="item">';
    html += '<p class="to-do">'+ to_do +'</p>';
    html += '</div>';
    html += '<div class="clear">';
    html += '<button class="done_button">O</button>';
    html += '<button class="clear_button">X</button>';
    html += '</div>';
    html += '</div>';    

    main_field.innerHTML += html;

    user_input.value = '';

    let done_button = document.querySelector('.done_button');
    let clear_button = document.querySelector('.clear_button');

    done_button.addEventListener("click", () =>{
        console.log("ASSSUUUUUUUUH");
    });
    
    clear_button.addEventListener("click", () =>{
        console.log("DUUUUUUUUUUUUDE");
    });
    

});

