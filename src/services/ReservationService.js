const reservations = [
  {
    reservationNumber: 432167542387654,
    checkIn: '2017-01-04',
    checkOut: '2017-01-06',
    hotel: 101,
    status: 'COMPLETED'
  },
  {
    reservationNumber: 967524235687295,
    checkIn: '2018-09-20',
    checkOut: '2018-09-25',
    hotel: 102,
    status: 'UPCOMING'
  },
  {
    reservationNumber: 322324489872985,
    checkIn: '2018-11-29',
    checkOut: '2018-11-30',
    hotel: 103,
    status: 'UPCOMING'
  },
];

module.exports = {
  getReservations: function (userId) {
    return reservations;
  }
};
