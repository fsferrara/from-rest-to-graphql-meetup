const reservations = [
  {
    hotelId: 101,
    checkIn: '2017-01-04',
    checkOut: '2017-01-06',
    status: 'COMPLETED'
  },
  {
    hotelId: 102,
    checkIn: '2018-09-20',
    checkOut: '2018-09-25',
    status: 'UPCOMING'
  },
  {
    hotelId: 103,
    checkIn: '2018-11-29',
    checkOut: '2018-11-30',
    status: 'UPCOMING'
  },
];

module.exports = {
  getReservations: function (userId) {
    return reservations;
  }
};
