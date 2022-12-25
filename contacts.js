const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve(__dirname, './db/contacts.json');

// TODO: задокументувати кожну функцію
async function listContacts() {
    const dbRaw = await fs.readFile(contactsPath, 'utf8');
    const db = JSON.parse(dbRaw);
    return db;
}

async function writeDb(db) {
    await fs.writeFile(contactsPath, JSON.stringify(db));

}

async function getContactById(contactId) {
    const contacts = await listContacts();
    const filtredContact = contacts.filter((contacts) => contacts.id === contactId);

}

async function removeContact(contactId) {
    const contacts = await listContacts();
    const updatedContacts = contacts.filter((contacts) => contacts.id !== contactId)
}

function addContact(name, email, phone) {
    // ...твій код
}

module.exports = {
    listContacts,
    getContactById,
}