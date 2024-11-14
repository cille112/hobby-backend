import { Router, Request, Response } from 'express';

const router = Router();

let items: { id: number; title: string; description: string }[] = [];
let currentId = 1;

router.get('/', (req: Request, res: Response) => {
  res.json(items);
});

router.get('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const item = items.find((item) => item.id === id);
    if (!item) {
        res.status(404).json({ error: 'Item not found' });
        return
    }
    res.json(item);
});

router.post('/', (req: Request, res: Response) => {
    const { title, description } = req.body;
    if (!title || !description) {
      res.status(400).json({ error: 'Title and description is required' });
      return
    }
    const newItem = { id: currentId++, title, description };
    items.push(newItem);
    res.status(201).json(newItem);
  });

router.delete('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  items = items.filter((item) => item.id !== id);
  res.status(204).send();
});

export default router;
