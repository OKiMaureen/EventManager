import eventsDb from '../model/eventDatabase';
/**
 * class Event controls all event methods
 * @class Event
 */
class Event {
  /**
   * GET all events
   * @param {any} req
   * @param {any} res
   * @returns {json} gets all events
   * @memberof Event
   */
  getEvent(req, res) {
    res.status(200).json({
      events: eventsDb,
      status: 'success'
    });
  }
  /**
   * POST a new event
   * @param {any} req
   * @param {any} res
   * @returns {json} adds new event
   * @memberof Event
   */
  postEvent(req, res) {
    const { name, type, location } = req.body;
    const id = eventsDb.length;
    const event = {
      id,
      name,
      type,
      location,
    };
    eventsDb.push(event);
    return res.status(201)
      .json({
        status: 'sucessfully updated',
        message: 'event added',
        center: event
      });
  }
  /**
   * PUT an event
   * @param {any} req
   * @param {any} res
   * @returns {json} updates event
   * @memberof Center
   */
  putEvent(req, res) {
    const { id } = req.params;
    let putEvent;
    eventsDb.forEach((event) => {
      if (event.id === parseInt(id, 10)) {
        event.name = req.body.name || event.name;
        event.type = req.body.type || event.type;
        event.location = req.body.location || event.location;
        putEvent = event;
      }
    });
    if (putEvent) {
      return res.status(200).json({
        status: 'successfully updated',
        message: 'event updated',
        event: putEvent
      });
    }
    return res.status(404).send(`cannot find event with id ${id}`);
  }
  /**
   * DELETE an event
   * @param {any} req
   * @param {any} res
   * @returns {json} deletes an event
   * @memberof Center
   */
  deleteEvent(req, res) {
    for (let i = 0; i < eventsDb.length; i += 1) {
      if (parseInt(eventsDb[i].id, 10) === parseInt(req.params.id, 10)) {
        eventsDb.splice(i, 1);
        return res.status(200)
          .json({
            status: 'successfully deleted',
            message: 'Event has been deleted'
          });
      }
    }
    return res.status(404).send('Event not found');
  }
}
const eventController = new Event();
export default eventController;

