let tooltips = document.querySelectorAll(".tt");
tooltips.forEach((t) => {
  new bootstrap.Tooltip(t);
});

let contact = document.getElementById('contact')
let contactEmail = document.getElementById('email') 
let contactQuery = document.getElementById('query') 
let contactName = document.getElementById('name')
let contactSubject = document.getElementById('subject')
contact.addEventListener('submit', (e) => {
  e.preventDefault()
  if(
    contactEmail.value !== '' &&
    contactQuery.value !== ''
  ){
    formAlert.classList.remove('alert', 'alert-danger')
    formAlert.innerHTML = ``
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();
    contactEmail.value = ''
    contactQuery.value = ''
    contactName.value = ''
    contactSubject.value = ''
  } else {
    formAlert.classList.add('alert', 'alert-danger')
    formAlert.innerHTML = `Please fill out the required fields`
  }
})