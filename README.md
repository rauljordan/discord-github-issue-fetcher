# Discord Issue/PR Mention Bot

This bot on discord listens for users to type in {{issue_num | pr_num}} in a chat box and embeds a rich description of the corresponding Issue or PR in the message right beneath it. Currently, it is only configured for Prysmatic Labs' [prysm](https://github.com/prysmaticlabs/prysm) repo, but that is easily modifiable.

To run this bot on your server, simply create a bot on your Discord developer portal, invite the bot to the server by authorizing it via OAuth2, and fetch its secret token.

Clone the repo and install all dependencies with yarn:

```bash
git clone https://github.com/rauljordan/discord-github-issue-fetcher && cd ./discord-github-issue-fetcher
npm i -g yarn
yarn install
```

Then, put the secret token in a .env file in the cloned folder. In ./discord-github-issue-fetcher/.env:

```bash
TOKEN_SECRET=secrebottoken
```

Then run:

```bash
npm start
```
