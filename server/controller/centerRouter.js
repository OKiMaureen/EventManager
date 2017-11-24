
import express from 'express';
const app = express.Router();
import data from '../model/centerDatabase'



// route to get all centers
app.get('/', (req, res) => {

    return res.json({ centers: data.centers });

});

//route to add a new center 
app.post('/', (req, res) => {

    data.centers.push({
        id: data.centers.length,
        name: req.body.name,
        address: req.body.address,
        cost: req.body.cost,
        capacity: req.body.capacity,
        facilities: req.body.facilities

    });
    return res.json({ centers: data.centers[data.centers.length - 1] });

});

//route to get center by id
app.get('/:id', (req, res) => {
    for (let i = 0; i < data.centers.length; i++) {
        if (data.centers[i].id === parseInt(req.params.id, 10)) {
            return res.json({
                message: data.centers[i],
                error: false
            });
        }
    }
    return res.json({ centers: data.centers[i] });

});


// route to modify the details of a center
app.put('/:id', (req, res) => {
    for (let i = 0; i < data.centers.length; i++) {
        if (data.centers[i].id === parseInt(req.params.id, 10)) {
            data.centers[i].name = req.body.name || data.centers.name;
            data.centers[i].address = req.body.address || data.centers.address;
            data.centers[i].capacity = req.body.capacity || data.centers.capacity;
            data.centers[i].cost = req.body.cost || data.centers.cost;
            data.centers[i].facilities = req.body.facilities || data.centers.facilities;

        }

    }
    return res.json({
        message: 'updated successfully',
       
    });

});

export default app;
