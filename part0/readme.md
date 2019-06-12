## Create new note
On [this page](https://fullstack-exampleapp.herokuapp.com/notes)

browser->server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note

note over browser:
browser posts to /new_note
server redirects
browser does a new HTTP get request to /notes and reloads the page
end note

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes
server->browser: HTML-code
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server-->browser: main.css
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
server-->browser: main.js

note over browser:
browser executes js-code and requests JSON data from server
end note

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler that renders the new notes to display

## Single Page App
On [this page](https://fullstack-exampleapp.herokuapp.com/spa)

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa
server->browser: HTML-code
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server-->browser: main.css
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa.js
server-->browser: main.js

note over browser:
browser executes js-code and fetches the json data

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note

## Single Page App - new note
On [this page](https://fullstack-exampleapp.herokuapp.com/spa)

browser->server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note_spa

note over browser:
browser sends new note as json data with content and timestamp
content-type header tells server it's in json format

server->browser: status 201 created

note over server:
server doesn't ask for a redirect
list is rendered by JS-code that was already fetched
