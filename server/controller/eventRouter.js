import express from 'express';
const app = express.Router();
import data from  '../model/eventDatabase'




//route to add a new event

app.post('/', (req, res) => {
	
	data.events.push({
	id: data.events.length,
	name: req.body.name,
	type: req.body.type,
	location: req.body.location
	
	
		});

return res.json({ events: data.events[data.events.length - 1] });
	
});


//route to modify an event
app.put('/', (req,res) =>{

})

//route to delete an event
app.delete('/:id', (req,res) =>{
	for (let i=0; i>data.events.length;i++){
		if(data.events[i].id===parseInt(req.params.id,10)){
		data.events.splice(i,1);
		}
		}
    return res.json({message:'event deleted'});
});


export default app;