# Real-Time-Chat
Real-time bidirectional event-based chat application (Socket.io, Node).
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="59" height="20" role="img" aria-label="socket.io"><title>socket.io</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="59" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="0" height="20" fill="#007ec6"/><rect x="0" width="59" height="20" fill="#007ec6"/><rect width="59" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="295" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="490">socket.io</text><text x="295" y="140" transform="scale(.1)" fill="#fff" textLength="490">socket.io</text></g></svg>

## A basic chat application
Whenever you write a chat message, the idea is that the server will get it and push it to all other connected clients.

## Setup

1. Clone this repo
```sh
git clone https://github.com/wingemo/Real-Time-Chat.git
```

2. Change dictionary
```sh
cd Real-Time-Chat
```

3. Run the following to install the dependencies
```sh
npm install
```

4. Start the server 
```sh
npm run dev
```
