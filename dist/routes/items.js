"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let items = [];
let currentId = 1;
router.get('/', (req, res) => {
    res.json(items);
});
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const item = items.find((item) => item.id === id);
    if (!item) {
        res.status(404).json({ error: 'Item not found' });
        return;
    }
    res.json(item);
});
router.post('/', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        res.status(400).json({ error: 'Title and description is required' });
        return;
    }
    const newItem = { id: currentId++, title, description };
    items.push(newItem);
    res.status(201).json(newItem);
});
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    items = items.filter((item) => item.id !== id);
    res.status(204).send();
});
exports.default = router;
