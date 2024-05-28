
const btnNext = document.getElementById('nextButton');

btnNext.addEventListener('click',checkFirstName
);


function checkFirstName() {
    const firstName = document.getElementById('name').value;

    if(!firstName){
        alert("Name must be filled out");
    }
}