const reservationsResolver = require('./ReservationsResolver');

module.exports = {
  QueryType: {
    reservationsList: (_, data) => reservationsResolver.getReservations(_, data),
  }
};
