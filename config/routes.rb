Rails.application.routes.draw do

  devise_for :users, skip: [:registrations]
  as :user do
    get 'users/edit' => 'devise/registrations#edit', :as => 'edit_user_registration'
    put 'users' => 'devise/registrations#update', :as => 'user_registration'
    post 'signup' => 'devise/registrations#create', :as => :registration
  end
  root 'homes#index'
  resources :registrations, only: [:create]
  resources :admin do
    collection do
      get 'update_sent/:id&:value', to: "admin#update_sent", as: "update_sent"
    end
  end
end
