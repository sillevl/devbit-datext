import mysql, { Connection } from 'mysql'

export default class QueryRunner {

    private db: Connection

    constructor() {
        this.db =  mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'spacex'
        });
        this.db.connect();
    }

    public run(query: string) {
        this.query(query)
        .then( (result: any) => console.log(result))
        .catch( (error: any) => console.log(error))
        // this.db.end()
    }

    private query(query: string): Promise<any> {
        return new Promise( (resolve, reject) => {
            this.db.query(query, (error, results, fields) => {
                if(error) {
                    reject(error)
                }
                resolve(results)
            })
        })
    }
}

 
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 