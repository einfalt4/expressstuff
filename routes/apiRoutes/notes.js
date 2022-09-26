const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
let data = require('../../db/db.json');

router.get('/notes', (req, res) => {
    data = require('../../db/db.json');
    console.log({ data });
    res.json(data);
});

router.post('/notes', (req, res) => {
    const pushNotes = { ...req.body, id: uuidv4() };
    console.log(pushNotes);
    console.log(req.body);
    data.unshift(pushNotes);
    fs.writeFile('./db/db.json', JSON.stringify(data), (err, data) => {
        if (err) throw err
    });
    res.json(data);
});

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const writtenNotes = notes.filter((note) => {
        return note.id !== id;
    })
    fs.writeFile('./db/db.json', JSON.stringify(writtenNotes), (err, data) => {
        if (err) throw err
    });
    res.json(writtenNotes);
});

module.exports = router; 