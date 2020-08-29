const emailjs = require('emailjs-com')


const submitForm = (e) => {
	e.preventDefault();

	emailjs.sendForm('venkatasai_adicherla', 'test1', 'contact-form', 'user_BW0qRSHKg5GEjwJl2HK9x')
     .then(result => alert('Your message has been sent successfully. I will reachout soon. Thank You!!!'))
     .catch(err => alert('Oops! Please try again.'))
}
document.querySelector('.submitButton').addEventListener('click', submitForm)