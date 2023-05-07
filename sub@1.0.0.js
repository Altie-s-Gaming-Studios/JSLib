$(document).ready(function() {
    // Replace 'YOUR_API_KEY' with your YouTube API key
    var apiKey = 'AIzaSyDe_T9FnA-kpwi5mfJwsudAur4N-Vc6ROA';
    
    // Define the channels and their respective IDs
    var channels = [
      { name: 'Altie\'s Gaming', id: 'UC9RA0TJNGmiMcyFYkhvKrtg', spanId: 'ag' },
      { name: 'Altie\'s Gaming Infinite', id: 'UCDdNM3GzfcJ2rix0WfUeJ3A', spanId: 'agi' },
      { name: 'Altie\'s Gaming Live', id: 'UCeIyX6udwdsbDLwdAvfHQAg', spanId: 'agl' }
    ];

    function updateSubscriberCount(channel) {
      var apiUrl =
        'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=' +
        channel.id +
        '&key=' +
        apiKey;

      $.getJSON(apiUrl, function(data) {
        var subscriberCount =
          data.items[0].statistics.subscriberCount;
        $('#' + channel.spanId).text(subscriberCount);
      });
    }

    // Update the subscriber counts initially
    channels.forEach(function(channel) {
      updateSubscriberCount(channel);
    });

    // Update the subscriber counts every 10 seconds
    setInterval(function() {
      channels.forEach(function(channel) {
        updateSubscriberCount(channel);
      });
    }, 10000);
  });