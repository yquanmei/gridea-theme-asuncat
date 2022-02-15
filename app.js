const express = require('express')
const ejs = require('ejs')
const path = require('path')
// const axios = require('axios')

const listJson = require('./mock/list.json');
const postJson = require('./mock/post.json');
const archivesJson = require('./mock/archives.json');
const tagsJson = require('./mock/tags.json');
const tagJson = require('./mock/tag.json');

const app = express()

app.use(express.static(__dirname))

app.set('views', path.join(__dirname, '/templates'));
app.set('view engine', 'ejs');

/**
 * Home Page & Post List Page
 */
app.get('/', async (req, res) => {
  // const response = await axios.get('https://raw.githubusercontent.com/getgridea/mock-json/master/list.json')
  // res.render('index', {...resopnse.data})
  res.render('index', {...listJson.data})
})

/**
 * Post Page
 */
app.get('/post/:postName', async (req, res) => {
  // const response = await axios.get('https://raw.githubusercontent.com/getgridea/mock-json/master/post.json')
  res.render('post', { ...postJson.data })
})

/**
 * Archives Page
 */
app.get('/archives', async (req, res) => {
  // const response = await axios.get('https://raw.githubusercontent.com/getgridea/mock-json/master/archives.json')
  res.render('archives', { ...archivesJson.data })
})

/**
 * tags Page
 */
app.get('/tags', async (req, res) => {
  // const response = await axios.get('https://raw.githubusercontent.com/getgridea/mock-json/master/tags.json')
  res.render('tags', { ...tagsJson.data })
})

/**
 * tag Page
 */
app.get('/tag/:tagName', async (req, res) => {
  // const response = await axios.get('https://raw.githubusercontent.com/getgridea/mock-json/master/tag.json')
  res.render('tag', { ...tagJson.data })
})

//使用8080端口
app.listen(5001)
console.log("The server is running on 5001")
