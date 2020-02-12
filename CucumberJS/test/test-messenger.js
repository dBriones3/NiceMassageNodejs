var expect  = require('chai').expect;
const Messenger = require('../lib/messenger');
 
describe('Messenger', function() {
    describe ('Get a friendly message', function() {
        it('return a nice message', function(done){

            //Arrange
            let mesenger;
            mesenger = new Messenger( );
            //Act
            let message =  mesenger.getMessage();
            //Assert
            expect(message).to.equal("Hello World!");
             done();
        });
    });
 
    describe ('Get a friendly day message in spanish ', function() {
        it('return a good morning message', function(done){

            //Arrange
            let mesenger;
            mesenger = new Messenger( );
            //Act
            let message =  mesenger.getMessageWithHour(new Date(2020, 02, 11, 0, 0, 0).toTimeString(), "es");
            //Assert
            expect(message).to.equal("Buenos dias");
             done();
        });
    });

    describe ('Get a friendly day message in english ', function() {
        it('return a good morning message set us', function(done){

            //Arrange
            let mesenger;
            mesenger = new Messenger( );
            //Act
            let message =  mesenger.getMessageWithHour(new Date(2020, 02, 11, 0, 0, 0).toTimeString(), "us");
            //Assert
            expect(message).to.equal("good morning");
             done();
        });
    });


    describe ('Get a friendly day message in french ', function() {
        it('return a good morning message set fr', function(done){

            //Arrange
            let mesenger;
            mesenger = new Messenger( );
            //Act
            let message =  mesenger.getMessageWithHour(new Date(2020, 02, 11, 0, 0, 0).toTimeString(), "fr");
            //Assert
            expect(message).to.equal("Bonjour");
             done();
        });
    });



    describe ('Get a friendly good afternoon message in spanish ', function() {
        it('return a good afternoon message in spanish', function(done){

            //Arrange
            let mesenger;
            mesenger = new Messenger( );
            //Act
            let message =  mesenger.getMessageWithHour(new Date(2020, 02, 11, 12, 0, 0).toTimeString(), "es");
            //Assert
            expect(message).to.equal("Buenas tardes");
             done();
        });
    });

    describe ('Get a friendly good afternoon message ', function() {
        it('return a good afternoon message in us language', function(done){

            //Arrange
            let mesenger;
            mesenger = new Messenger( );
            //Act
            let message =  mesenger.getMessageWithHour(new Date(2020, 02, 11, 12, 0, 0).toTimeString(), "us");
            //Assert
            expect(message).to.equal("Good afternoon");
             done();
        });
    });


    describe ('Get a friendly good afternoon message in french', function() {
        it('return a good afternoon message in fr language', function(done){

            //Arrange
            let mesenger;
            mesenger = new Messenger( );
            //Act
            let message =  mesenger.getMessageWithHour(new Date(2020, 02, 11, 12, 0, 0).toTimeString(), "fr");
            //Assert
            expect(message).to.equal("Bonsoir");
             done();
        });
    });

    describe ('Get a friendly Goodnight message in spanish', function() {
        it('return a Goodnight message in spanish language', function(done){

            //Arrange
            let mesenger;
            mesenger = new Messenger( );
            //Act
            let message =  mesenger.getMessageWithHour(new Date(2020, 02, 11, 19, 0, 0).toTimeString(), "es");
            //Assert
            expect(message).to.equal("Buenas noches");
             done();
        });
    });

    describe ('Get a friendly Goodnight message in us language', function() {
        it('return a Goodnight message in us language', function(done){

            //Arrange
            let mesenger;
            mesenger = new Messenger( );
            //Act
            let message =  mesenger.getMessageWithHour(new Date(2020, 02, 11, 19, 0, 0).toTimeString(), "us");
            //Assert
            expect(message).to.equal("Goodnight");
             done();
        });
    });

    describe ('Get a friendly Goodnight message in fr language', function() {
        it('return a Goodnight message in fr language', function(done){

            //Arrange
            let mesenger;
            mesenger = new Messenger( );
            //Act
            let message =  mesenger.getMessageWithHour(new Date(2020, 02, 11, 19, 0, 0).toTimeString(), "fr");
            //Assert
            expect(message).to.equal("Bonne nuit");
             done();
        });
    });

});