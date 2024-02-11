// Get the UI elements
let bform = document.querySelector('#book-bform');
let booklist = document.querySelector('#book-list');


// Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class
class UI {
    static addToBooklist(book) {
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="delete">X</a></td>`;

        list.appendChild(row);

    }

    static clearFields() {
        document.querySelector("#title").value = '';
        document.querySelector("#author").value = '';
        document.querySelector("#isbn").value = '';
    }

    static showAlert(message, className) {
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        //console.log(div);
        let container = document.querySelector('.container');
        let bform = document.querySelector('#book-bform');
        container.insertBefore(div, bform);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    static deleteFromBook(target) {
        if (target.hasAttribute('href')) {
            target.parentElement.parentElement.remove();
            Store.removeBook(target.parentElement.previousElementSibling.textContent.trim());
            UI.showAlert('Book Removed!', 'success');
        }
    }
}

// Local Storage Class
class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book) {
        let books = Store.getBooks();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static displayBooks() {
        let books = Store.getBooks();

        books.forEach(book => {
            UI.addToBooklist(book);
        });
    }

    static removeBook(isbn) {
        let books = Store.getBooks();

        books.forEach((book, index) => {
            if (book.isbn === isbn) {
                books.splice(index, 1);
            }
        })

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Add Event Listener
bform.addEventListener('submit', newBook);
booklist.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', Store.displayBooks());


// Define functions

function newBook(e) {
    let title = document.querySelector("#title").value,
        author = document.querySelector("#author").value,
        isbn = document.querySelector("#isbn").value;



    if (title === '' || author === '' || isbn === '') {

        UI.showAlert("Please fill all the fields!", "error");
    } else {

        let book = new Book(title, author, isbn);

        UI.addToBooklist(book);

        UI.clearFields();

        UI.showAlert("Book Added!", "success");

        Store.addBook(book);
    }




    e.preventDefault();
}

function removeBook(e) {
    UI.deleteFromBook(e.target);
    e.preventDefault();
}













// Define UI element
let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearBtn = document.querySelector('#clear_task_btn');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');

// Define event listeners
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask);
document.addEventListener('DOMContentLoaded', getTasks);

// Define functions
// Add Task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task!');
    } else {
        // Create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);
        taskList.appendChild(li);

        storeTaskInLocalStorage(taskInput.value);

        taskInput.value = '';


    }
    e.preventDefault();
}

// Remove Task
function removeTask(e) {
    if (e.target.hasAttribute("href")) {
        if (confirm("Are you sure?")) {
            let ele = e.target.parentElement;
            ele.remove();
            //console.log(ele);
            removeFromLS(ele);
        }
    }
}

// Clear Task
function clearTask(e) {
    //taskList.innerHTML = "";

    // Faster
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    localStorage.clear();
}

// Filter Task
function filterTask(e) {
    let text = e.target.value.toLowerCase();

    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}

// Store in Local Storage
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(task => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task + " "));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerHTML = 'x';
        li.appendChild(link);
        taskList.appendChild(li);
    });
}

function removeFromLS(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    let li = taskItem;
    li.removeChild(li.lastChild); // <a>x</a>'

    tasks.forEach((task, index) => {
        if (li.textContent.trim() === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}








// // *****   Fetch API with example    ********


// document.getElementById('get_data').addEventListener('click', getData);


// function getData() {
//     fetch('https://api.chucknorris.io/jokes/random')
//         .then(res => res.json())
//         .then(data => { console.log(data); })
//         .catch(err => { console.log(err); })
// }





// // *****   AJAX with example    ********


// document.getElementById('get_data').addEventListener('click', loadData);


// function loadData() {
//     // create XHR object (XML http req)
//     let xhr = new XMLHttpRequest();

//     // open
//     xhr.open('GET', 'data.txt', true);

//     xhr.onload = function () {

//         // http status
//         // 200: ok
//         // 403: forbidden
//         // 404: error

//         if (this.status === 200) {
//             document.getElementById('output').innerHTML = `<h2>${this.responseText}</h2>`
//         }
//     }
//     xhr.send();
// }



// // *****   Sum of the series of squares numbers    ********




// var n = parseInt(prompt("enter the number of terms"));
// var sum = 0;
// var series = " ";


// for (var i = 1; i <= n; i++) {
//     sum += i ** 2;
//     series += (i ** 2).toString();
//     if (i == n) { continue; }
//     series += " + "
// }

// console.log(`${series} = ${sum}`);






// // *****   Number calculator    ********




// console.log("Select an option: \n 1.Add \n 2.Substract \n 3.Multiply \n 4.Divide");

// var num1 = prompt("Please Enter first number: ");
// var num2 = prompt("Please Enter second number: ");
// var option = prompt("Please  choose an operation: ");
// var result = null;

// num1 = parseInt(num1);
// num2 = parseInt(num2);
// option = parseInt(option);

// var num1Con = isNaN(num1);
// var num2Con = isNaN(num2);
// var optionCon = isNaN(option);

// if (num1Con || num2Con || optionCon) {
//     console.log("Invalid input!")
// } else {
//     switch (option) {
//         case 1:
//             result = num1 + num2;
//             break;
//         case 2:
//             result = num1 - num2;
//             break;
//         case 3:
//             result = num1 * num2;
//             break;
//         case 4:
//             result = num1 / num2;
//             break;
//         default:
//             break;
//     }
// }

// if (result == null) {
//     console.log("No result!");
// } else {
//     console.log("result : " + result);
// }






// // *****   Grade calculator    ********




// var number = prompt("Please Enter your marks: ");
// number = parseInt(number);
// var grade;

// if (number <= 100 && number >= 80) {
//     grade = "A+";
// } else if (number <= 80 && number >= 70) {
//     grade = "A";
// } else if (number <= 70 && number >= 60) {
//     grade = "B";
// } else if (number <= 60 && number >= 50) {
//     grade = "C";
// } else if (number <= 50 && number >= 40) {
//     grade = "D";
// } else if (number <= 40 && number >= 0) {
//     grade = "F";
// } else {
//     grade = "Invalid Input";
// }

// console.log("Your grade is : " + grade);






// // *****   Temparature calculator    ********




// var temp = prompt("Please Enter a temparature: ")
// var result = 9 / 5 * temp + 32;
// alert("Farenheit: " + result + "Degree");
// console.log("Task Complete!")


