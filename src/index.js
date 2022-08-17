console.log(requestFirstName());
console.log(requestSecondName());
console.log(showFullName());

var FirstName;
var SecondName;


function requestFirstName() {

do {
FirstName = prompt('Введите имя');
} while(!FirstName);

return FirstName;
}


function requestSecondName() {

do {
    SecondName = prompt('Введите фамилию');
    }while(!SecondName);

    return SecondName;

}


function showFullName() {

var FullName = alert( FirstName + ' ' + SecondName );

return (FullName);
}
