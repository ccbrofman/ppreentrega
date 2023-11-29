import express from "express";
const app= express ();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const routes=require ('./routes');
// routes (app);

app.listen (8080, () => console.log("Server listening on port 8080"));

