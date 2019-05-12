// Incompleted transcription
// Issue is that it returns error on stream byte, bug with angular 8 package... 
var fs = require('fs');

var SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const request = require('request')
request("https://audiostorage.blob.core.windows.net/audio/5ccf5385c5d47b01dda2b1fc-TEST123.wav").pipe(fs.createWriteStream('test.wav'))

// Speech to text configuration
var speechToText = new SpeechToTextV1({
    iam_apikey: 'frkL3kmm0vphzP_I122vKQQakYvC75iDc5ql3AUSyzfj',
    url: 'https://gateway-lon.watsonplatform.net/speech-to-text/api'
  });

  var params = {
    // From URL
    audio:fs.createReadStream('./test.wav'),
    content_type: 'audio/l16; rate=44100'
    };
    
    speechToText.recognize(params)
      .then(result => {
        console.log(JSON.stringify(result, null, 2));
      })
      .catch(err => {
        console.log(err);
      });
