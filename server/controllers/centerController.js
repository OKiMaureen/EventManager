import centersDb from '../model/centerDatabase';

/**
 * class Center controls all center methods
 * @class Center
 */
class Center {
  /**
   * GET all centers
   * @param {any} req
   * @param {any} res
   * @returns {json} gets all centers
   * @memberof Center
   */
  getCenter(req, res) {
    res.status(200).json({
      events: centersDb,
      status: 'success'
    });
  }
  /**
   * POST a new center
   * @param {any} req
   * @param {any} res
   * @returns {json} adds a new center
   * @memberof Center
   */
  postCenter(req, res) {
    const {
      name, address, capacity, cost, facilities
    } = req.body;
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
        center
      });
  }
  /**
   * PUT center
   * @param {any} req
   * @param {any} res
   * @returns {json} updates center
   * @memberof Center
   */
  putCenter(req, res) {
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
  /**
   * GET center by id
   * @param {any} req
   * @param {any} res
   * @returns {json} gets a center by id
   * @memberof Center
   */
  getCenterById(req, res) {
    const { id } = req.params;
    centersDb.forEach((center) => {
      if (center.id === parseInt(id, 10)) {
        return res.status(200).json({
          center,
          message: 'success',
          error: false
        });
      }
    });
    res.status(404).json({
      message: 'Center could not be found',
      error: true
    });
  }
}
const centerController = new Center();
export default centerController;
