class Users::RegistrationsController < Devise::RegistrationsController
  #Extend default devise gem behavior so that users signing up with the pro
  #Account has plan id 2 so that those users save with a special stripe
  #subscription function.
  #Otherwise devise signs up users as usual.
  def create
    super do |resource|
      if params[:plan]
        resource.plan_id = params[:plan]
        if resource.plan_id == 2
          resource.save_with_subscription
        else
          resource.save
        end
      end
    end
  end
end