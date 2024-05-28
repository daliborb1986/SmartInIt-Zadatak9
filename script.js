const btnNext = document.getElementById('nextButton');

btnNext.addEventListener('click', checkFirstName);

function checkFirstName() {
  const firstName = document.getElementById('name').value;

  if (!firstName) {
    alert('Name must be filled out');
  }
}
let titleUpperCase = document.getElementById('firstPageTitle');

titleUpperCase.style.textTransform = 'uppercase';
titleUpperCase.style.fontWeight = 'bold';

let titleHeader = document.getElementById('titleHeader');
titleHeader.style.fontStyle = 'italic';
titleHeader.style.fontWeight = 'bold';

const page1 = document.getElementById('page1');
const startPage = document.getElementById('startPage');
const btnStart = document.getElementById('startButton');

function changePage() {
    startPage.classList.toggle('d-none');
    if(page1.classList.contains('d-none')){
        page1.classList.toggle('d-none');
    }
}

btnStart.addEventListener('click', changePage);
