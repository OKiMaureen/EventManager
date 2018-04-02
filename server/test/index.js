// import chaiHttp module
import chaiHttp from 'chai-http';
// import chai module
import chai from 'chai';
// import app
import app from '../app';

const { expect } = chai;
chai.use(chaiHttp);

const eventDetails = {
  id: 0,
  name: "Ama's wedding",
  type: 'social event',
  location: 'Lagos',
};

const centerDetails = {
  id: 0,
  name: 'Golden center',
  address: '3rd Avenue,Festac',
  capacity: '50-100',
  cost: 100000,
  facilities: 'air conditioner, projector, standby generator'
};

describe('Test API default route', () => {
  // test for getting default route
  it('should return 200 for getting default route', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
describe('GET  ALL Events', () => {
  // test for getting all events route
  it('Should return 200 for succesfully getting event route', (done) => {
    chai.request(app)
      .get('/api/v1/events')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
describe('POST Event', () => {
  // test for posting event successfully
  it('Should return 201 for a sucessful post', (done) => {
    chai.request(app)
      .post('/api/v1/events')
      .send(eventDetails)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
});
describe('PUT Event', () => {
  // test for putting event successfully
  it('Should return 200 for a sucessful "put" or update', (done) => {
    chai.request(app)
      .put('/api/v1/events/1')
      .send(eventDetails)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('status').equal('successfully updated');
        done();
      });
  });
});
describe('DELETE Event', () => {
  // test for deleting event successfully
  it('Should return 200 for a sucessful delete', (done) => {
    chai.request(app)
      .delete('/api/v1/events/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
describe('POST Center', () => {
  // test for posting center successfully
  it('Should return 201 for a sucessful post', (done) => {
    chai.request(app)
      .post('/api/v1/centers')
      .send(centerDetails)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
});
describe('GET All Centers', () => {
  // test for getting all centers route
  it('Should return 200 for succesfully getting center route', (done) => {
    chai.request(app)
      .get('/api/v1/centers')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
describe('GET Centers by Id', () => {
  it('Should return 200 for sucessfully getting center by id', (done) => {
    chai.request(app)
      .get('/api/v1/centers/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
describe('PUT Center', () => {
  // test for putting center successfully
  it('Should return 200 for a sucessful "put" or update', (done) => {
    chai.request(app)
      .put('/api/v1/centers/1')
      .send(centerDetails)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('status').equal('successfully updated');
        done();
      });
  });
});
