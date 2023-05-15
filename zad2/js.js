// Funkcja sprawdzająca, czy pole posiada wartość
function validateRequiredField(fieldId, fieldName) {
const value = document.getElementById(fieldId).value;
  if (value.trim() === '') {
    document.getElementById(fieldId).setCustomValidity(`Pole ${fieldName} jest wymagane.`);
    document.getElementById(fieldId).reportValidity();
	}
	else{
	document.getElementById(fieldId).setCustomValidity('');
    document.getElementById(fieldId).reportValidity();
	}
}

// Funkcja sprawdzająca długość znaków
function validateLength() {
	const value = document.getElementById("tel").value;
	const fieldName = "telefon";
	const minLength = 9;
	const maxLength = 11;
  if (value.length < minLength || value.length > maxLength) {
    document.getElementById('tel').setCustomValidity(`Pole ${fieldName} powinno mieć od ${minLength} do ${maxLength} znaków.`);
	 document.getElementById('tel').reportValidity();
	}
	else{
	document.getElementById('tel').setCustomValidity('');
    document.getElementById('tel').reportValidity();
	}
}

// Funkcja sprawdzająca poprawność adresu email
function validateEmail() {
	const value = document.getElementById("mail").value;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!emailRegex.test(value)) {
    document.getElementById('mail').setCustomValidity('Podaj poprawny adres email.');
	document.getElementById('mail').reportValidity();
  }
  else{
	document.getElementById('mail').setCustomValidity('');
	document.getElementById('mail').reportValidity(); 
  }
}

// Funkcja sprawdzająca trudność hasła
function validatePassword() {
	const value = document.getElementById("haslo").value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!passwordRegex.test(value)) {
    document.getElementById('haslo').setCustomValidity('Hasło powinno zawierać co najmniej 8 znaków, przynajmniej jedną małą literę, jedną wielką literę i jedną cyfrę.');
	document.getElementById('haslo').reportValidity();
  }
  else{
	document.getElementById('haslo').setCustomValidity('');
	document.getElementById('haslo').reportValidity();
  }
}

// Funkcja walidująca formularz
function validateForm() {
	validateRequiredField('imie', 'Imie');
	validateRequiredField('nazwisko', 'Nazwisko');
	validateEmail();
	validatePassword();
	validateLength();
	validateRequiredField('data', 'Data');
	validateRequiredField('kraj', 'Kraj');
}