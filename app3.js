var day;
switch (new Date().getDay()) {
    case 0: day = "Sunday";
        break;
    case 1: day = "Monday";
        break;
    case 2: day = "Tuesday";
        break;
    case 3: day = "Wednesday";
        break;
    case 4: day = "Thursday";
        break;
    case 5: day = "Friday";
        break;
    case 6: day = "Saturday";
        break;
    default: "no day";
} alert(day);

// curly bracket -> object
var biography = { name: "April", age: 30, likes: ["money", "rest"], children: true }

var biography = new Object();
{
    biography.name = "April";
    biography.age = 30;
    biography.likes = ["rest", "kids"];
}


var recipe = { title: "Mole", servings: 2, ingredients: ["cumin", "chocolate", "milk"] };
alert(recipe.title);





var books = [{
    title: "Surviving the Streets",
    author: "Brittney M", alreadyRead: false
},
{
    title: "Becoming Me",
    author: "Michelle Obama", alreadyRead: true
},
{
    title: "Becoming Amazon",
    author: "Unknown", alreadyRead: true
}

];

for (var i = 0; i < books.length; i++) 
{var book = books[i];
var bookInfo = book.title + "by" + book.author;
if (book.alreadyRead){console.log (`You already read ${bookInfo}`)}
else {console.log (`You still need to read ${bookInfo}`);}}