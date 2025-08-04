let phoneBooks = [];

const addContact = (name, phone) => {
    phoneBooks.push({ name, phone });
    return phoneBooks;
};

const displayContacts = () => {
    return phoneBooks.map(contact => `Name: ${contact.name}, Phone: ${contact.phone}`).join('\n');
};

addContact('Trang', '0987569246');
addContact('Kiên', '0798981710');
console.log(displayContacts());
