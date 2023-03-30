Rails.application.routes.draw do
  get 'static/home'
  get 'turbo', to: "static#turbo", as: 'turbo_stream_demo'
  get 'react', to: "static#react", as: 'react_demo'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "static#home"
end
