# From REST to GraphQL - Meetup
url: https://www.meetup.com/Rome-Software-Discussion/events/245282496/

## Nodejs Example - Getting Started With GraphQL

How to GraphQL with graphql.js

### The data model and the GraphQL Schema Definition

Data model:

````
+--------------------------------------+         +----------------------------+         +---------------------+
| QueryType                            |         | ReservationType            |         | HotelType           |
+--------------------------------------+         +----------------------------+         +---------------------+
|                                      |         |                            |         |                     |
| reservationList: [ReservationType!]! +-------> | hotelId: ID!               |         | hotelName: String!  |
|                                      |         | checkIn: String!           |         | fullAddress: String |
+--------------------------------------+         | checkOut: String!          |         | starRating: Int!    |
                                                 | hotelDetails: HotelType!   +-------> |                     |
                                                 | status: ReservationStatus! |         +---------------------+
                                                 |                            |
                                                 +----------------------------+
````

Read the GraphQL schema definition.

### Starting the server

Read the source code, and then start the server:

````
node ./src/index.js
````

### First query

Run the first query:

````
curl -X POST \
  http://localhost:3000/graphql \
  -H 'content-type: application/json' \
  -d '{"query": "query QueryType {reservationsList(userId:12345){hotelId,checkIn,checkOut,status}}"}' \
  | jq "."
````

### Introspection query

Introspection feature:

````
curl -X POST \
  http://localhost:3000/graphql \
  -H 'content-type: application/json' \
  -d '{"query": "query QueryType {__schema{types{name,description}}}"}' \
  | jq "."
````

Implement and start GraphiQL.

### Most complex example

Introduce an additional resolver.
