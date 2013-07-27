class CreateEggs < ActiveRecord::Migration
  def change
    create_table :eggs do |t|
      t.integer :quantity
      t.references :chicken, index: true

      t.timestamps
    end
  end
end
