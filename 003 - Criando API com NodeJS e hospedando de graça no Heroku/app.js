const express = require('express');
const app = express();

const PORT  = process.env.PORT || 8877;

app.get('/equips', (req, res) => {
    res.json({
        cpu: 'AMD Ryzen 1700',
        gpu: 'Galax GTX 1070',
        mouse: 'Logitech G PRO',
        headset: 'Turtle beach PX22',
        keayboard: 'Alfawise v1',
    })
})

app.get('/about', (req, res) => {
    res.json({
        name: 'Abner',
        email: 'abnerfs@gmail.com',
        urls: [
            {
                type: 'github',
                url: `http://github.com/abnerfs`
            },
            {
                type: 'youtube',
                url: 'https://www.youtube.com/channel/UCgJY9EgxDscvVGbXzftiMBg'
            },
            {
                type: 'discord',
                url: 'abnerfs#8033'
            }
        ]
    })
})


app.get('/', (req, res) => {
    res.json({
        msg: 'OK'
    })
})

app.listen(PORT, () => {
    console.log('Escutando na porta: ' + PORT);
})