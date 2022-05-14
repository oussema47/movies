const MovieSchema = require("../models/movie");
const express = require("express");
const { isAuth } = require("../middlewares/isAuth");
const auth = require("../models/auth");
const { upload } = require("../middlewares/upload");
const MovieRoutes = express.Router();

MovieRoutes.post(
    "/addMovie",
    isAuth,
    upload.single("image"),
    async (req, res) => {
        const user = await auth.findById(req.user._id);

        try {
            const movie = new MovieSchema({
                ...req.body,
                image: req.file.filename,
                userId: req.user._id,
            });
               if (user.role != "admin") {
               return res.send("your are not authorized");
              }
            console.log(req.file);
            await movie.save();

            res.status(200).send({ msg: "movie added", movie });
        } catch (error) {
            res.status(500).send({ msg: "could not add movie", error });
        }
    }
);
MovieRoutes.get("/", async (req, res) => {
    try {
         const movies = await MovieSchema.find();
        
        res.status(200).send({ msg: "list of movies", movies });
    } catch (error) {
        res.status(500).send({ msg: "could not get list", error });
    }
});

MovieRoutes.get("/mymovies", isAuth, async (req, res) => {
    try {
        const mymovies = await MovieSchema.find({ userId: req.user._id }).populate(
            "userId"
        );
        res.status(200).send({ msg: "my list", mymovies });
    } catch (error) {
        res.status(500).send({ msg: "could not my list", error });
    }
});
module.exports = MovieRoutes;