import express from 'express';
import { OAuth2Client } from 'google-auth-library';

const app = express();
const PORT = process.env.PORT || 9092;

app.use(express.static(__dirname + '/../public'));

const CLIENT_ID = "51632153265-8gehsskl100erb2og20u14ft07qj9uad.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

const unauthorized = (res: express.Response) => res.sendStatus(401);

const authMiddleware = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if(!token)
        return unauthorized(res);

    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID  
    })
    .catch(() => {
        return null;
    })

    if(!ticket)
        return unauthorized(res);

    const payload = ticket.getPayload();
    if(!payload)
        return unauthorized(res);

    const userid = payload['sub'];
    res.locals['userid'] = userid;
    next();
    return undefined;
}

app.get('/values2', authMiddleware,  (req: express.Request, res: express.Response) => {
    const userId = res.locals['userid'];

    res.json({
        value: 'Teste método protegido 2',
        userId
    })
});


app.get('/values', authMiddleware,  (req: express.Request, res: express.Response) => {
    const userId = res.locals['userid'];

    res.json({
        value: 'Teste método protegido',
        userId
    })
});

app.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile('index.html');
})

app.listen(PORT, () => console.log('Servidor iniciado na porta ' + PORT));
