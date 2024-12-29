import express from "express";
import { getCryptoDeviation, getLatestCryptoStats } from "../controllers/crypto.controller.js";

const router = express.Router();

router.get("/getLatestCryptoStats",getLatestCryptoStats);
router.get("/getCryptoDeviation",getCryptoDeviation);

export default router;