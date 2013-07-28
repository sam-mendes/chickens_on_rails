class Chicken < ActiveRecord::Base
	validates_presence_of :name, :description
	has_many :eggs, dependent: :destroy

end
