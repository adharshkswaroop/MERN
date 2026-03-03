/* Template Engine: similar to HTML & connects various ejs files in on port ex:localhost:3000/app/about/...

Steps: 1.npm i ejs 
2. configute ejs 'app.set("view engine", "ejs")'
3. create view folder
4. create ejs files
5. rename 'send' to 'render'
6. inside render fun, should place the file which is inside the views folder as 'res.render("index")' NOTE: avoid '.ejs' in render fun
*/

import express from 'express';

import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static('.public'));

// app.use(function(req, res, next) {
//     next();
// });

app.get("/", function(req, res) {
    res.render('index');
});
app.get("/about", function(req, res) {
    res.render('about',{Assistant:"Alaric"});
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
