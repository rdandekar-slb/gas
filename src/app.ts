import  express  from 'express';

const app = express();
const port:number = 3000;

app.get('/', (req, res)=>{
res.send('The quick brown fox jumped over the lazy dog!');
}
);

app.listen(port,() => {
    return console.log(`server is listening on ${ port }`);
});