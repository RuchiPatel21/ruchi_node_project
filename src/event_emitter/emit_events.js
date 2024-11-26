const EventEmitter = require('events');
    const event_emitter = new EventEmitter();
    event_emitter.setMaxListeners(13);

    function main(req, res) {
        // event_emitter.once('myEvent2', (msg) => {
        //     console.log("once1");
            // res.send(msg);
        //  });
        // event_emitter.once('myEvent2', (msg) => {
        //     console.log("once2");
            // res.send(msg);
        //  });
        //  event_emitter.on('myEvent', (msg) => {
        //     console.log("msg1");
            // res.send(msg);
        //  });
        //  event_emitter.on('myEvent', (msg) => {
        //     console.log("msg2");
            // res.send(msg);
        //  });
        //  event_emitter.on('myEvent', (msg) => {
        //     console.log("msg3");
            // res.send(msg);
        //  });
        //  event_emitter.on('myEvent', (msg) => {
        //     console.log("msg4");
            // res.send(msg);
        //  });
        //  event_emitter.on('myEvent', (msg) => {
        //     console.log("msg5");
            // res.send(msg);
        //  });
        //  event_emitter.on('myEvent', (msg) => {
        //     console.log("msg6");
            // res.send(msg);
        //  });

        //  event_emitter.on('onEvent1', (msg) => {
        //     console.log("onEvent1");
            // res.send(msg);
        //  });

        //  event_emitter.on('onEvent2', (msg) => {
        //     console.log("onEvent2");
            // res.send(msg);
        //  });

        //  event_emitter.on('onEvent3', (msg) => {
        //     console.log("onEvent3");
            // res.send(msg);
        //  });

        //  event_emitter.on('onEvent4', (msg) => {
        //     console.log("onEvent4");
            // res.send(msg);
        //  });

        //  event_emitter.on('onEvent5', (msg) => {
        //     console.log("onEvent5");
            // res.send(msg);
        //  });
        //  event_emitter.on('onEvent6', (msg) => {
        //     console.log("onEvent6");
            // res.send(msg);
        //  });
        //  event_emitter.on('onEvent7', (msg) => {
        //     console.log("onEvent7");
            // res.send(msg);
        //  });
        //  event_emitter.on('onEvent8', (msg) => {
        //     console.log("onEvent8");
            // res.send(msg);
        //  });
        //  event_emitter.on('onEvent9', (msg) => {
        //     console.log("onEvent9");
            // res.send(msg);
        //  });
        //  event_emitter.on('onEvent10', (msg) => {
        //     console.log("onEvent10");
            // res.send(msg);
        //  });
        //  event_emitter.on('onEvent11', (msg) => {
        //     console.log("onEvent11");
            // res.send(msg);
        //  });
        //  event_emitter.on('onEvent12', (msg) => {
        //     console.log("onEvent12");
            // res.send(msg);
        //  });
        //  event_emitter.on('onEvent13', (msg) => {
        //     console.log("onEvent13");
            // res.send(msg);
        //  });
        //  event_emitter.on('onEvent14', (msg) => {
        //     console.log("onEvent14");
            // res.send(msg);
        //  });
        //  event_emitter.on('onEvent15', (msg) => {
        //     console.log("onEvent15");
            // res.send(msg);
        //  });
        
         event_emitter.on('OnEvent1', (msg) => {
    
            console.log("onEvent1");
            // res.send(msg);
         });
         event_emitter.on('OnEvent1', (msg) => {
            console.log("onEvent1");
            // res.send(msg);
         });
         event_emitter.on('OnEvent1', (msg) => {
            console.log("onEvent1");
            // res.send(msg);
         });
         event_emitter.on('OnEvent1', (msg) => {
            console.log("onEvent1");
            // res.send(msg);
         });
         event_emitter.on('OnEvent1', (msg) => {
            console.log("onEvent1");
            // res.send(msg);
         });
         event_emitter.on('OnEvent1', (msg) => {
            console.log("onEvent1");
            // res.send(msg);
         });
         event_emitter.on('OnEvent1', (msg) => {
            console.log("onEvent1");
            // res.send(msg);
         });
         event_emitter.on('OnEvent1', (msg) => {
            console.log("onEvent1");
            // res.send(msg);
         });
         event_emitter.on('OnEvent1', (msg) => {
            console.log("onEvent1");
            // res.send(msg);
         });
         event_emitter.on('OnEvent1', (msg) => {
            console.log("onEvent1");
            // res.send(msg);
         });
         event_emitter.on('OnEvent1', (msg) => {
            console.log("onEvent1");
            // res.send(msg);
         });
         event_emitter.on('OnEvent1', (msg) => {
            console.log("onEvent1");
            res.send(msg);
         });
         
         const offEvent = (msg)=>{console.log("offEvent1");}
         event_emitter.on('OffEvent1', offEvent);
         event_emitter.off('OffEvent1', offEvent);

        //  event_emitter.emit('myEvent', "First event");
        //  event_emitter.emit('myEvent2', "First event");
        //  event_emitter.emit('onEvent1', "First event");
        //  event_emitter.emit('onEvent2', "First event");
        //  event_emitter.emit('onEvent3', "First event");
        //  event_emitter.emit('onEvent4', "First event");
        //  event_emitter.emit('onEvent5', "First event");
        //  event_emitter.emit('onEvent6', "First event");
        //  event_emitter.emit('onEvent7', "First event");
        //  event_emitter.emit('onEvent8', "First event");
        //  event_emitter.emit('onEvent9', "First event");
        //  event_emitter.emit('onEvent10', "First event");
        //  event_emitter.emit('onEvent11', "First event");
        //  event_emitter.emit('onEvent12', "First event");
        //  event_emitter.emit('onEvent13', "First event");
        //  event_emitter.emit('onEvent14', "First event");
        //  event_emitter.emit('onEvent15', "First event");
        event_emitter.emit('OnEvent1',"First event");
        event_emitter.emit('OffEvent1',"First event");
         
    }
    module.exports = {
        main
    }