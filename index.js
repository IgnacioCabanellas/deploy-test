const express = require('express'); 
const app = express();            
const port = process.env.PORT || 5000;                  

app.get('', (req, res) => {
  res.json({ nombre: 'luis' })
})

app.listen(port, () => {
    console.log(`Now listening on port ${port}`); 
});