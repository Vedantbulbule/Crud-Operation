import express from 'express';

const router = express.Router();

router.post('/user', () => {
    console.log('hello');
})
export default router;