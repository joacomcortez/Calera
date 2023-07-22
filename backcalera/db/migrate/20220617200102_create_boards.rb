class CreateBoards < ActiveRecord::Migration[7.0]
  def change
    create_table :boards do |t|
      t.integer :status, default: 1
      t.string :deck,
               default: '["1-oro","1-copa","1-espada","1-basto","2-oro","2-copa","2-espada","2-basto","3-oro","3-copa","3-espada","3-basto","4-oro","4-copa","4-espada","4-basto","5-oro","5-copa","5-espada","5-basto","6-oro","6-copa","6-espada","6-basto","7-oro","7-copa","7-espada","7-basto","8-oro","8-copa","8-espada","8-basto","9-oro","9-copa","9-espada","9-basto","10-oro","10-copa","10-espada","10-basto","11-oro","11-copa","11-espada","11-basto","12-oro","12-copa","12-espada","12-basto"]'
      t.boolean :direction, default: true

      t.timestamps
    end
  end
end
