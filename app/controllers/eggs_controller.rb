class EggsController < ApplicationController
	def new
		@egg = Egg.new(chicken_id: params[:chicken_id])
	end

	def create
		@egg = Egg.create(chicken_id: params[:chicken_id], name: params[:egg][:name])
	end

	def list
		@eggs = Egg.where(chicken_id: params[:chicken_id])
	end

	def update
		@egg = Egg.find_by(id: params[:egg_id], chicken_id: params[:chicken_id])
		@egg.update_attributes name: params[:egg_name]

		render json: @egg.to_json
	end

	def destroy
		@egg = Egg.destroy(params[:egg_id])

		render json: @egg.to_json
	end
end