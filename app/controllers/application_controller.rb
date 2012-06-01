class ApplicationController < ActionController::Base
  protect_from_forgery

  before_filter :check_url

  def check_url
  puts request.host
    redirect_to request.protocol + "www." + request.host_with_port + request.fullpath if !/^www/.match(request.host)
  end
end
