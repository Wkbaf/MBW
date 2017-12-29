Rails.application.routes.draw do
	resources :homepage
	root to: 'homepage#index', as: 'unauthenticated_root'
end
