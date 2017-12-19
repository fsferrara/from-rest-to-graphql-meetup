const reservationServiceClient = require('../services/ReservationService');

module.exports = {
  QueryType: {
    reservations: (context, data) => (function(context, data) {
      console.log("[ReservationService] getting reservations list for the user id: " + data.userId);
      return reservationServiceClient.getReservations(data.userId);
    })(context, data),
  }
};
