import { Router } from "express";
import { getAlbumById, getAllAlbums } from "../controllers/album.controller";

const router = Router();

router.get("/", getAllAlbums);
router.get("/:albumId", getAlbumById);

export default router;
