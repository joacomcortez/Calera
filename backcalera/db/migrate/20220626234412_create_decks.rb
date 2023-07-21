class CreateDecks < ActiveRecord::Migration[7.0]
  def change
    create_table :decks do |t|
      t.string :carddeck,
               default: '[1 Or,1 Co,1 Es,1 Ba,2 Or,2 Co,2 Es,2 Ba,3 Or,3 Co,3 Es,3 Ba,4 Or,4 Co,4 Es,4 Ba,5 Or,5 Co,5 Es,5 Ba,6 Or,6 Co,6 Es,6 Ba,7 Or,7 Co,7 Es,7 Ba,8 Or,8 Co,8 Es,8 Ba,9 Or,9 Co,9 Es,9 Ba,10 Or,10 Co,10 Es,10 Ba,11 Or,11 Co,11 Es,11 Ba,12 Or,12 Co,12 Es,12 Ba]'
      t.timestamps
    end
  end
end
