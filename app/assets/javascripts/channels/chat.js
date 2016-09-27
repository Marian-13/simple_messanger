// TODO faye

function faye(senderChannel, receiverChannel) {
  if (!senderChannel && !receiverChannel) { return; }

  // Global
  url = 'http://' + document.location.host + '/faye';
  client = new Faye.Client(url);

  subscription = client.subscribe(senderChannel, function(message) {
    addReceivedMessage(message);
  });

  publish = function() {
    var message = document.getElementById("chat-message-input").value;
    addSentMessage(message);
    var publication = client.publish(receiverChannel, message);

    publication.then(function() {
      console.log('Message received by server!');
    }, function(error) {
      console.log('There was a problem: ' + error.message);
    });
  }

  // Not global
  function addSentMessage(message) {
    addMessage(message, "std-div sent-message")
  }

  function addReceivedMessage(message) {
    addMessage(message, "std-div received-message");
  }

  function addMessage(message, className) {
    var div = document.createElement('div');
    div.className = className;
    div.innerHTML = message;
    document.getElementById('chat-place').appendChild(div);
  }
}
