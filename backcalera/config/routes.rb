Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :user do
    collection do
      post :login
    end
    member do
      get :show_image
    end
  end
  resources :board do
    member do
      post :startdeck
      post :deal_cards
    end
  end
end