class HomeController < ApplicationController
  def index
    redirect_to chat_path if session[:user_id]
  end
end
