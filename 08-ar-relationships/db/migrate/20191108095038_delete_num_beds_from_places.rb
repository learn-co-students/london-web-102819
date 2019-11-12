class DeleteNumBedsFromPlaces < ActiveRecord::Migration[5.2]
  def change
    remove_column :places, :num_beds, :integer

  end
end
