import { Song } from "../models/song.model.js";

export const getAllSongs = async (req, res, next) => {
  try {
    const songs = await Song.find().sort({ createdAt: -1 }); // Sort by createdAt descending
    res.status(200).json(songs);
  } catch (error) {
    console.log("Error in getAllSongs: ", error);
    next(error);
  }
};

export const getFeauturedSongs = async (req, res, next) => {
  try {
    //fetch 6 random songs from the database using aggregation pipeline
    const songs = await Song.aggregate([
      { $sample: { size: 6 } },
      { $project: { _id: 1, title: 1, artist: 1, imageUrl: 1, audioUrl: 1 } },
    ]);
    res.status(200).json(songs);
  } catch (error) {
    console.log("Error in getFeauturedSongs: ", error);
    next(error);
  }
};

export const getMadeForYouSongs = async (req, res, next) => {
  try {
    const songs = await Song.aggregate([
      { $sample: { size: 4 } },
      { $project: { _id: 1, title: 1, artist: 1, imageUrl: 1, audioUrl: 1 } },
    ]);
    res.status(200).json(songs);
  } catch (error) {
    console.log("Error in getMadeForYouSongs: ", error);
    next(error);
  }
};

export const getTrendingSongs = async (req, res, next) => {
  try {
    const songs = await Song.aggregate([
      { $sample: { size: 4 } },
      { $project: { _id: 1, title: 1, artist: 1, imageUrl: 1, audioUrl: 1 } },
    ]);
    res.status(200).json(songs);
  } catch (error) {
    console.log("Error in getMadeForYouSongs: ", error);
    next(error);
  }
};
