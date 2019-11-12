class Place < ActiveRecord::Base
  has_many :beds

  def num_beds
    self.beds.size
  end

  def total_infestations
    self.beds.map {|bed| bed.infestations.size}.sum
  end

  def average_infestation_size
    total_infestations / num_beds
  end
end