class AddDreamToRegistration < ActiveRecord::Migration
  def change
    add_column :registrations, :dream, :string
  end
end
