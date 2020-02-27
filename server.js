const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const bodyParser= require('body-parser')
const path = require('path');
const favicon = require('serve-favicon');
const mongoose = require('mongoose')

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}

const TodoTask = require("./models/todoTask");

app.use(bodyParser.urlencoded({extended: true}))

app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.set("useFindAndModify", false);

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
	console.log("Connected to db!");
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	TodoTask.find({}, (err, tasks) => {
		res.render("index.ejs", { todoTasks: tasks });
	});
});

app.post('/',async (req, res) => {
	const todoTask = new TodoTask({
		content: req.body.content
	});
	try {
		await todoTask.save();
		res.redirect("/");
	} catch (err) {
		res.redirect("/");
	}
	console.log(req.body)
});

app.listen(port, () => console.log(`Listening on port ${port}`));
