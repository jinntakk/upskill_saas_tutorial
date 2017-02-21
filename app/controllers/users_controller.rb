class UsersController < ApplicationController
  before_action :authenticate_user!
  
  def index
    
  end
  
  # GET to /users/:id
  def show
   @User = User.find( params[:id] )
  end
end