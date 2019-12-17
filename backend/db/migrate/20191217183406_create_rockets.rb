class CreateRockets < ActiveRecord::Migration[6.0]
  def change
    create_table :rockets do |t|
      t.integer :launch_year
      t.string :rocket_name
      t.string :nationality
      t.boolean :launch_success
      t.text :article_link
      t.text :video_link
      t.text :flickr_images
      t.text :details
      t.boolean :favorite

      t.timestamps
    end
  end
end
