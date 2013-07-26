class ChickensController < ApplicationController
	def index
		
	end

	def custom_list
		@chickens = Chicken.all
	end

	def create
		@chicken = Chicken.create(chicken_params)
	end

	private
	def chicken_params
		params
			.require(:chicken).permit :name, :description
	end
end