function startConversation(node, senderChannel) {
  var receiverChannel = getFoundUserChannel(node);
  node = document.getElementById('chat-container');
  h3 = document.createElement('h3');
  h3.innerHTML = 'Conversation srarted';
  node.appendChild(h3);
  faye(senderChannel, receiverChannel);
}

function getFoundUserChannel(node) {
  // Use lastElementChild instead of lastChild
  // http://www.w3schools.com/jsref/prop_node_lastchild.asp
  var channel = node.parentNode.lastElementChild.innerHTML;
  // TODO more clever channel name
  // channel = channel.split('.').join("").toLowerCase();
  channel = '/user01'

  return channel;
}


// TODO faye

function faye(senderChannel, receiverChannel) {
  if (!senderChannel && !receiverChannel) { return; }

  // Global
  url = 'http://' + document.location.host + '/faye';
  client = new Faye.Client(url);

  subscription = client.subscribe(senderChannel, function(message) {
    if (message.text) {
      addReceivedMessageText(message.text);
    }

    if (message) {

    }
  });

  publish = function() {
    var message = {
      text: document.getElementById("message-input").value
    }

    addSentMessageText(message.text);
    var publication = client.publish(receiverChannel, message);

    publication.then(function() {
      console.log('Message received by server!');
    }, function(error) {
      console.log('There was a problem: ' + error.message);
    });
  }

  // Not global
  function addSentMessageText(messageText) {
    addMessageText(messageText, "sent-message")
  }

  function addReceivedMessageText(messageText) {
    addMessageText(messageText, "received-message");
  }

  function addMessageText(messageText, className) {
    var div = document.createElement('div');
    div.className = className;
    div.innerHTML = messageText;
    document.getElementById('chat-container').appendChild(div);
  }
}
