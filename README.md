# Anti Coffea
Auto nickname users in a guild.

# Discord Application Setup
A discord bot token is required to setup the bot and communicate with the Discord API.
These can be obtained by setting up an application in the [Discord developer portal](https://discord.com/developers/applications).

* Create a new application by clicking `New Application`

![image](https://user-images.githubusercontent.com/40413502/174899983-c23e4972-4671-43c6-a4f6-688d62cb9865.png)
* Give the bot a name and click `Create`

![image](https://user-images.githubusercontent.com/40413502/174899864-f802d85a-d46d-400c-bb0e-5c678c9fdbef.png)
* Head to the `Bot` tab and `Add Bot`

![image](https://user-images.githubusercontent.com/40413502/174900261-08f2b9dd-ed27-4448-b8fa-df0a7a4395f1.png)
* In the same tab, click `Reset Token` to generate a new token and save it for use later
* Navigate to OAuth2 > URL Generator
* Select the `Bot` scope and under `Bot Permissions` select `Administrator`
* Copy the generated URL at the bottom of the page and paste it into your browser
* Follow the on screen instructions and add it to your server


# Installation
Clone the repository and install dependencies
```
git clone https://github.com/anti-coffea
cd anti-coffea
npm install
```
## Environment
Create a `.env` file in the root of the project (or copy paste the `.env.example` to `.env`).
The file contents should be
```
DISCORD_TOKEN=<YOUR_TOKEN_HERE>
```
Where `<YOUR_TOKEN_HERE>` is the token that you should have generated earlier.

## Running
Refer to scripts section in `package.json` to view run options.
If [PM2](https://pm2.keymetrics.io/) is installed, then using `npm run pm2:start` is useful for daemonizing the process.
`pm2 monit` can then be used to monitor the process.

# Configuration
The `names.json` file contains a list of key:value pairs in JSON. The format should follow
```
{
  "<DISCORD USER ID>": "<NICKNAME>",
  "<DISCORD USER ID>": "<NICKNAME>",
  ...
}
```

You can get someone's discord user ID by right clicking on their profile and clicking `Copy ID` as below.

![image](https://user-images.githubusercontent.com/40413502/174898831-29cff3f6-1864-4150-9940-fb966b909841.png)

Note that a Discord user ID is not the same as their display name. It should look something like `437825584144580619`.
For example, if I want the user with an id of `1234567890` to have a nickname of `TEST NICKNAME`, the following key value pair should be added
```
"1234567890": "TEST NICKNAME"
```


