class CreateFavoriteCars < ActiveRecord::Migration[6.1]
  def change
    create_table :favorite_cars do |t|
      t.references :cars, foreign_key: true

      t.timestamps
    end
  end
end
