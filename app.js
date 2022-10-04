const express = require('express');
const router = require('./routes/main')
const app = express();

const PORT = process.env.PORT || 2000;

app.use(express.json())
app.use(router)

app.get('/', (req, res) => {
    res.send('HELLO WORLD')
});

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`server is listening on PORT ${PORT}`)
        });
    } catch (error) {
        console.log(error)

    }
}

start();