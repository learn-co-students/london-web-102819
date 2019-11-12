class CreateBedsAndBedbugsAndInfestations < ActiveRecord::Migration[5.2]
  def change
    create_table :beds do |t|
      t.string :sheet_colour
      t.integer :place_id
    end

    create_table :bed_bugs do |t|
      t.string :name
      t.integer :mm_in_size
    end

    create_table :infestations do |t|
      t.integer :bed_id
      t.integer :bed_bug_id
    end
  end
end
