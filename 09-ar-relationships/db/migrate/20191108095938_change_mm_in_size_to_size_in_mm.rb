class ChangeMmInSizeToSizeInMm < ActiveRecord::Migration[5.2]
  def change
    rename_column :bed_bugs, :mm_in_size, :size_in_mm
  end
end
