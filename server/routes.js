// Import event controller 
import eventController from './controllers/eventController';
// Import center controller 
import centerController from './controllers/centerController';

const routes = (app) => {
  // get of all centers
  app.get('/api/v1/events', eventController.getEvent);

  // creates an event
  app.post('/api/v1/events',eventController.postEvent);

  // edit an event
  app.put('/api/v1/events/:id', eventController.putEvent);
  
  // delete an event
  app.delete('/api/v1/events/:id', eventController.deleteEvent);
  
  // add a new  center
  app.post('/api/v1/centers', centerController.postCenter);

  // get of all centers
  app.get('/api/v1/centers', centerController.getCenter);
  
  // gets a single center by id
  app.get('/api/v1/centers/:id', centerController.getCenterById);

  // Modify the details of a center
  app.put('/api/v1/centers/:id',centerController.putCenter);
};
  export default routes;