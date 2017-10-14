var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

console.log("==================");
console.log("WELCOME TO MY SHOP");
console.log("==================");

for (var x =0 ;x<=9;x++) {
	console.log(x+1 + randomCard.name+" - "+randomCard.accountHistory[x].amount);
}