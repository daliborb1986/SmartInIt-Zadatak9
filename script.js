//  -------Buttons------//

const btnNext = document.getElementById('nextButton');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const startPage = document.getElementById('startPage');
const btnStart = document.getElementById('startButton');
const userNote = document.getElementById('noteToUser');
var titleHeader = document.getElementById('titleHeader');
var titleUpperCase = document.getElementById('firstPageTitle');

// ----- CSS style ----- //

titleUpperCase.style.textTransform = 'uppercase';
titleUpperCase.style.fontWeight = 'bold';

titleHeader.style.fontStyle = 'italic';
titleHeader.style.fontWeight = 'bold';
userNote.classList.add('noteToUser');

// ----Event listeners ---- //

btnStart.addEventListener('click', changePage);
btnNext.addEventListener('click', checkFirstName);
btnNext.addEventListener('click', nextPageWithName);

// ---- Functions ----- //

var firstName = document.getElementById('name');
function checkFirstName() {
  if (!firstName.value) {
    alert('Name must be filled out');
  }
}
function changePage() {
  startPage.classList.toggle('d-none');
  if (page1.classList.contains('d-none')) {
    page1.classList.toggle('d-none');
  }
}
function nextPageWithName() {
  if (firstName.value) {
    page1.classList.toggle('d-none');
    page2.classList.toggle('d-none');
  }
}
