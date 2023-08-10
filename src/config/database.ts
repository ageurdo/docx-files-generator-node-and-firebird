import dotenv from 'dotenv';
import firebird from 'node-firebird';

dotenv.config();

// Verificar se todas as variáveis de ambiente necessárias estão definidas
if (!process.env.DB_HOST || !process.env.DB_PORT || !process.env.DB_DATABASE || !process.env.DB_USER || !process.env.DB_PASSWORD) {
    throw new Error("Algumas variáveis de ambiente não estão definidas.");
}

const dbOptions = {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3050'), // Porta padrão 3050 se não especificada
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    lowercase_keys: process.env.DB_LOWERCASE_KEYS === 'true',
    role: process.env.DB_ROLE,
    pageSize: parseInt(process.env.DB_PAGESIZE || '16384') // Tamanho de página padrão 16384 se não especificado
};

export default function executeQuery(ssql: string, params: string[], callback: (err: any, result: any) => void) {
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
