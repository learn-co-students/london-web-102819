class Infestation < ActiveRecord::Base
  belongs_to :bed
  belongs_to :bed_bug
end