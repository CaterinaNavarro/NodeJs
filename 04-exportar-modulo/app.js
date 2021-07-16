// Import fs-table-module 
const fs_table = require('./fs-table-module.js');

fs_table.writeTableFilePromise(5)
    .then((res) =>
    {
        console.log(res);
    })
    .catch((err) =>
    {
        console.log(err);
    });