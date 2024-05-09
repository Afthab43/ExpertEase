import express from 'express';


import { getCourseDetails } from '../controller/expertease.controller.js';

const router = express.Router();
router.get('/getcourses', getCourseDetails);

export default router;