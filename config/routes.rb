ChickensOnRails::Application.routes.draw do
  root to: "farm#index"

  get "/farm/chickens/:id/edit" => "chickens#edit", as: "edit_chicken"
  post "/farm/chickens" => "chickens#create"
  put "/farm/chickens/:id" => "chickens#update"
  delete "/farm/chickens/:id" => "chickens#destroy", as: "destroy_chicken"

  get "/farm/chickens" => "chickens#index", as: "chickens"
  get "/farm/chickens/custom-list" => "chickens#custom_list", as: "custom_chickens"
end
