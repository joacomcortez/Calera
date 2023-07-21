class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.text :rank, default: '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]'
      t.text :suit, default: '[Oro, Copa, Espada, Basto]'
      t.timestamps
    end
  end
end
