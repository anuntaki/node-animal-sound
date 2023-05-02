const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send("동물소리 서버에 어서오세요\n '/sound/동물' 입력하세요")
})

app.get('/sound/:name', (req, res) => {
  const {name} = req.params;

  if(name == "dog"){
    res.json({'sound' : '멍멍'})
  } else if(name == "cat"){
  res.json({'sound' : '야옹'})
  } else if(name == "pig"){
    res.json({'sound' : '꿀꿀'})
  }else {
    res.json({'sound' : '알수 없음'})
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})