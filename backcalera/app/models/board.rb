class Board < ApplicationRecord
  has_many :cards, class_name: 'card', foreign_key: 'reference_id'
  has_many :Boarduser

  def start_game
    deal_cards
    # play
    # delete arrays
    # mark
    # deal_cards
  end

  def deal_cards
    a = JSON.parse deck
    a.shuffle!
    arrayuser1 = JSON.parse user1
    arrayuser2 = JSON.parse user2
    arrayuser3 = JSON.parse user3
    arrayuser4 = JSON.parse user4
    for i in 1..round do
      arrayuser1.push(a[i])
    end
    for i in (round + 1)..(2 * round) do
      arrayuser2.push(a[i])
    end
    for i in (2 * round + 1)..(3 * round) do
      arrayuser3.push(a[i])
    end
    for i in (3 * round + 1)..(4 * round) do
      arrayuser4.push(a[i])
    end
    self.user1 = arrayuser1.to_json
    self.user2 = arrayuser2.to_json
    self.user3 = arrayuser3.to_json
    self.user4 = arrayuser4.to_json

    # self.round += 1
  end

  def play
    # tengo el arreglo
  end

  def delete_previous_hand
    self.user1 = '[]'
    self.user2 = '[]'
    self.user3 = '[]'
    self.user4 = '[]'
    self.direction = !direction if round == 5 || round == 1
    self.round = round + 1 if direction == true
    self.round = round - 1 if direction == false
  end

  private

  def board_params
    params.permit(:user1, :user2, :user3, :user4, :deck)
  end
end
