Rails.application.routes.draw do
  get 'static/home'
  get 'slow', to: 'static#slow_streaming'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "static#home"
end
