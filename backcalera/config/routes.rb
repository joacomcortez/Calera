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
      post :start_game
      post :deal_cards
      post :play_card
      post :join
      get :cards_dealed
      post :place_bet
      post :check_round
      post :finish_round
    end
  end
end
