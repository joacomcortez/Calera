class CreateBoardusers < ActiveRecord::Migration[7.0]
  def change
    create_table :boardusers do |t|

      t.timestamps
    end
  end
end
