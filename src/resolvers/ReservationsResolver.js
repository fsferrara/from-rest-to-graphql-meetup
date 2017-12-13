const reservationService = require('../services/ReservationService');

module.exports = {
  getReservations: function(_, data) {
    console.log("[ReservationResolver] getting reservations list for the user id: " + data.userId);
    return reservationService.getReservations(data.userId);
  }
};
