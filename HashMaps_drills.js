const HashMap = require('./HashMap');

// 1. Create main function 
function main() {
    const lotr = new HashMap();
    lotr.Max_LOAD_RATIO = 0.5;
    lotr.SIZE_RATIO = 3;

    lotr.set("Hobbit","Bilbo");
    lotr.set("Hobbit","Frodo");
    lotr.set("Wizard","Gandalf");
    lotr.set("Human","Aragon");
    lotr.set("Elf","Legolas");
    lotr.set("Maiar","The Necromancer");
    lotr.set("Maiar","Sauron");
    lotr.set("RingBearer","Gollum");
    lotr.set("LadyofLight","Galadriel");
    lotr.set("HalfElven","Arwen");
    lotr.set("Ent","Treebeard");

    // console.log(lotr);

    console.log(lotr.get("Maiar")); // There are multiple values 
    console.log(lotr.get("Hobbit")); // There are multiple values 
    
    //Capacity is 8
}

// main();

// 2. WhatDoesThisDo?
//   Two hash maps are generated, both should return a value of 10, 20 respectively 

//4. Make a fucntion that deletes duplicates in a string
// I = google
// O = gogle

function deleteDups(str) {
    let obj = new HashMap();
    for(let i = 0; i < str.length; i ++){
        //If obj.g is true , meaning obj.g is there
        obj.set(str[i]);
    }
    console.log(obj._hashTable);
}

deleteDups("google");