const express = require('express');
const app = express();
const Client = require('pg');
const port = 3000;
//
const conString = 'postgres://postgres:12345678@localhost/postgres';
// const client = new pg.Client(conString)
const pgConfig = {
  host: 'localhost',

  port: '5432',
  user: 'postgres',
  password: '12345678',
};
const dbClient = new Client(pgConfig);
dbClient.connect();
const selectSql = 'SELECT * FROM users';

// 라우터 : 주소(경로)
// res : 응답
// req : 요청
// http : 단방향구조 / OSI7 계층
// 프리티어(prettier.(자동정렬), git 해야된다.)
app.get('/test', async (req, res) => {
  console.log(await dbConnection(selectSql));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
