"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsController = void 0;
const productos_1 = require("../persistencia/productos");
class Producto {
    checkAddProducts(req, res, next) {
        const { nombre, precio } = req.body;
        if (!nombre || !precio || typeof nombre !== 'string' || isNaN(precio)) {
            return res.status(400).json({
                msg: 'Campos del body invalidos',
            });
        }
        next();
    }
    checkProductExists(req, res, next) {
        const id = Number(req.params.id);
        const producto = productos_1.productsPersistencia.find(id);
        if (!producto) {
            return res.status(404).json({
                msg: 'producto not found',
            });
        }
        next();
    }
    getProducts(req, res) {
        const id = Number(req.params.id);
        const producto = id
            ? productos_1.productsPersistencia.get(id)
            : productos_1.productsPersistencia.get();
        res.json({
            data: producto,
        });
    }
    addProducts(req, res) {
        const newItem = productos_1.productsPersistencia.add(req.body);
        res.json({
            msg: 'producto agregado con exito',
            data: newItem,
        });
    }
    updateProducts(req, res) {
        res.json({
            msg: 'actualizando producto',
        });
    }
    deleteProducts(req, res) {
        const id = Number(req.params.id);
        productos_1.productsPersistencia.delete(id);
        res.json({
            msg: 'producto borrado',
        });
    }
}
exports.productsController = new Producto();
