class RegistrationsController < ApplicationController
  def create
    regis = Registration.new(get_params.merge(get_dream))
    if regis.save
      flash[:notice] = I18n.t("homes.registration.successfully")
      UserMailer.welcome_email(regis).deliver_later
      redirect_to root_path
    end

  end
  private
  def get_params
    params.permit(:full_name_person_send, :phone_person_send, :email, :full_name_person_receive, :message, :address, :phone_person_receive)
  end
  def get_dream
    params.require(:reg).permit(:dream)
  end
end
