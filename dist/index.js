"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var productroute_1 = __importDefault(require("./routes/productroute"));
var cartroute_1 = __importDefault(require("./routes/cartroute"));
var app = express_1.default();
var port = process.env.PORT || 8080;
var server = app.listen(port, function () { return console.log('Servidor Up!, en puerto', port); });
server.on('error', function (err) { console.log('Server Error', err); });
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/producto", productroute_1.default), app.use("/carrito", cartroute_1.default);
app.get('/', function (req, res) { res.sendFile(__dirname + "../public/index.html"); });
