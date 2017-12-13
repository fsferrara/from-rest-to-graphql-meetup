const reservationsResolver = require('./ReservationsResolver');
const hotelResolver = require('./HotelResolver');

module.exports = {
  QueryType: {
    reservationsList: (_, data) => reservationsResolver.getReservations(_, data),
  },
  ReservationType: {
    hotelDetails: (_, data) => hotelResolver.getHotel(_, data),
  },
};
