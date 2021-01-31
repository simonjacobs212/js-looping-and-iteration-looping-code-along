// Code your solutions in this file

const people = ["Ada", "Brendan", "Ali"]

function writeCards(people, event){
    let new_arr = []
    for (let i = 0; i < people.length; i++){
        new_arr.push(`Thank you, ${people[i]}, for the wonderful ${event} gift!`); 
    }
    return new_arr
}

function countDown(num){
    while(num >= 0){
        console.log(num--)
    }
}