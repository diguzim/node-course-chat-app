# About

This is a simple chat application that uses [socket.io](https://www.npmjs.com/package/socket.io) to do the broadcasting of the messages to the proper room and [mustache](https://www.npmjs.com/package/mustache) to do the templating.

You can see the project running on production environment by clicking [here](https://diguzim-chat-app.herokuapp.com/)

# Installation

## Pre requisites
* Have [node](https://nodejs.org/en/) installed

## Steps to run locally
In order to run this code, you have to
1. Clone this repo
2. Navigate to the folder
3. Run **npm install** to install the project dependencies
4. Run **npm run dev**
5. Access **localhost:3000** in your browser to see the chat app up and running

# Usage

## Joining a room
When you open the portal, you will see a screen asking for you to select a **name** and a **room** to join.
You can use the same name in different rooms, but in the same room only one person with the same name is allowed. Both the name and the room are case unsensitive.

## Sending messages
When you are on a room, you will be able to see the messages the users are sending in the chat.

## Sharing location
Also in a room you will be able to share your location and see other people's shared location. This will produce a google maps link.

## See persons in the room you are
You can see in the left portion of the screen a panel with the names of the people who are also in this channel.

## No bad words are allowed
As we are moralist we don't allow offensive words (joking, I'm not moralist, but the course that produced this did so and I think it was funny to leave it in that way).
> Offesive language in other languages rather than english are allowed.