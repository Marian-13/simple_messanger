class SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_email(params[:email])
    # If the user exists AND the password entered is correct.
    if @user && @user.authenticate(params[:password])
      # Save the user id inside the browser cookie. This is how we keep the user
      # logged in when they navigate around our website.
      session[:user_id] = @user.id
      # TODO more clever channel
      session[:sender_channel] = "/#{@user.name}"
      redirect_to chat_path
    else
    # If user's login doesn't work, send them back to the login form.
      flash[:notice] = 'Incorrect e-mail or password or all together.'
      flash[:email] = @user.email if @user
      redirect_to home_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to home_path
  end
end
