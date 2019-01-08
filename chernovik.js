


var drinks = 

Задание 5
Необходимо напечатать на экране с помощью alert прямоугольник, состоящий из символа, который запрошен у пользователя. Прямоугольник должен иметь 20 символов в длину и 7 символов в высоту.

Пример:
Введите символ:
&
<script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script><!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><title>Document</title></head><body></body></html>


Указания:scripts
  

		

    • Для решения данного упражнения использовать вложенные циклы.
    • Сдавать в виде HTML-файла
Задание 6
На некотором предприятии инженер Петров создал устройство, на табло которого показывается количество секунд, оставшихся до конца рабочего дня. Когда рабочий день начинается ровно в 9 часов утра — табло отображает "28800" (т.е. остается 8 часов), когда времени 14:30 — на табло "9000" (т.е. остаётся два с половиной часа), а когда наступает 17 часов — на табло отображается "0" (т.е. рабочий день закончился).

Ваш коллега заметил, как страдают офисные сотрудницы — им неудобно оценивать остаток рабочего дня в секундах. Коллега вызвался помочь сотрудницам и написать программу, которая будет переводить секунды в понятные фразы с информацией о том, сколько полных часов осталось до конца рабочего дня. Например: "осталось 7 часов", "осталось 4 часа", "остался 1 час", "осталось менее часа".

Программа должна запрашивать значение в секундах. Далее оно должно выводиться на экран (для Петрова) и на следующей строке (для сотрудниц) должна выводиться фраза о количестве полных часов, содержащихся в этих секундах. 

Помогите вашему коллеге написать программу.

Примеры работы программы:

23466
Осталось 6 часов

10644
Осталось 2 часа

5891
Остался 1 час

1249
Осталось менее часа

Указания:
    • Использовать конструкцию if - else..if для решения этого упражнения.
    • Сдавать в виде HTML-файла
Задание 7
Напишите программу, которая проверяет ваше знание таблицы умножения. Сначала, она должна вывести на экран пример, который должен быть сгенерирован случайным образом, для двух чисел от 1 до 9. При этом пользователь должен написать ответ. Если ответ верный, программа должна вывести сообщение "You are correct!". Если не верный или пустой, сообщение "You are wrong".

Пример:




function randomize(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

console.log( randomize(13, 25) );

i = 0;
sum = 0;
var a = [1, 2, 3];

while(i <= a.length) {
var b = a[i];
sum = b;

var c = a.length;
i++;
}
console.log(sum + ' ' + c + ' ' + b);



i = 0;

var a = [1, 2, 3];
var b = a[i];
console.log(b); // выводит значение первого элемента


var arr = [1, 2, 3];


var sum = 0;
for (var i = 0; i <= a.length; i++) {
sum += arr[i];
console.log(sum + ' ' + a.length + ' ' + sum/a.length);
}

var arithMean = function(arr) {
var sum = 0;
for (var i = 0; i <= arr.length; i++) {
sum += arr[i];
arith = sum / a.length;
console.log(sum + ' ' + arr.length + ' ' + sum/a.length);
}
}
arithMean(arr);
southData = arr;
console.log(arithMean)

for(var sun = i = 0, li = a.length; i < li i++) sun += a [i]; // всего один оператор, поэтому фиг/скобок не надо
sun = sun / li;
alert (sun);
return sun;


var average = function(southData, westData, eastData, northData) {
average.push(southData, westData, eastData, northData);
console.log(arithMean(average));
return average;
}

var arithMean = function(arr) {
var sum = 0;
for (var i = 0; i < arr.length; i++) {
sum += arr[i];
}
 var arith = sum/arr.length;
 return [sum, arith];
};

southData[14,22,19,18,15,18,21];
northData[13,13,22,22,15,23,25];
westData[13,20,13,23,18,18,14];
eastData[17,16,13,19,21,13,16];
var averageData = [];
averageData = averageData.concat(southData, westData, eastData, northData);

averageData = averageData.push(southData, westData, eastData, northData);
