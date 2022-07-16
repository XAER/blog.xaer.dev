---
title: 'Creating a Telegram Bot using GoLang'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/dynamic-routing/cover.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: XAERdev
  picture: '/assets/blog/authors/xaer.png'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
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
Now we can safely start using our API Token withour worries, so we can create the bot configs and create our new bot

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
}
```