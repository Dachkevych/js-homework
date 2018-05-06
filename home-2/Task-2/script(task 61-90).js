/* Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.*/
function move_character(str) {
    if (str.length < 3) {
        return false;
    } else {
        console.log(str.substring(str.length - 3).concat(str.substring(0, str.length - 3)));
    }
}
/*Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three*/
function create_str_middle_char(str) {
    if (str.length % 2 == 0) {
        return false;
    } else {
        var start = (str.length + 1) / 2 - 2,
            end = (str.length + 1) / 2 + 1;
        var middle = str.substring(start, end);
        return middle;
    }
}
/*Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.*/
function concatenate_str(str_1, str_2) {
    if (str_1.length > str_2.length) {
        return str_1.substring(0, str_2.length).concat(str_2);
    } else if (str_1.length < str_2.length) {
        return str_1.concat(str_2.substring(0, str_1.length));
    } else {
        return str_1.concat(str_2);
    }
}
