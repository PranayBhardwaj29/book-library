const cardSection = document.querySelector(".cards-section");
const addBookBtn = document.querySelector(".add-book-btn");

const addCloseBtn = document.getElementById('close-add-modal');
const editCloseBtn = document.getElementById('close-edit-modal');

const modal = document.getElementById("dialog-modal1");
const modal2 = document.getElementById("dialog-modal2");
const dialogWrapper = document.getElementById("dialog-wrapper1");
const dialogWrapper2 = document.getElementById("dialog-wrapper2");

const modalToggle = document.getElementById("modal-toggle1");
const modalReadTxt = document.getElementById("modal-toggle-text1");

const modalToggle2 = document.getElementById("modal-toggle2");
const modalReadTxt2 = document.getElementById("modal-toggle-text2");

const addForm = document.getElementById("add-form");
const editForm = document.getElementById("edit-form");

const editFormAuthor = document.getElementById("edit-form-author");
const editFormTitle = document.getElementById("edit-form-title");
const editFormPages = document.getElementById("edit-form-pages");

const tally = document.querySelector(".tally-txt")

const myLibrary = [];

let currentEditId = "";

function Book(author, title, pages, read, bgColor, id) {
    if (!new.target) {
        throw Error("You must use the 'new' operator");
    };

    this.id = id;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.bgColor = bgColor;
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}