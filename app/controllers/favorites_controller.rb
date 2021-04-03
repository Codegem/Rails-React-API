class FavoritesController < ApplicationController
  def create

    # def = model.where(column and params)
    carpar = params[@car.id]
    # favorite_cars = FavoriteCar.where(cars_id: Car.find(carpar))
    
    # # check if something is in favorites
    # if favorite_cars == []
    #   #model.create(column) value)
      FavoriteCar.create(cars_id: carpar)
    #   @favorite_exists = true
    # else
    #   favorite_cars.destroy_all
    #   @favorite_exists = false
    # end

    # respond_to do |format|
    #   format.html {}
    #   format.js {}
    # end
  end
end
