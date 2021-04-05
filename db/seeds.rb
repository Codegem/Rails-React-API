require 'rest-client'

rm = RestClient.get 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json'

rm_array = JSON.parse(rm)['Results']

rm_array.each do |car|
    Car.create(
    country: car["Country"],
    commonname: car["Mfr_CommonName"],
    name: car["Mfr_Name"],
    )
end

    Favorite.create(
        Car_id: 2,
        name: "Tesla"
    )