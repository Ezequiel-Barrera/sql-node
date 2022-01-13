"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAdmin = void 0;
var admin = true;
var checkAdmin = function (req, res, next) {
    if (admin)
        next();
    else {
        res.status(401).json({
            msg: "Autorizacion denegada, no eres Administrador"
        });
    }
};
exports.checkAdmin = checkAdmin;