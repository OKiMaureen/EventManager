import centersDb from '../model/centerDatabase'
class Center {
  // get all centers method
  getCenter(req, res) {
    res.status(200).json({
      events: centersDb,
      status: 'success'
    });
  }
  // add new center method
  postCenter (req, res) {
    const {name,address,capacity,cost,facilities} = req.body;
    const id = centersDb.length;
    const center = {
      id,
      name,
		  address,
		  capacity,
		  cost,
		  facilities
    };
    centersDb.push(center);
    return res.status(201)
      .json({
        status: 'sucessfully updated',
        message: 'center added',
        center: center
      });
  }
  // edit center method
  putCenter (req, res) {
    const { id } = req.params;
    let putCenter;
    centersDb.forEach((center) => {
      if (center.id === parseInt(id, 10)) {
        center.name = req.body.name || center.name;
        center.address = req.body.address || center.address;
        center.capacity = req.body.capacity || center.capacity;
        center.cost = req.body.cost || center.cost;
        center.facilities = req.body.facilities || center.facilities;
        putCenter = center;
      }
    });
    if (putCenter) {
      return res.status(200).json({
        status: 'successfully updated',
        message: 'Center updated',
        center: putCenter
      });
    }
    return res.status(404).send(`cannot find center with id ${id}`);
  }
  // get center by id method
  getCenterById (req, res) {
    const { id } = req.params;
    centersDb.forEach((center) =>  {
      if (center.id === parseInt(id, 10)) {
        return res.status(200).json({
          center: center,
          message: 'success',
          error: false
        });
      }
    }
   )
   res.status(404).json({
    message: 'Center could not be found', 
    error: true
  })
}
}
const centerController = new Center();
export default centerController;