// src/index.ts
import app from './server';
import itemsRouter from './routes/items';

const PORT = 3030;

console.log("Starting server setup...");

app.use('/api/items', itemsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

console.log("App setup complete.");