class AdminController < ApplicationController
  http_basic_authenticate_with name: ENV['basic_authentication_username'], password: ENV['basic_authentication_passwd']
  before_action :authenticate_user!
  def index
    @regs = Registration.all.order('created_at DESC').page(params[:page])
  end

  def update_sent
    id = params[:id]
    value = params[:value]
    reg = Registration.find(id)
    if value == "true"
      reg.update_attributes(already_sent: false)
      flash[:notice] = I18n.t("admin.index.success_false")
    else
      reg.update_attributes(already_sent: true)
      flash[:notice] = I18n.t("admin.index.success_true")
    end
    reg.save
    redirect_to admin_index_path
  end
end
