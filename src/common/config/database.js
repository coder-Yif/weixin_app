const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'yifeitest',
    prefix: 'hiolabs_',
    encoding: 'utf8mb4',
    host: '8.219.145.193',
    port: '23306',
    user: 'dndwartest',
    password: '1qazxsw2',
    dateStrings: true
};
