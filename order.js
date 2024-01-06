// order.js

function submitOrder() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // You can customize the WhatsApp message and email subject/content here
    const whatsappMessage = `New Order:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const emailSubject = 'New Order';
    const emailContent = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

    // Replace 'your_whatsapp_number' and 'your_email@example.com' with your actual WhatsApp number and email address
    const whatsappLink = `https://wa.me/7857024059?text=${encodeURIComponent(whatsappMessage)}`;
    const emailLink = `mailto:ronitsuman59@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailContent)}`;

    // Open WhatsApp and email links in new tabs
    window.open(whatsappLink, '_blank');
    window.open(emailLink, '_blank');

    // Optionally, you can reset the form after submission
    document.getElementById('order-form').reset();
}
