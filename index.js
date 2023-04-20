// Code your solutions in this file
function countDown(num){
    while (num >= 0){
        console.log(num);
        --num;
    }
}

function writeCards
(names, type){
    let cards = [];
    for (let i = 0; i < names.length; i++){
        cards[i] = (`Thank you, ${names[i]}, for the wonderful ${type} gift!`);
    }
    return cards;
}