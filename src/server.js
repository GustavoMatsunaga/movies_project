// importing the server and nunjucks
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//requiring the data created in data.js
const {trailers, socialMedia} = require('../data')

// Starting nunjucks to watch the page with the HTML files
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Setting the server
server.use(express.static("public"))
server.listen(5000, () => {  // Opening it with a message in the log in the port 5000
    console.log("Server is runing")
})
server.get("/", pageLanding)
server.get("/trailers", pageTrailers)


// Functions to render the pages
function pageLanding (req, res) {
    // Adding my about with a template engine and importing data from another file
    const about = {
        name: "Gustavo Matsunaga",
        career: "Frontend Developer",
        careerInfo: "Software developer focused on developing Frontend tecnologies. (HTML5, CSS3, JAVASCRIPT)",
        aboutInfo:  "I'm a frontend developer and a quicklearner with a civil engineering background. Solving problems is one of my passions. Combining my previous experience with civil enginnering I have worked under pressure, managing and having to be flexible in different situations. That lead me to develop a unique and useful way of solving problems. This has a huge impact in my way of working through things. Nowadays I'm improving my habilities in HTML5, CSS3, Javascript, React, React Native, and some SQL.",
        oneFact: "Watching movies is one of my passions, It allways makes me happy. Whenever I have a free time, when I'm not writing some code, I usually take that time to watch some movies. Here I'll present to you some of my favorite movie trailers "
    }

    // Rendering the landing page with about data and the socialMedia from the data.js file
    return res.render("landing-page.html", {about, socialMedia})
}

function pageTrailers (req, res) {
    // Rendering the trailers page with trailer and the socialMedia from the data.js file
    return res.render("trailers-page.html", {trailers, socialMedia})
}