//Starts new line
/*
document.write('hello world' + '<br/>');
document.write('hello world' + '<br/>');
document.write('hello world' + '<br/>');
document.write('hello world' + '<br/>');
document.write('hello world' + '<br/>');

//loops string 10x
for (let i = 0; i < 10; i++) { document.write('Hello World' + '<br/>'); }

for (i = 0; i < 10; i++) { if (i === 4) { break; } }
document.write(
);
*/

/*var x = 0;
while (x<5){console.log(x); x= x+ 1;};

var x = 5;
while (x<5){console.log(x); x= x+ 1;}; */
/*

for (var i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        document.write(i + ' is even');

    }
    else { document.write(i + ' is odd'); }
}



function assignGrade(score) {
    if (score > 90) { return 'A'; }
    else if (score > 80) { return 'B'; }
    else if (score > 70) { return 'C'; }
    else if (score > 60) { return 'D'; }
    else {
        return 'F';
    }
}
document.write('Your grade is' + assignGrade(78));
*/


//Upon entering the page, age verification should meet the user. 
//If the user is not 18, they will be redirted to another page. 
//If the user is 18, the site will load. 

var agePrompt=prompt("What is your age?");

if (agePrompt>=18) alert('Welcome!')
else {
document.location="index2.html";

} 