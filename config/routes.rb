Rails.application.routes.draw do
  root to: 'dashboard#index'

  devise_for :users, only: [:sessions], controllers: {
    sessions: 'sessions/sessions'  
  }

  # Global action pages
  get 'focus-hall', to: 'dashboard#index'

  scope :tools do
    get 'todoer', to: 'dashboard#index'
    get 'todoer/todo', to: 'dashboard#index'
    get 'todoer/upcoming', to: 'dashboard#index'
    get 'todoer/done', to: 'dashboard#index'
  end

  namespace :api, defaults: { format: 'json' } do
    namespace :v1 do
      resources :users, only: [:show, :update] do
        scope module: :users do
          resources :focus_records
        end
      end
    end
  end

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"
end
