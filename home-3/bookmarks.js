var arrayObj = [];
// 1. Додати нову закладку в список
function addBookmark(e) {
    var link = new Object();
    link.title = document.getElementById('title').value;
    link.url = document.getElementById('url').value;
    if (validateLink(link) && ValidURL(link.url)) {
        //adding to list
        //saving to localeStorage
        arrayObj.push(link);
        localStorage.setItem(link.title, link.url);
        renderListCount(link.title, link.url);
    }
    else {
        alert("Please fill in all the fields or enter valid URL(http://...)");
    }
}
// 2. Змінити відображеня кількості
function renderListCount(title, url) {
    var newTeg = document.createElement('a');
    newTeg.id = createId();
    newTeg.href = url;
    newTeg.value = title;
    newTeg.target = "_blank";
    newTeg.innerHTML = title;
    newTeg.className = "linkUrl";
    document.getElementsByClassName("bookmark-list")[0].appendChild(newTeg);
}
// 3. Валідувати дані, щоб не можна було
// зберегти пусті поля і неправильну адресу
// return true/false
function validateLink(link) {
    return link.title.trim().length != 0 || link.url.trim().length != 0;
}

function ValidURL(str) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (!regex.test(str)) {
        return false;
    }
    else {
        return true;
    }
}
//Коли відкриваєте сторінку первірити чи є
// дані в localeStorage, якщо так відобразити їх,
// якщо ні вивести повідомлення, що у вас немає збережених 
// заклдок
function renderBookmarkList() {
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem[i] != 'undefined') {
            renderListCount(localStorage.key(i), localStorage.getItem(localStorage.key(i)));
        }
    }
}

function createId() {
    var min = 1
        , max = 100000;
    return Math.floor(Math.random() * (max - min) + min);
}