import eventsDb from '../model/eventDatabase'
class Event {
  // get all events
  getEvent(req, res) {
    res.status(200).json({
      events: eventsDb,
      status: 'success'
    });
  }
  // add new event method
  postEvent (req, res) {
    const {name,type,location,} = req.body;
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
  // edit event method
  putEvent (req, res) {
    const { id } = req.params;
    let putEvent;
    eventsDb.forEach((event) => {
      if (event.id === parseInt(id, 10)) {
        event.name = req.body.name || event.name;
        event.type = req.body.type || event.type;
        event.location = req.body.location || event.location
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
  // delete event method
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

