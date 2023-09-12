//Word and character counter -- Input a string, it would calculate number of words and characters in that stirng

// take input from user -- String
// 1- Count Words -- create function
//2- Count Characters -- create function

import PromptSync from "prompt-sync";
const prompt = PromptSync();
let userString : string = prompt("Please Enter the desired String: ");
//console.log(userString);

function wordCounter (a:string) : number {
    let words:string[] = a.split(/\s+/).filter(word => word !== " ");
    return words.length

}

function characterCounter (a:string) {
    let character = a.replace (/\s+/g,"");
    return character.length
}



console.log(`Number of Words in ${userString} are: ${wordCounter(userString)}`);
console.log(`Number of Character in ${userString} are: ${characterCounter(userString)}`);
