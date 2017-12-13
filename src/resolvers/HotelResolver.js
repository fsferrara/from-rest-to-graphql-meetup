const hotelService = require('../services/HotelService');

module.exports = {
  getHotel: function(_, data) {
    console.log("[HotelResolver] getting details for hotel id: " + _.hotelId);
    return hotelService.getHotel(_.hotelId);
  }
};
