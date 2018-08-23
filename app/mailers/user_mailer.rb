class UserMailer < ApplicationMailer
  default from: 'Yola'
  def welcome_email(regis)
    @regis = regis
    mail(to: @regis.email, subject: I18n.t("user_mailer.welcome_email.title_success"), from: "Yola <#{ENV['default_form_mailer']}>")
  end
end
