This is a very simple Angular application with Json-Server implemented.

You can add to the list, edit and delete it.

To lauch this application install JSON Server.

$ npm install -g json-server

Create a db.json file 
{
  "lists": [
    {
      "name": "Hello World",
      "id": 1
    },
    {
      "id": 2,
      "name": "Good Morning"
    },
    {
      "id": 3,
      "name": "I am hungry"
    }
  ]
}

start server
$ json-server --watch db.json