const chai = require('chai')
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
const rewire = require('rewire');

//file that I want to test
let app = rewire('../app.js');

chai.use(chaiHttp);
chai.should();
//routes

describe('Routes', ()=>{

    describe('GET /', () => {

        it("should get home route", (done) => {
          chai.request(app)
            .get('/')
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              done();
            });
        });

        it("should return all excuses", (done) => {
            chai.request(app)
              .get('/excuse')
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
              });
        });

        
        it("should return a random excuses", (done) => {
            chai.request(app)
              .get('/excuse/random')
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
              });
        });

        it("should return a comment", (done) => {
            chai.request(app)
              .get('/excuse/random/1')
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
              });
        });
    })
})

//function
describe("Server Functions", () => {

    describe('Random Excuse', () => {
      let randomExcuse = app.__get__('random');
        it('should exist', () => {
            expect(randomExcuse).to.be.a('function');
        });
    });
});