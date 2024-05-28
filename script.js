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
titleUpperCase.style.fontWeight = "bold"

let titleHeader = document.getElementById('titleHeader');
titleHeader.style.fontStyle = 'italic';
titleHeader.style.fontWeight = "bold"

const btnStart = document.getElementById('startButton');



