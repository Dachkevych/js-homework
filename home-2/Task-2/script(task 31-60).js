/*Write a JavaScript program to find the largest of three given integers*/
function find_largest_num(num_1, num_2, num_3) {
    if (num_1 > num_2 & num_1 > num_3) {
        return num_1;
    } else if (num_2 > num_3 & num_2 > num_1) {
        return num_2;
    } else {
        return num_3;
    }
}
/*Write a JavaScript program to find a value which is nearest to 100 from two different given integer values*/
function find_nearest_num(num_1, num_2) {
    num_1 > 100 ? res_1 = num_1 - 100 : res_1 = 100 - num_1;
    num_2 > 100 ? res_2 = num_2 - 100 : res_2 = 100 - num_2;
    if (res_1 < res_2) {
        return num_1;
    } else {
        return res_2;
    }
}
/* Write a JavaScript program to check if two numbers are in range 40..60 or in the range 70..100 inclusive*/
function check_numbers(num_1, num_2) {
    if (((num_1 >= 40 && num_1 <= 60) || (num_1 >= 70 && num_1 <= 100)) && ((num_2 >= 40 && num_2 <= 60) || (num_2 >= 70 && num_2 <= 100))) {
        return true;
    } else {
        return false;
    }
}
/* Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive*/
function find_largest_num_2(num_1, num_2) {
    if ((num_1 >= 40 && num_1 <= 60) && (num_2 >= 40 && num_2 <= 60)) {
        if (num_1 > num_2) {
            return num_1;
        } else {
            return num_2;
        }
    } else {
        return false;
    }
}
/*Write a JavaScript program to create new string with first 3 characters are in lower case. If the string length is less than 3 convert all the characters in upper case*/
function change_register(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    } else {
        first_three = str.substring(0, 3).toLowerCase();
        all_letter = str.substring(3, str.length);
        return first_three + all_letter;
    }
}
/*Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.*/
function add_numbers(num_1, num_2) {
    sum = num_1 + num_2;
    if (sum > 50 && sum < 80) {
        return sum = 65;
    } else {
        return sum = 80;
    }
}
/* Write a JavaScript program to check from two given integers if either one is 8 or their sum or difference is 8*/
function check_number(num_1, num_2) {
    if (num_1 == 8 || num_2 == 8) {
        return true;
    } else if ((num_1 + num_2) == 8) {
        return true;
    } else if (Math.abs(num_1 - num_2) == 8) {
        return true;
    } else {
        return false;
    }
}
/*Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 40 and if two numbers are same return 20. */
function check_three_number(num_1, num_2, num_3) {
    if (num_1 == num_2 & num_2 == num_3) {
        return 30;
    } else if (num_1 == num_2 || num_2 == num_3 || num_3 == num_1) {
        return 20;
    } else {
        return 40;
    }
}
/* Write a JavaScript program to check if three given numbers (integers) are increasing in strict mode and flag is "false", however if "true" is false the numbers will in soft mode*/
function check_three_num(num_1, num_2, num_3) {
    if (num_1 > num2 && num_2 > num_3) {
        return "Strict mode";
    } else if (num_3 > num_2) {
        return "Soft mode";
    } else {
        return "Undefinded";
    }
}
/*Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit*/
function check_last_digit(num_1, num_2, num_3) {
    if (num_1 % 10 == num_2 % 10 || num_2 % 10 == num_3 % 10 || num_3 % 10 == num_1 % 10) {
        return true;
    } else {
        return false;
    }
}
/*Write a JavaScript program to check from three given integers that if a number is greater than or equal to 20 and less than one of the others*/
function check_numbers_2(num_1, num_2, num_3) {
    if (num_1 >= 20 && (num_1 < num_2 || num_1 < num_3)) {
        return true;
    } else if (num_2 >= 20 && (num_2 < num_1 || num_2 < num_3)) {
        return true;
    } else if (num_3 >= 20 && (num_3 < num_1 || num_3 < num_2)) {
        return true;
    } else {
        return false;
    }
}
/*Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15*/
function check_numbers_3(num_1, num_2) {
    if (num_1 == 15 || num_2 == 15) {
        return true;
    } else if (num_1 + num_2 == 15 || Math.abs(num_1 - num_2) == 15) {
        return true;
    } else {
        return false;
    }
}
/*Write a JavaScript program to check two given non-negative integers and if one of the number (not both) is multiple of 7 or 11*/
function check_numbers_4(num_1, num_2) {
    if (num_1 % 7 == 0 && num_2 % 7 != 0) {
        return true;
    } else if (num_1 % 11 == 0 && num_2 % 11 != 0) {
        return true;
    } else if (num_2 % 7 == 0 && num_1 % 7 != 0) {
        return true;
    } else if (num_2 % 11 == 0 && num_1 % 11 != 0) {
        return true;
    } else {
        return false;
    }
}
/*Write a JavaScript program to convert a given number to hours and minutes*/
function convert_minutes_to_hours(minutes) {
    var hours = Math.floor(minutes / 60),
        mitute = hour % 60;
    var time = hours + ":" + mitute;
    return time;
}
/*Write a JavaScript program to convert the letters of a given string in alphabetical order.*/
function sort_letter(str) {
    return str.split("").sort().join("");
}
/*Write a JavaScript program to check if the characters a and b are separated by exactly 3 places anywhere (at least once) in a given string*/
function check_sentences_1(str) {
    if ((/a...b/).test(str) || (/b...a/).test(str)) {
        return true;
    } else {
        return false;
    }
}
/*Write a JavaScript program to count the number of vowels in a given string*/
function count_vowels(str) {
    return str.match(/[aeiouy]/g).length;
}
/*Write a JavaScript program to check if a given string contains equal number of p's and t's present.*/
function check_string(str) {
    console.log((str.includes("p's")) || (str.includes("t's")));
}
/*Write a JavaScript program to create a new string of specified copies (positive number) of a given string*/
function copy_string(str, n) {
    if (n < 0) {
        return false;
    } else {
        return str.repeat(n);
    }
}
/*Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above*/
function create_copy_string(str) {
    if (str.length < 3) {
        return false;
    } else {
        new_str = str.substring(str.length - 3);
        return new_str.repeat(4);
    }
}
/*Write a JavaScript program to extract the first half of a string of even length*/
function create_half_str(str) {
    if (str.length % 2 == 0) {
        return str.substring(0, str.length / 2);
    } else {
        return false;
    }
}
/*Write a JavaScript program to create a new string without the first and last character of a given string*/
function create_new_string(str) {
    return str.substring(1, str.length - 1);
}
/*Write a JavaScript program to concatenate two strings except their first character*/
function concanate_string(str_1, str_2) {
    return str_1.substring(1, str.length).concat(str_2.substring(1, str_2.length));
}