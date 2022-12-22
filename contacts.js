const fs = require('fs').promises;
const path = require('path');

const contactsPath = require('./db/contacts.json')
// console.log('normalization :' + path.normalize('/test/test1//2slashes/1slash/tab/..'));