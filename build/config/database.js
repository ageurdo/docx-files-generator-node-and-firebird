"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeQuery = void 0;
var node_firebird_1 = __importDefault(require("node-firebird"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var dbOptions = {
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
    node_firebird_1.default.attach(dbOptions, function (err, db) {
        if (err) {
            return callback(err, []);
        }
        db.query(ssql, params, function (err, result) {
            db.detach();
            if (err) {
                return callback(err, []);
            }
            else {
                return callback(undefined, result);
            }
        });
    });
}
exports.executeQuery = executeQuery;
