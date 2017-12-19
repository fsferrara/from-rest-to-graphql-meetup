const reservationServiceClient = require('../services/ReservationService');
const hotelServiceClient = require('../services/HotelService');

module.exports = {
  QueryType: {
    reservations: (context, data) => (function(context, data) {
      console.log("[ReservationService] getting reservations list for the user id: " + data.userId);
      return reservationServiceClient.getReservations(data.userId);
    })(context, data),
  },
  ReservationType: {
    hotel: (context, data) => (function(context, data) {
      console.log("[HotelService] getting details for hotel id: " + context.hotel);
      return hotelServiceClient.getHotel(context.hotel);
    })(context, data),
  },
};
