function validatePhone(phone) {
  const phoneRegex = /^[0-9]{10}$/; 
  return phoneRegex.test(phone);
}


function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export{validatePhone,validateEmail}