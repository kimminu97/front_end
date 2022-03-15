let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

let text2 = "We are the so-called \"Vikings\" from the north.";
console.log(text2);

// x is a string
let x = "John";

// y is an object
let y = new String("John");

let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
console.log(part);

let str2 = "Apple, Banana, Kiwi";
let part2 = str.slice(-12, -6);
console.log(part2); // 음수인 경우 위치는 문자열 끝에서
                    //-12에서 -6으로 조각

 let st3 = "Apple, Banana, Kiwi";
 let part3 = str.substring(7, 13);
 console.log(part3)     //slice와 유사

 let str4 = "Apple, Banana, Kiwi";
let part4 = str.substr(7, 6);
console.log(part4)  //두번째 인자가 추출된 부품의 길이를 지정

let text3 = "Please visit Microsoft and Microsoft!";
let newText = text3.replace("Microsoft", "W3Schools");
console.log(newText)    //문자열 대체, 첫번째 일치만 대체 대소문자 구분
// let newText = text.replace(/MICROSOFT/i, "W3Schools");                 
 // /~~~/i 사용시 대소문자 구분 x
//  let newText = text.replace(/Microsoft/g, "W3Schools");
// 첫번째 뿐만아니라 모든 일치항목 대체 /g

text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
console.log(text);  //문자열 이어붙이기

// let text = "5";
let padded = text.padStart(4,0);    //0005

// let text = "5";
// let padded = text.padEnd(4,0);   5000

let text5 = "HELLO WORLD";
let char = text5.charCodeAt(0); //returns a UTF-16 code