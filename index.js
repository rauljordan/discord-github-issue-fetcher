require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
const octokit = require('@octokit/rest')()

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', (message) => {
  issueMatch = message.content.match(/\{{([0-9]+)\}}/)
  if (issueMatch != null) {
    const issueThread = issueMatch[1];
    const options = {
      owner: 'prysmaticlabs',
      repo: 'prysm',
      number: issueThread,
    };
    octokit.issues.get(options, (error, result) => {
      console.log(result); 
      if (error) {
        return
      }
      message.channel.send({
        embed: {
          color: result.data.state === 'closed' ? 10038562 : 2067276,
          author: {
            name: result.data.user.login,
            icon_url: result.data.user.avatar_url,
          },
          title: result.data.title,
          url: result.data.html_url,
          fields: [{
              name: "Summary",
              value: result.data.body.slice(0, 400) + '...',
            },
          ],
          timestamp: new Date(result.data.created_at),
          footer: {
            text: "Status - " + result.data.state,
          }
        }
      });
    });
  }
});

client.login(process.env.TOKEN_SECRET);

