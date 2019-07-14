const express = require('express');

const app = express();

// http://localhost:297
app.listen(297, function(err) {
    if(err) console.log(err)
    else console.log("Server start success")
})