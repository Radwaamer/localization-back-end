const express = require('express');
const translate = require('translate-google');

const app = express();
app.use(express.json());

app.post('/translate', async(req,res)=>{
    const {msg,to}= req.body;
    try {
        const translation = await translate(msg, { from: 'auto', to: to, except:[] });
        res.status(200).json({ translation });
    } catch (error) {
        res.status(500).json({ error: 'Translation failed' });
    }
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});