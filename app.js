const express = require("express");
const os = require('os');
const app = express();
const PORT = 4000;
const db = require("./db");
const qw = ruquire("./name");
qw.name('vassa');
// const { name, summ } = require('./name');

// name('fghjk')

app.listen(PORT,()=>{
 console.log("server pracye");
})
