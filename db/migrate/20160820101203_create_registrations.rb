class CreateRegistrations < ActiveRecord::Migration
  def change
    create_table :registrations do |t|
      t.string :full_name_person_send
      t.string :phone_person_send
      t.string :email
      t.string :full_name_person_receive
      t.text :message
      t.text :address
      t.string :phone_person_receive
      t.boolean :already_sent, default: false

      t.timestamps null: false
    end
  end
end
