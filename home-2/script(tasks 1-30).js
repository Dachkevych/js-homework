 /*Write a JavaScript program to display the current day and time in the following format
                            Sample Output : Today is : Friday. 
                            Current time is : 4 PM : 50 : 22 */
 function printCurrentTime() {
     var
         today = new Date(),
         day = today.getDay(),
         hour = today.getHours(),
         minute = today.getMinutes(),
         second = today.getSeconds();
     var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     document.write("Today is : " + days[day] + ". <br/>");
     document.write("Current Time : " + hour + " : " + minute + " : " + second);
 }

 /* Write a JavaScript program to print the contents of the current window*/

 function printCurrentWindow() {
     window.print();
 }

 /* Write a JavaScript program to get the current date.
 mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */

 function printFormatDate() {
     var date = new Date();
     var
         day = date.getDay() - 1,
         month = date.getMonth() + 1,
         year = date.getFullYear();
     if (day < 10) day = '0' + day;
     if (month < 10) month = '0' + month;
     document.write(day + "-" + month + "-" + year + "<br/>");
     document.write(day + "/" + month + "/" + year + "<br/>");
     document.write(month + "-" + day + "-" + year + "<br/>");
     document.write(month + "/" + day + "/" + year);
 }

 /*Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7*/

 function findTriangleArea() {
     var a = 5;
     var b = 6;
     var c = 7;
     var perimetr = (a + b + c) / 2;
     var area = Math.sqrt(perimetr * (perimetr - a) * (perimetr - b) * (perimetr - c));
     document.write(area + "<hr/>");
 }

 /*Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar*/

 function determineLeapYear() {
     var year = document.getElementById("leapYear").value;
     if (year % 4 == 0 & year % 100 != 0) {
         alert("This is leap year");
     } else if (year % 4 == 0 & year % 100 == 0 & year % 400 == 0) {
         alert("This is leap year");
     } else {
         alert("This is not leap year");
     }
 }

 /*Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050*/

 function findFirstJanuaryIsMonday() {
     for (var year = 2014; year <= 2050; year++) {
         var date = new Date(year, 0, 1);
         if (date.getDay() == 1) {
             document.write(year + " 1st January is being Monday <br/>");
         }
     }
 }

 /*Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".*/

 function playGame() {
     var
         min = 1,
         max = 10;
     var userNum = document.getElementById("userNumber").value;
     var randomNum = (Math.floor(Math.random() * (max - min + 1)) + min);
     userNum == randomNum ? alert("Good Work") : alert("Not matched");
 }

 /*Write a JavaScript program to calculate days left until next Christmas*/

 function calcDaysToChristmas() {
     var christmasDay = new Date(2019, 0, 7);
     var dateNow = new Date();
     var daysToChristmas = Math.floor((christmasDay - dateNow) / 86400000);
     alert("Till Christmas left - " + daysToChristmas + " days.");
 }

 /*Write a JavaScript program to calculate multiplication and division of two numbers (input from user)*/

 function multiply() {
     firstNum = document.getElementById("firstNumber").value;
     secondNum = document.getElementById("secondNumber").value;
     document.getElementById("result").innerHTML = firstNum * secondNum;
 }

 function divide() {
     firstNum = document.getElementById("firstNumber").value;
     secondNum = document.getElementById("secondNumber").value;
     document.getElementById("result").innerHTML = firstNum / secondNum;
 }

 /*Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit*/

 function convertCtoF() {
     userTemp = document.getElementById("userTemperatures").value;
     res = userTemp * 1.8 + 32;
     document.getElementById("resultTemp").innerHTML = res;
 }

 function convertFtoC() {
     userTemp = document.getElementById("userTemperatures").value;
     res = (userTemp - 32) / 1.8;
     document.getElementById("resultTemp").innerHTML = res;
 }

 /*Write a JavaScript program to get the website URL (loading page)*/

 function getURL() {
     alert(document.URL);
 }

 /*Write a JavaScript exercise to create a variable using a user-defined name*/

 /*Write a JavaScript exercise to get the extension of a filename*/

 function getExtension() {
     fileName = document.getElementById("userFileName").value;
     document.getElementById("fileExtension").innerHTML = fileName.split('.').pop();
 }

 /* Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference*/

 function findDifference() {
     userNumber = document.getElementById("difference").value;
     var difference;
     if (userNumber <= 13) {
         difference = 13 - userNumber;
     } else {
         difference = (userNumber - 13) * 2;
     }
     document.getElementById("resultCalc").innerHTML = difference;
 }

 /*Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum*/

 function sumDoubleNum() {
     firstNumber = document.getElementById("firstNum").value;
     secondNumber = document.getElementById("secondNum").value;
     var sumResult;
     if (firstNumber != secondNumber) {
         sumResult = Number(firstNumber) + Number(secondNumber);
     } else {
         sumResult = 3 * (Number(firstNumber) + Number(secondNumber));
     }
     document.getElementById("sumResult").innerHTML = sumResult;
 }

 /*Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19*/

 function findDifference_2() {
     user_num = document.getElementById("user_number").value;
     var result_difference;
     user_num < 19 ? result_difference = 19 - user_num : result_difference = user_num - 19;
     result_difference > 19 ? result_difference *= 3 : result_difference;
     document.getElementById("result_dif").innerHTML = result_difference;
 }

 /*Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50*/

 function compareNumber(a, b) {
     return (a == 50 || b == 50) || (a + b == 50);
 }

 /* Write a JavaScript program to check from two given integers, if one is positive and one is negative*/

 function positive_negative_num() {
     first_num = document.getElementById("first_number").value;
     second_num = document.getElementById("second_number").value;
     var isTrue = false;
     if ((first_num < 0 && second_num > 0) || (first_num > 0 && second_num < 0)) {
         isTrue = true;
     }
     document.getElementById("result_compare").innerHTML = isTrue;
 }

 /*Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.*/

 function add_Py_to_word() {
     word = document.getElementById("user_word").value;
     if (word.substring(0, 2) != "Py") {
         word = "Py".concat(word);
     }
     document.getElementById("result_word").innerHTML = word;
 }

 /*Write a JavaScript program to remove a character at the specified position of a given string and return the new string*/

 function changeSentence() {
     sentence = document.getElementById("sentence").value;
     start = document.getElementById("first_index").value;
     end = document.getElementById("second_index").value;
     if (end > start) {
         sentence = sentence.substring(0, start).concat(sentence.substring(end + 1));
     }
     document.getElementById("sent_changed").innerHTML = sentence;
 }

 /*Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1*/

 function change_letter() {
     sentence_2 = document.getElementById("sentence_2").value;
     if (sentence_2.length <= 1) {
         document.getElementById("result_sentences").innerHTML = sentence_2;
     } else {
         result_sentence = sentence_2.charAt(sentence_2.length - 1) + sentence_2.substring(1, sentence_2.length - 1) + sentence_2.charAt(0);
         document.getElementById("result_sentences").innerHTML = result_sentence;
     }
 }

 /*Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back*/

 function add_letter() {
     sentence_3 = document.getElementById("sentence_3").value;
     letter_3 = sentence_3.charAt(0);
     result_sentence_3 = letter_3.concat(sentence_3).concat(letter_3);
     document.getElementById("result_sentences_3").innerHTML = result_sentence_3;
 }

 /*Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7*/

 function checkNumver() {
     num_user = document.getElementById("users_num_1").value;
     if (num_user % 3 == 0 || num_user % 7 == 0) {
         document.getElementById("check_result").innerHTML = true;
     } else {
         document.getElementById("check_result").innerHTML = false;
     }
 }
 /* Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more*/

 function add_three_letter() {
     sentence_4 = document.getElementById("sentence_4").value;
     if (sentence_4.length <= 3) {
         document.getElementById("result_sentences_4").innerHTML = sentence_4;
     } else {
         letters_4 = sentence_4.substring(0, 3);
         result_sentence_4 = letters_4.concat(sentence_4).concat(letters_4);
         document.getElementById("result_sentences_4").innerHTML = result_sentence_4;
     }
 }

 /*Write a JavaScript program to check if a string starts with 'Java' and false otherwise*/

 function check_java() {
     sentence_5 = document.getElementById("sentence_5").value;
     if (sentence_5.substring(0, 4).localeCompare("Java")) {
         document.getElementById("result_sentences_5").innerHTML = false;
     } else {
         document.getElementById("result_sentences_5").innerHTML = true;
     }
 }

 /*Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range*/

 function check_numbers() {
     one_num = document.getElementById("number_one").value;
     two_num = document.getElementById("number_two").value;
     if ((one_num >= 50 && one_num <= 90) || (two_num >= 50 && two_num <= 90)) {
         document.getElementById("result_number").innerHTML = true;
     } else {
         document.getElementById("result_number").innerHTML = false;
     }
 }

 /*Write a JavaScript program to check if a string "Script" presents at 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one*/

 function check_script() {
     sentence_6 = document.getElementById("sentence_6").value;
     if (sentence_6.substring(4, 10) == 'Script') {
         result_sentence_6 = sentence_6.substring(0, 4) + sentence_6.substring(10, sentence_6.length);
         document.getElementById("result_sentences_6").innerHTML = result_sentence_6;
     } else {
         document.getElementById("result_sentences_6").innerHTML = sentence_6;
     }
 }
