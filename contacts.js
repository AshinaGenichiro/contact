console.log('Zadanie 1');
console.log('----------------');

let firstPerson = {
  name : "Maxwell Wright",
  phoneNumber : 01917196495 ,
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
};
let secondPerson = {
    name : "Raja Villareal",
   phoneNumber : 08663982895,
    email: "posuere.vulputate@sed.com"
};
let thirdPerson = {
    name: "Helen Richards",
    phoneNumber: 08001111,
    email: "libero@convalis.edu"
};
let contactList = [firstPerson,secondPerson,thirdPerson];
console.log(firstPerson);
console.log(thirdPerson);


let fourthPerson = {
  name : "Masie Haley",
  phoneNumber : 09135313030,
  email : "risus.Quisque@urna.ca."
};

console.log();
console.log("zadanie 2");
console.log("----------------");

contactList.push(fourthPerson);
console.log("Długość tablicy: " + contactList.length);
console.log(contactList[0],contactList[3]);
