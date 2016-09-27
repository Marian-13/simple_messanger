class ChatController < ApplicationController
  def index

  end

  def new
    @user = User.new
  end

  def search
    # If chat/search reloaded
    unless params[:sought_user]
      redirect_to chat_new_path
      # TODO Find out why redirect_to doesn't exit from action by itself?
      return
    end

    @user = if params[:sought_user][:filter] == 'name'
              User.find_by_name(params[:search])
            elsif params[:sought_user][:filter] == 'email'
              User.find_by_email(params[:search])
            end

    # TODO more clever channels TODO remove proxy !!!!!!!!!!!!!!!!!!!!!!!!!!!
    session[:receiver_channel] = "/#{@user.name}"

    if @user
      render 'user_found'
    else
      render 'user_not_found'
    end
  end

  def proxy

  end
end
