class CreateBoardusers < ActiveRecord::Migration[7.0]
  def change
    create_table :boardusers do |t|
      t.belongs_to :user
      t.belongs_to :board
      t.text :cards
      t.text :card_played
      t.integer :bet
      t.integer :current_wins
      t.integer :score

      t.timestamps
    end
  end
end
