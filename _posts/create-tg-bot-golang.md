---
title: 'Creating a Telegram Bot using GoLang, and deploying it to Heroku'
excerpt: "Telegram is a great messaging app, growing in the last few years thanks to many of its features, that many other messaging apps don't have.
One of the best implemented features is: Bots.
Bots can interact with users, groups, supergroups and channels.

In the course of this post, I will show you how to create a telegram bot using GoLang."
coverImage: '/assets/blog/create-tg-bot-golang/cover.png'
date: '2022-07-18T05:35:07.322Z'
author:
  name: XAERdev
  picture: '/assets/blog/authors/xaer.png'
ogImage:
  url: '/assets/blog/create-tg-bot-golang/cover.png'
---

# How to create a telegram bot using GoLang

Telegram is a great messaging app, growing in the last few years thanks to many of its features, that many other messaging apps don't have.
One of the best implemented features is: Bots.
Bots can interact with users, groups, supergroups and channels.

In the course of this post, I will show you how to create a telegram bot using GoLang.

## Requirements

- ***Telegram Account***: To create a telegram bot you will need a telegram account to create bots using the [BotFather](https://t.me/botfather) (we'll find out how in just a minute!).
- ***Telego***: [Telego](https://github.com/SakoDroid/telego) is a library for creating telegram bots in GoLang.

## Initializing Go project

Using the terminal, we'll create a new directory and initialize a new Go project into it with the following command:

```bash
go mod init example/telegram-bot
```

and then create a new file called `main.go`:

```go
package main

import "fmt"

func main() {
  fmt.Println("Hello, world!")
}
```

To install the Telego library we will need to install it into our $GOPATH using the `go get` command.

```bash
go get -u github.com/SakoDroid/telego
```

## Creating the bot

Now, before implementing any bot logic, we'll create a new bot using the [BotFather](https://t.me/botfather).
To do so follow these simple steps:

1. Open your Telegram app (from any device) and start a new conversation with the BotFather.
2. Send the `/newbot` command.
3. Choose a name for your bot.
4. If all went well, you will a message which contains the API Token that we'll use later. I suggest to copy it and store it in a .env file in the root folder of your project.

```env
TG_API_TOKEN=<your-api-token>
```
_.env_ file

Now that we have a new and active bot, let's implement the code for our bot.

## Coding the bot

As mentioned before, we'll use the telego library to create our bot. I will also install the (GoDotEnv)[https://github.com/joho/godotenv] library to read safely from the .env file, and not share my Token with anyone when pushing to a public git repository.

```bash
go get -u github.com/joho/godotenv
```

The first thing we'll do is import the libraries we need for the project to work, like so.

```go
package main

import (
  bot "github.com/SakoDroid/telego"
  configs "github.com/SakoDroid/telego/configs"
  objects "github.com/SakoDroid/telego/objects"
  "github.com/joho/godotenv"
)
```

Then, to create the bot configs, we'll need to retrieve the Telegram API Token from our `.env` file,
so let's create a small function that helps us do that.

```go
package main

import (
  "os"
  "path/filepath"
  
  bot "github.com/SakoDroid/telego"
  configs "github.com/SakoDroid/telego/configs"
  objects "github.com/SakoDroid/telego/objects"
  "github.com/joho/godotenv"
)

func GetEnv(key string) (string, error) {
  if value, ok := os.LookupEnv(key); ok {
    return value, nil
  }

  return "", errors.New("Key not found in environment")
}

func main() {
  errGoEnv := godotenv.Load(filepath.Join("./", ".env"))
  if errGoEnv != nil {
    panic(errGoEnv)
  }
}
```
Now we can safely start using our API Token withour worries, so we can create the bot configs and create our new bot. Then we'll start it with the `Run()` method.

```go
package main

import (
  "os"
  "errors"
  "path/filepath"

  bot "github.com/SakoDroid/telego"
  configs "github.com/SakoDroid/telego/configs"
  objects "github.com/SakoDroid/telego/objects"
  "github.com/joho/godotenv"
)

func GetEnv(key string) (string, error) {
  if value, ok := os.LookupEnv(key); ok {
    return value, nil
  }

  return "", errors.New("Key not found in environment")
}

func main() {
  errGoEnv := godotenv.Load(filepath.Join("./", ".env"))
  if errGoEnv != nil {
    panic(errGoEnv)
  }

  apiToken, tokenError := GetEnv("TG_API_TOKEN")
  
  if tokenError != nil {
    panic(tokenError)
  }

  upConfigs := configs.DefaultUpdateConfigs()

  botConfigs := configs.BotConfigs{
    BotAPI: DefaultBotAPI,
    APIKey: apiToken, 
    UpdateConfigs: upConfigs,
    Webhook: false,
    LogFileAddress: configs.DefaultLogFile,
  }

  var err error

  myBot, err = bot.NewBot(&botConfigs)

  if err == nil {
    err = myBot.Run()

    if err == nil{
      start()
    } else {
      fmt.Println(err)
    }
  } else {
    fmt.Println(err)
  }
}

func start() {
  // Here we'll implement our bot's logic
}
```

Now, all we need to do to make the bot listen for updates and interact with clients is implement the bot's logic in the `start()` function.

Telego gives us two ways for handling received updates from the API server:

1. ***Handlers***: Handlers can be used for text messages and callbacks. To use them, you simply specify a RegEx pattern, chat types and a gunction. Every time that the bot receives a mesage matching the pattern in the Chat Type selected ,the function will be called with the update as a parameter. Chat types are defined as: "private", "group", "supergroup", "channel" and "all". 
2. ***Go channels***: With telego, we can register channels for speficic chats and update types. Tye Update Type is the "file" that is contained in an update.

Let's see both ways of handling updates in action.

### Handlers

To get updates from handlers we have to declare an updateChannel, which returns the channel which new updates received from api server are pushed into.
Let's create a simple `/hello` command that will respond with "Hello, world!" in a private chat.

```go
package main

import(
  ...
)

// Check on the above snippets for detailed configuration of the bot.

func main(){
  ...
}

func start() {
  updateChannel := myBot.GetUpdateChannel()

  // Creating our handler
  bot.AddHandler("/hello", func(update *objects.Update) {
    _, err := bot.SendMessage(update.Message.Chat.ID, "Hello, world!", "", update.Message.MessageId, false, false)
    if err != nil {
      fmt.Println(err)
    }
  }, "private")
}
```

When starting our bot with `go run main.go` and sending the `/hello` command, we'll see the bot respond with "Hello, world!".

### Channels

Now, let's register a channel to only receive message updates. We'll do this by creating a new channel and registering it with the bot.

```go
package main

import(
  ...
)

// Check on the above snippets for detailed configuration of the bot.

func main(){
  ...
}

func start() {
  // Registreing the messageChannel
  messageChannel, _ := bot.AdvancedMode().RegisterChannel("", "message")

  for {
    // Listening to updates
    update := <-*messageChannel

    // Now we can use the update to retrieve the text of the message the bot received from any chat.
    fmt.Println(update.Message.Text)

    // Let's build a similar "handler" to the one above.
    if update.Message.Text == "/hello" {
      _, err := bot.SendMessage(update.Message.Chat.ID, "Hello, world!", "", update.Message.MessageId, false, false)
    }
  }
}
```

With the code written above, we will print out in the console every text message that any user sends to any chat type and also respond to any message that has the `/hello` command written in it.

When creating a bot with multiple commands, I prefer using the `AddHandler()` method when creating new ones, since it is more flexible and easy to use.

This was a simple introduction to the telego library, which offers much features that are not covered in this article. To find out more about the library, please visit the [telego documentation](https://github.com/SakoDroid/telego).

## Preparing for deployment on Heroku

When our bot is ready, we can start thinking to deploy it to Heroku.

In this article I'm going to use the Heroku "web" implementation, which requires the "app" to listen to a speficic port, otherwise it will shut down after 60 seconds. To make sure that the bot is always running, I decided to implement a super simple web server that will listen to the port that Heroku asks to listen to. To do so, I used the [gin](https://github.com/gin-gonic/gin) library.

To install it, we'll need to install the `gin` dependency.

```go
go get github.com/gin-gonic/gin
```

Then, we can create a simple server at the bottom of our `main.go` file.

```go
package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"math/rand"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"time"

  bot "github.com/SakoDroid/telego"
  configs "github.com/SakoDroid/telego/configs"
  objects "github.com/SakoDroid/telego/objects"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
  ...
}

func start(){
  ...
}

var App *Services

var (
	ginConfig GinConfig
	router    *gin.Engine
)

type GinConfig struct {
	SERVER_NAME string
	SERVER_PORT string
	SERVER_ENV  string
}

func SetGinMode(mode string) {
	switch mode {
	case "release":
		gin.SetMode(gin.ReleaseMode)
	case "test":
		gin.SetMode(gin.TestMode)
	default:
		gin.SetMode(gin.DebugMode)
	}
}

type Services struct {
	R    *gin.Engine
	C    *GinConfig
	MODE string
}

func NewServices(R *gin.Engine, C *GinConfig, MODE string) *Services {
	return &Services{
		R:    R,
		C:    C,
		MODE: MODE,
	}
}

func (s *Services) GetServerMode() string {
	return s.MODE
}

func initGinServer() {
	ginConfig.SERVER_NAME = GetEnv("SERVER_NAME", "TG_BOT_PORT_SERVER")
  // The heroku env variable for the port is by default called "PORT".
	ginConfig.SERVER_PORT = os.Getenv("PORT")
	ginConfig.SERVER_ENV = GetEnv("SERVER_ENV", "release")

	SetGinMode(ginConfig.SERVER_ENV)
	router = SetupRouter()

	App = NewServices(router, &ginConfig, ginConfig.SERVER_ENV)

	log.Fatal(router.Run(":" + ginConfig.SERVER_PORT))
}

func SetupRouter() *gin.Engine {
	r := gin.Default()
	r.SetTrustedProxies(nil)

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	return r
}
```

Now, to use it together with the bot, we need to call the `initGinServer()` function in our `main` funcion to start the server. To make it run alongside with the bot I used the `go`keyword to start it in a separate goroutine.

```go
package main

import (
  ...
)

func main() {
  go initGinServer()
  ...
}

func start() {
  ...
}

// To see the gin server configurations check the above code snippets.
```


## Deploying the bot to Heroku

To deploy the bot to Heroku we'll use the default method of deploying a project from a GitHub repository.
To do so, we'll create a git repository and push it to GitHub (both private and public repositories are completely fine!).

```git
git init
git add .
git commit -am "Initial commit"
git branch -M master
git remote add origin git@github.com:<username>/<repository>.git
git push -u origin master
```

Once the repository is up on GitHub, we can go on and create a new Heroku app. To do so we can use the [heroku](https://heroku.com/) CLI or directly from the Heroku website. I'll use the Heroku Website, but will also link the Heroku documentation to the CLI.

To create a new heroku app, we can navigate to the [Heroku App dashboard](https://dashboard.heroku.com/apps) and click on the "New" button on the top right, and then create "Create a new app".

Then, we are promped to choose a name for the app and the server region for it.

![example](https://i.imgur.com/Zfq4GgL_d.webp?maxwidth=760&fidelity=grand)

Then, under the deploy section (where we get redirected once the app is created), we can choose to connect the app to a GitHub account. Once logged in, we can select the repository that we created earlier.

![example_2](https://i.imgur.com/IcFxwZL_d.webp?maxwidth=760&fidelity=grand)

To successfully deploy the app once connected to GitHub, we need to scroll down in the `Deploy` section, select the `master` branch if not already selected and click on the "Deploy Branch" button at the bottom.

![example_3](https://i.imgur.com/9XmUmdK_d.webp?maxwidth=760&fidelity=grand)

Now our bot is up and running on Heroku, and we can start sending messages (and our `/hello` command) to it!



### Telego git repository

[https://github.com/SakoDroid/telego](https://github.com/SakoDroid/telego)

### Heroku CLI Documentation

[https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)