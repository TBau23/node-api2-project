const express = require('express');

const postsRouter = require("./posts/postsRouter.js");

const server = express();

server.use(express.json());

server.use("/api/posts", postsRouter);

server.get('/', (req, res) => {
    res.status(200).json({message: 'Server is running ...'})
})

const port = 5000;

server.listen(port, () => {
    console.log('\n*** Server Running on http://localhost:5000***\n');
})