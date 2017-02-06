Rails.application.routes.draw do
  root to: 'application#home'

  devise_for :users, controllers: {
    confirmations: 'users/confirmations',
    passwords: 'users/passwords',
    registrations: 'users/registrations',
    sessions: 'users/sessions',
    #unlocks: 'users/unlocks',
    #omniauth_callbacks: 'users/omniauth_callbacks',
  }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
