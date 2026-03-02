import express from 'express'

const app = express()

app.use

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/profile', (req, res) => {
  res.send('profile Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})