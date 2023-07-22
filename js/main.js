const btn = document.querySelector('.btn');


function formRegister(e) {
    e.preventDefault();
    const input = document.querySelector('input')
    if (input.value === "") {
        alert("Please fill the form");
        return false;
    }

    const form = document.querySelector('form');
    form.style.display = 'none';

    const text = document.createElement('p');
    text.classList.add('contanct-form');
    text.textContent = 'Thank you for submitting the form. Soon you will receive a confirmation email.';
    text.style.fontWeight = '400';
    text.style.fontSize = '0.9rem';

    const titleForm = document.querySelector('h3');
    titleForm.appendChild(text);

}


btn.addEventListener('click', formRegister);