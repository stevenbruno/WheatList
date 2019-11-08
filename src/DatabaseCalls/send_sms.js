const accountSid = 'AC47122c492e808618dc138434c80a5dcd';
const authToken = process.env().key
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12015845372',
     to: '+17735784074'
   })
  .then(message => console.log(message.sid));