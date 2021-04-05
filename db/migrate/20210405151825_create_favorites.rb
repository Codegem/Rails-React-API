class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.references :car, null: false, foreign_key: true
      t.string :name

      t.timestamps
    end
  end
end
