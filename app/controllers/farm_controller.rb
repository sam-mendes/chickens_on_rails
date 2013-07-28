class FarmController < ApplicationController
	def index
		
	end

	def dashboard
		@chickens = Chicken.all.includes(:eggs)
		render json: @chickens.to_json(include: :eggs)
	end
end