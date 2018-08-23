class Registration < ActiveRecord::Base
  validates :full_name_person_send, presence: true
  validates :phone_person_send, presence: true, length: {maximum: 16}
  validates :email, presence: true, format: { with: EMAIL_FORMAT, message: I18n.t("email_validator") }
  validates :full_name_person_receive, presence: true
  validates :address, presence: true
  validates :dream, presence: true
  validates :message, presence: true
  validates :phone_person_receive, presence: true, length: {maximum: 16}
end
