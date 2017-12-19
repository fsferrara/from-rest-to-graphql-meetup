const hotels = [];

hotels[101] = {
  hotelName: "Point A Hotel London Kings Cross – St Pancras",
  fullAddress: "324 Gray's Inn Road, London, England, WC1X 8BU, United Kingdom",
  starRating: 4
};

hotels[102] = {
  hotelName: "Caribbean Club Luxury Condo Hotel",
  starRating: 3
};

hotels[103] = {
  hotelName: "Hotel Campanile Metz Nord - Talange",
  fullAddress: "Zone Actipole, Talange, Moselle, 57525, France",
  starRating: 5
};

module.exports = {
  getHotel: function (hotelId) {
    return hotels[hotelId];
  }
};
