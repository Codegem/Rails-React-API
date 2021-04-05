class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.string :country
      t.string :commonname
      t.string :name

      t.timestamps
    end
  end
end
