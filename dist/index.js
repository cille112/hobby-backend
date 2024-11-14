"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const server_1 = __importDefault(require("./server"));
const items_1 = __importDefault(require("./routes/items"));
const PORT = 3030;
console.log("Starting server setup...");
server_1.default.use('/api/items', items_1.default);
server_1.default.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
console.log("App setup complete.");
