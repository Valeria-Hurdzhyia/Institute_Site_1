//////////////////////   1 Завдання    //////////////////

/*Написати JS-сценарій, який виведе у діалоговому вікні пояснювальну
інформацію щодо введення даних до форми, розробленої при виконанні
лабораторної роботи №1, у випадку коли користувач протягом деякого
інтервалу часу (1 хв, наприклад) не внесе даних до форми – використати
запуск JavaScript за розкладом. */

setTimeout('window.location="#overlay"', 60000);


//////////////////////   2 Завдання    //////////////////

/*Здійснити попередню перевірку коректності даних, які вносяться
користувачем у форму. Перевірку реалізувати у вигляді окремого JSсценарію, для перевірки коректності заповнення полів слід застосувати
механіхм регулярних виразів RegExp.*/

// для form_js.html

function validate_form() {
	var name_exp = /^[А-Яа-яІі\s]+$/;
	var tel_exp = /^\+380\s?[\(]{0,1}[0-9]{2}[\)]{0,1}[-]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}$/;
	var em_exp = /^[a-z0-9._-]+\@[a-z0-9]+\.[a-z]{2,4}$/;
	var st_name = document.getElementById('name_input').value;
	var phone = document.getElementById('tel_input').value;
	var email = document.getElementById('em_input').value;

	if (name_exp.test(st_name) == false)
	{
		alert('Некоректно введено ім\'я');
		return false;
	}

	if (tel_exp.test(phone) == false)
	{
		alert('Некоректно введено номер телефону');
		return false;
	}


	if (em_exp.test(email) == false)
	{
		alert('Некоректно введено Email');
		return false;
	}

	
}

//////////////////////   3 Завдання    //////////////////

/*Реалізувати аналогічну перевірку із використанням бібліотеки jQuery
validate.*/

// для form_jq.html

var name = $('#name_input').val();
var tel = $('#tel_input').val();
var em = $('#em_input').val();

$(".decor_j").validate({
	rules: {
		st_name: {
			required: true,
			pattern: /^[А-Яа-яІі\s]+$/,
		},

		phone: {
			required: true,
			pattern: /^\+380\s?[\(]{0,1}[0-9]{2}[\)]{0,1}[-]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}$/,
		},


		email: {
			required: true,
			email: true
		}
	},

	messages: {
		st_name: {
			required: "Поле 'ПІБ' пусте",
			pattern: "Некоректно введено ім\'я"
		},

		phone: {
			required: "Поле 'номер телефону' пусте",
			pattern: "Некоректно введено номер телефону"
		},

		email: {
			required: "Поле 'електронна пошта' пусте",
			email: "Некоректно введено Email"
		}
	},

	errorClass: "input_error",

	errorPlacement: function(error, element) { 
		if (element.attr("name") == "st_name") error.insertAfter($("#name_input"));
		if (element.attr("name") == "phone") error.insertAfter($("#tel_input"));
		if (element.attr("name") == "email") error.insertAfter($("#em_input"));
	}

});
