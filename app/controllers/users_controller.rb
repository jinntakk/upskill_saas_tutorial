class UsersController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @Users = User.includes(:profile)
  end
  
  # GET to /users/:id
  def show
   @User = User.find( params[:id] )
  end
end