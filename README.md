# telegram-serverless-bot

Telegram bot created with Serverless framework

## Requirements

* Node (Try [NVM](https://github.com/nvm-sh/nvm))
* [Serverless Framework](https://serverless.com/)
* [Ngrok](https://ngrok.com/)
* [Telegram Bot](https://core.telegram.org/bots)

## How to make it work locally?

After cloning this repo, first install the dependencies:

`npm install`

Execute the project locally:

`serverless offline`

And now, having **ngrok** installed and configured, to be able to listen for events of Telegram in our local machine we'll execute:

`ngrok http 3000`

That will give you something like:

```
Version                       2.3.35
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://76071a50.ngrok.io -> http://localhost:3000
Forwarding                    https://76071a50.ngrok.io -> http://localhost:3000
```

We will take the **HTTPS** url that it gives you (it's different for every execution) in this case https://76071a50.ngrok.io and out Telegram Bot Token and will make a request to the following URL to set the Webhook for the telegram bot:

`https://api.telegram.org/bot[TELEGRAM_BOT_TOKEN]/setWebhook?url=[NGROK_URL]/find`

It's important to use the *HTTPS* version of the URL, without encryption Telegram won't accept it.

Now you will be able to make requests to your bot. For this example you can use the following commands:

`/oldschool`
`/modern`
`/hipster`
