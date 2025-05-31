class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  before_action :authenticate_user!
  before_action :set_application_pack

  private

  def set_application_pack
    @application_pack = if !request.path.include?('sign_in')
                         'entrypoints/dashboard'
                       end
  end
end
