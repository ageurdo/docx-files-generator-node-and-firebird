import express from "express";
import cors from "cors";
import { executeQuery } from "./config/database.js";

const app = express();

// Middleware JSON
app.use(express.json());

// Middleware CORS
app.use(cors());
// Rotas
app.get("/empresas", function (req, res) {

    let ssql = 'select * from empresas ';

    let filtro = [];

    executeQuery(ssql, filtro, function (err, result) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(result);
        }
    });
});

// app.get("/produtos", function(req, res){

//     let filtro = [];
//     //let ssql = 'select id_produto as "id", descricao as "descricao", valor as "valor" ';
//     let ssql = 'select id_produto, descricao, valor ';
//     ssql += 'from tab_produto where id_produto > 0 ';

//     if (req.query.descricao){
//         ssql += "and descricao like ?";
//         filtro.push("%" + req.query.descricao + "%");
//     }

//     if (req.query.valor){
//         ssql += "and valor >= ?";
//         filtro.push(req.query.valor);
//     }

//     executeQuery(ssql, filtro, function(err, result){
//         if (err) {
//             res.status(500).json(err);
//         } else {
//             res.status(200).json(result);
//         }
//     });    
// });

// app.post("/produtos", function(req, res){

//     let ssql = "INSERT INTO TAB_PRODUTO(descricao, valor) VALUES(?, ?) RETURNING id_produto ";

//     executeQuery(ssql, [req.body.descricao, req.body.valor], function(err, result){
//         if (err) {
//             res.status(500).json(err);
//         } else {
//             res.status(201).json({id_produto: result.ID_PRODUTO});
//         }
//     });    
// });

app.listen(3000, function () {
    console.log("Servidor no ar 🚀");
});

