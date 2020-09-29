const express = require('express')

const Posts = require('../data/db.js')

const router = express.Router()

router.get('/', (req, res) => {
    Posts.find()
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving the posts'
        });
    });
});

router.post('/', (req, res) => {
    Posts.insert(req.body)
    .then(post => {
        res.status(201).json(post);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Error adding the post'
        });
    });
});

router.post('/:id/comments', (req, res) => {
    Posts.insertComment(req.body)
    .then(post => {
        res.status(201).json(post);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: "Error adding the comment."
        });
    });
});

router.get('/:id', (req, res) => {

    Posts.findById(req.params.id)
    .then(post => {
        if (post == true) {
            res.status(200).json(post);
        } else {
            res.status(404).json({message: 'Post not found'});
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving the post.'
        });
    });
});

router.get('/:id/comments', (req, res) => {
    Posts.findPostComments(req.params.id)
    .then(post => {
        if (post) {
            res.status(200).json(post);
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving the comments.'
        })
    })
})







module.exports = router;