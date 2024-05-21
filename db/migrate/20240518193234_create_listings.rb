class CreateListings < ActiveRecord::Migration[7.1]
  def change
    create_table :listings do |t|
      t.string :addres
      t.string :description
      t.string :image_url

      t.timestamps
    end
  end
end
