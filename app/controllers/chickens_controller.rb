class ChickensController < ApplicationController
	def index
		@chickens = Chicken.all
	end

	def create
		@chicken = Chicken.create(chicken_params)
	end

	def destroy
		@chicken = Chicken.destroy(params[:id])
	end
	private
	def chicken_params
		params
			.require(:chicken).permit :name, :description
	end
end