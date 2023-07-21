class UserController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find_by(params[:id])
    if @user.exists?
      render status: 200, json: { user: @user }
    else
      render status: 400, json: { message: 'user not found' }
    end
  end

  def show_image
    @user = User.find_by(params[:id])
    if @user.image.attached?
      render status: 200,
             json: { url: Rails.application.routes.url_helpers.rails_blob_path(@user.image, only_path: true) }
    else
      render status: 400, json: { message: 'url not found' }
    end
  end

  def create
    @user = User.new(user_params)
    @user.image.attach(params[:image])

    if @user.save
      render status: 200, json: { user: @user }
    else
      render status: 400, json: { message: @user.error.details }
    end
  end

  def login
    @user = User.find_by(user_params)
    if @user.present?
      render status: 200, json: { user: @user }
    else
      render status: 400, json: { message: 'user not found' }
    end
  end

  private

  def user_params
    params.permit(:username, :password)
  end
end
