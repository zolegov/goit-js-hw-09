const feedbackForm = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const { email, message } = feedbackForm.elements;

//перевіряємо чи є у полів значення в localStorage
const savedFormData = localStorage.getItem('feedback-form-state');
const formDataFromLocalStorage = JSON.parse(savedFormData);

if (savedFormData) {
  email.value = formDataFromLocalStorage.email;
  message.value = formDataFromLocalStorage.message;
}

feedbackForm.addEventListener('input', evt => {
  evt.preventDefault();

  const formDataToLocalStorage = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formDataToLocalStorage));
});

feedbackForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const feedbackFormInputs = document.querySelectorAll('.feedback-form-input');

  let count = 0;
  for (let i = 0; i < feedbackFormInputs.length; i++) {
    if (feedbackFormInputs[i].value === '') {
      count++;
    }
  }

  if (count === 0) {
    console.log(localStorage);
    localStorage.clear();
    feedbackForm.reset();
  } else {
    alert('Заповніть всі поля!');
  }
});
