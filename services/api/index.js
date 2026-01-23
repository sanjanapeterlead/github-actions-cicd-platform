const express = require('express');
const app = express();

app.get('/health', (req, res)=>{
    res.json({status: "Health status is ok!"});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("API is running on PORT ${PORT}");
});
