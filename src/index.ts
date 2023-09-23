import express from 'express';
import bodyParser from 'body-parser';
import { Request, Response } from 'express';
import { port } from './config/config';
import sequelize from './config/database';
import usersRoutes from './routes/users.routes';
import authRoutes from './routes/auth.routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', async (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Hello World from another World.'
    });
});

app.use('/users', usersRoutes);
app.use('/auth', authRoutes);

app.listen(port, async () => {
    try {
        await sequelize.sync(); // Synchronize tables before running the server
        console.log(`App listening on port ${port}`);
    } catch (error) {
        console.error('Gagal menjalankan server:', error);
    }
});