const express=require('express');
const app = express();



let data = require('./data.json');

app.use(express.json());
app.use('/koders',);

app.get('/mentors',(req,resp)=>{
    console.log('mentors');
    //resp.json(data.mentors);
    resp.json({
        success:true,
        message:"Done",
        data: data.mentors
    });
});
app.post('/mentors',(req,resp)=>{
    //const { name :nombre = 'Edwin', age: edad = '21' } = req.body;
    const { name, age } = req.body;
    const newMentor = { name , age };

    data.mentors = [...data.mentors,newMentor];

    resp.json({
        success:true,
        message:"Mentor created",
        data:data.mentors
    });
});

app.get('/mentors/:name',(req,resp)=>{
    const { name } = req.params;
    const foundMentor = data.mentors.find(mentor =>{
        console.log('name: ',mentor.name);
        const mentorName = mentor.name.toLowerCase();
        return (mentorName === name.toLowerCase());
    });
    if(foundMentor){
        console.log("Encontrado");
        return resp.json({
            success:true,
            mentor:foundMentor
        });
    }
    resp.status(404).json({
        success:false,
        message:'Mentor not fount'
    });
});

app.listen(8080,()=>{
    console.warn("App ready on port 8080");
});