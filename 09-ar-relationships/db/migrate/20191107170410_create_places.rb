class CreatePlaces < ActiveRecord::Migration[5.2]
  def change
    create_table :places do |t|
      t.string :address
      t.integer :num_beds
      t.boolean :available
    end
  end
end
