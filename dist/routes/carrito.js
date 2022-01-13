"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.json('GET a Carrito');
});
router.post('/', (req, res) => {
    res.json('POST a Carrito');
});
router.put('/', (req, res) => {
    res.json('PUT a Carrito');
});
router.delete('/', (req, res) => {
    res.json('DELETE a Carrito');
});
exports.default = router;
