Rails.application.routes.draw do
  root to: 'cars#index'
  get '/favorites', to: 'favorites#update'
  post '/favorites', to: 'favorites#create'

      resources :cars do
        resources :favorites
      end

end
