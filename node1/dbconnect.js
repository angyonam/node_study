// pg : postgray
// @ts-ignore
const {Client} = require('pg');
// const Query= require('pg').Query;
const dbConnection = (sql, param) => {
    const dbClient = new Client(pgConfig);

    dbClient.connect();

    console.log(param, !param)

    return new Promise((resolve, reject) => {

        if(!param){
            dbClient.query(sql, (err, res) => {
                if(err) reject(err);
                resolve(res);
                dbClient.end();
            })
        } else {
            dbClient.query(sql, param, (err, res) => {
                if(err) reject(err);
                resolve(res);
                dbClient.end();
            })
        }
    });
}

