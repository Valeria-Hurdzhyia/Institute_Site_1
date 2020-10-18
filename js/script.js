/////////////////////  4 Завдання   /////////////////////////////

/*Продемонструвати можливість створення користувацього об’єкту
засобами JavaScript. Створити об’єкт Student із властивостями name,
surname, age, course та властивостями GetOlder()- зміна віку на
вказану кількість років, ChangeSurname() - зміна прізвища,
MoveToSecondCourse() – переведення на наступний курс.*/


var Student = new Object();

Student.name = "Іван";
Student.surname = "Іванов";
Student.age = 17;
Student.course = 1;

$('#button_age').on('click', function GetOlder() {
	if( $('#input_age').val() == '')
	{
		alert("Введіть, будь ласка, дані!");
	}
	else
	{
		Student.age = $('#input_age').val();
		alert('Студенту тепер ' + Student.age + ' років');
	}
});

$('#button_name').on('click', function ChangeName() {
	if( $('#input_name').val() == '')
	{
		alert("Введіть, будь ласка, дані!");
	}
	else
	{
		Student.name = $('#input_name').val();
		alert('Ім\'я студента змінено на: ' + Student.name);
	}
});

$('#button_surname').on('click', function ChangeSurname() {
	if( $('#input_surname').val() == '')
	{
		alert("Введіть, будь ласка, дані!");
	}
	else
	{
		Student.surname = $('#input_surname').val();
		alert('Прізвище студента змінено на: ' + Student.surname);
	}
});

$('#button_course').on('click', function MoveToSecondCourse() {
	Student.course = Student.course + 1;
	if(Student.course <= 6 )
	{
		alert('Студента переведено на ' + Student.course + ' курс');
	}
	else{
	alert('Студент навчається на останньому курсі!');
	Student.course = 6 
	}
});

$('#info').on('click', function ShowInfo() {
	alert('Студента звати ' + Student.surname + ' ' + Student.name + '\n' + 'Вік: ' + Student.age + ' років' + '\n' + 'Навчається на ' + Student.course + ' курсі');
});


/////////////////////  5 Завдання   /////////////////////////////

///////////  Функція, що віводить n-ий член числа Фібоначчі 
//////////   Використати функцію prompt() для введення числа n.


	function fib(n) { 
		var a = 0;
		var b = 1;
	for (var i = 0; i < n; i++)
	{
		a = a + b;
		b = a - b;
	}
	return a; 
	}

	var x = prompt("Введіть n-ий член числа Фібоначчі");
	if(x == ''){
		alert("Ви не ввели дані!");
	}
	else{
	alert(x +"-ий член числа Фібоначчі дорівнює " + fib(x));
	}

	
/*

//////  Функція, що віводить n-ий член числа Фібоначчі через форми //////

$('#button_fib').on('click', function fibonaci() {
	function fib(n){
		var a = 0;
		var b = 1;
	for (var i = 0; i < n; i++)
	{
		a = a + b;
		b = a - b;
	}
	return a; 
	}
	let x = parseInt($('#input_num').val());


if( $('#input_num').val() == '')
	{
		alert("Введіть, будь ласка, дані!");
	}
	else
	{
	alert(x + "-ий член числа Фібоначчі дорівнює " + fib(x));
	}
}); */

