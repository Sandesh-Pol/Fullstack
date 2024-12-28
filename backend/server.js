import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send("Server is ready");
});
// get list of 5 jocks  
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Why don’t skeletons fight each other?",
            content: "They don’t have the guts."
        },
        {
            id: 2,
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        },
        {
            id: 3,
            title: "What do you call fake spaghetti?",
            content: "An impasta!"
        },
        {
            id: 4,
            title: "Why can’t your nose be 12 inches long?",
            content: "Because then it would be a foot!"
        },
        {
            id: 5,
            title: "What do you call cheese that isn't yours?",
            content: "Nacho cheese!"
        }
    ];
    res.send(jokes)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server st http://localhost:${port}`);

})
