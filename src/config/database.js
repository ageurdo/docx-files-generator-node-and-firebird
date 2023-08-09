import firebird from "node-firebird";
import dotenv from "dotenv";

dotenv.config();

const dbOptions = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    lowercase_keys: process.env.DB_LOWERCASE_KEYS === 'true',
    role: process.env.DB_ROLE,
    pageSize: parseInt(process.env.DB_PAGESIZE)
};

function executeQuery(ssql, params, callback) {
    firebird.attach(dbOptions, function (err, db) {
        if (err) {
            return callback(err, []);
        }

        db.query(ssql, params, function (err, result) {
            db.detach();

            if (err) {
                return callback(err, []);
            } else {
                return callback(undefined, result);
            }
        });
    });
}

export { executeQuery };
