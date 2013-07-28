class ChickensController < ApplicationController
	def index
		@chickens = Chicken.all
	end

	def custom_list
		@chickens = Chicken.all.includes(:eggs)
		render json: @chickens.to_json(include: :eggs)
	end

	def new
	end

	def create
		@chicken = Chicken.create(chicken_params)
	end

	def destroy
		@chicken = Chicken.destroy(params[:id])
	end

	def edit
		@chicken = Chicken.find_by(id: params[:id])
	end

	def update
		@chicken = Chicken.find_by(id: params[:id])
		@chicken.update_attributes(chicken_params);
	end

	private
	def chicken_params
		params
			.require(:chicken).permit :name, :description
	end
end