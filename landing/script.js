document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (name && email && phone) {
        alert(`Thank you for signing up, ${name}! We will contact you soon.`);
        document.getElementById('signup-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
