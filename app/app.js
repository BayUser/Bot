const express = require('express');
const app = express();
const PORT = 8080;
 
app.set('view engine', 'ejs');
app.get('/premium', function (req, res) {
    res.render('premium');
})
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("[SERVER] Port Açıldı.", PORT);
});