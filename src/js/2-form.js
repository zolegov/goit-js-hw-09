const feedbackForm = document.querySelector('.feedback-form');
const feedbackFormInput = Array.from(
  document.querySelectorAll('.feedback-form-input')
);

feedbackFormInput.forEach(element => {
  const feedbackFormState = element.name === 'email' ? 'email' : 'message';
  element.value = localStorage.getItem(feedbackFormState);

  element.addEventListener('input', e => {
    localStorage.setItem(feedbackFormState, e.target.value.trim());
  });
});

feedbackForm.addEventListener('submit', evt => {
  evt.preventDefault();
 
  const isAllFieldsFilled = feedbackFormInput.every(
    element => element.value.trim() !== ''
  );    
  console.log('isAllFieldsFilled: ', isAllFieldsFilled);
  if (isAllFieldsFilled) {
    console.log(localStorage);
    localStorage.clear();
    feedbackForm.reset();
  } else {
    alert('Заповніть всі поля!');
  }
});
