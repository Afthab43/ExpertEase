import express from 'express';


import { getDetails } from '../controller/expertease.controller.js';

const router = express.Router();
router.get('/getdetails', getDetails);

export default router;