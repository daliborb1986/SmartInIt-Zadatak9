//  -------Buttons------//

const btnNext = document.getElementById('nextButton');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');
const startPage = document.getElementById('startPage');
const btnStart = document.getElementById('startButton');
const userNote = document.getElementById('noteToUser');
const choiceOther = document.getElementById('q7');
const inputOtherAnswer = document.getElementById('inputDiv');
const btnPage2 = document.getElementById('goToPage3')
const btnPage3 = document.getElementById('goToPage4')
const btnPage4 = document.getElementById('goToPage5')

const radioButtons = document.querySelectorAll('input[name="question"]');

var titleHeader = document.getElementById('titleHeader');
var titleUpperCase = document.getElementById('firstPageTitle');
const question = document.getElementById('question');
var firstName = document.getElementById('name');

// ----- CSS style ----- //

titleUpperCase.style.textTransform = 'uppercase';
titleUpperCase.style.fontWeight = 'bold';

titleHeader.style.fontStyle = 'italic';
titleHeader.style.fontWeight = 'bold';
userNote.classList.add('noteToUser');

// ----Event listeners ---- //

btnNext.addEventListener('click', checkFirstName);
btnStart.addEventListener('click', changePage);
btnNext.addEventListener('click', nextPageWithName);
btnPage2.addEventListener('click', goToPage3);
btnPage3.addEventListener('click', goToPage4);
btnPage4.addEventListener('click', goToPage5);

// ---- Functions ----- //

function checkFirstName() {
  if (!firstName.value) {
    alert('Name must be filled out');
  }
}
function changePage() {
  startPage.classList.toggle('d-none');
  page1.classList.toggle('d-none');
}
function nextPageWithName() {
  if (firstName.value) {
    page1.classList.toggle('d-none');
    page2.classList.toggle('d-none');
  }
}


function goToPage3(){
  page2.classList.toggle('d-none');
  page3.classList.toggle('d-none');
}
function goToPage4(){
  page3.classList.toggle('d-none');
  page4.classList.toggle('d-none');
}
function goToPage5(){
  page4.classList.toggle('d-none');
  page5.classList.toggle('d-none');
}
radioButtons.forEach((radio) => {
  radio.addEventListener('change', function () {
    if (choiceOther.checked) {
      inputOtherAnswer.classList.remove('d-none');
    } else {
      inputOtherAnswer.classList.add('d-none');
    }
  });
});
let currentDivIndex = 0;




// function showPage(index) {
//   pages.forEach((div, i) => {
//     if (i === index) {
//       div.classList.remove('d-none');
//     } else {
//       div.classList.add('d-none');
//     }
//   });
// }

// btnNext.addEventListener('click', function(){
//   currentDivIndex = (currentDivIndex + 1) % pages.length;
//   showPage(currentDivIndex);
// })
