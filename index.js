const app = require('express')();

app.get('/', (req, res) => {
    res.send("Looking good")
});

app.listen(10000, () => {
    console.log("Up and at em!")
});
