ChickensOnRails::Application.routes.draw do
  root to: "farm#index"

  get "/farm/chickens/:id/edit" => "chickens#edit", as: "edit_chicken"
  get "/farm/chickens/new" => "chickens#new", as: "new_chicken"
  post "/farm/chickens" => "chickens#create"
  patch "/farm/chickens/:id" => "chickens#update", as: "update_chicken"
  delete "/farm/chickens/:id" => "chickens#destroy", as: "destroy_chicken"

  get "/farm/chickens" => "chickens#index", as: "chickens"
  get "/farm/chickens/custom-list" => "chickens#custom_list", as: "custom_chickens"

  get "/farm/chickens/:chicken_id/eggs/new" => "eggs#new", as: "new_egg"
  post "/farm/chickens/:chicken_id/eggs" => "eggs#create", as: "eggs"
  get "/farm/chickens/:chicken_id/eggs" => "eggs#list", as: "egg_list"
  put "/farm/chickens/:chicken_id/eggs/:id" => "eggs#update", as: "update_egg"
  delete "/farm/chickens/:chicken_id/eggs/:id" => "eggs#destroy", as: "destroy_egg"

  get "/farm/dashboard" => "farm#dashboard", as: "farm_dashboard"
end
