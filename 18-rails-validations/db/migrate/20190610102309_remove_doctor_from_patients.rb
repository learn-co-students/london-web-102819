class RemoveDoctorFromPatients < ActiveRecord::Migration[5.2]
  def change
    remove_reference :patients, :doctor, foreign_key: true
  end
end
