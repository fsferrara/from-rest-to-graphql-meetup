# From REST to GraphQL - Meetup
This is a GraphQL example for the [GraphQL meetup in Rome](https://www.meetup.com/Rome-Software-Discussion/events/245282496/).
We are going to use the [reference implementation of GraphQL for JavaScript](https://github.com/graphql/graphql-js).

To start the tutorial:
* clone this repository
* `git checkout 1.0.1`

## Data model

This is the *data model* we would like to define:

````
+---------------------------------+         +----------------------------+         +---------------------+
| QueryType                       |         | ReservationType            |         | HotelType           |
+---------------------------------+         +----------------------------+         +---------------------+
|                                 |         |                            |         |                     |
| reservation: [ReservationType]! +-------> | reservationNumber: ID!     |         | hotelName: String!  |
|                                 |         | checkIn: String!           |         | fullAddress: String |
+---------------------------------+         | checkOut: String!          |         | starRating: Int!    |
                                            | hotel: HotelType!          +-------> |                     |
                                            | status: ReservationStatus! |         +---------------------+
                                            |                            |
                                            +----------------------------+
````

## GraphQL Schema Definition

Using the GraphQL SDL (i.e. schema definition language), the data model can be described in this way:
* [src/schema/reservations.graphqls](src/schema/reservations.graphqls)

## Resolvers

Resolvers definition:
* [src/schema/resolvers.js](src/schema/resolvers.js)

## Executable schema

Loading the executable schema:
* [src/schema/resolvers.js](src/schema/resolvers.js)

## Starting the server

This is the recipe:
* [src/index.js](src/index.js)

...and then start the server with `node ./src/index.js`

## Our first query

Try the [first query](http://localhost:3000/graphql?query={reservations(userId:4115){reservationNumber,checkIn,checkOut}}).

## Introspection query

Try the GraphQL *introspection feature* with the [introspection query](http://localhost:3000/graphql?query={__schema{types{name,description}}}).
This feature leads to really nice features like:
* Auto documentation: the client knows the exact GraphQL schema.
* Code generation: the client can use a client generated from the schema.
* Static validation: the GraphQL client can validate the query before sending it to the server

## GraphiQL

GraphiQL is a *Schema Explorer* that use the GraphQL introspection feature.

* `git checkout 1.0.2`

## More complex example

Introduce an additional resolver:
* `git checkout 1.0.3`
