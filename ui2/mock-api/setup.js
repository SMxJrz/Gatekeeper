const updateJsonFile = require('update-json-file');
const filePath = 'mock-api/config.json';
const options = {defaultValue: () => ({}) };

updateJsonFile(filePath, (data) => {
    data.mockDirectory = process.cwd() + '/mock-api/dataSource/';

    return data;
}, options);