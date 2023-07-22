class Board < ApplicationRecord
  enum status: { waiting_for_players: 1, waiting_for_bets: 2,  waiting_for_cards: 3, game_over:4 }
  # has_many :cards, class_name: 'card', foreign_key: 'reference_id'
  has_many :boardusers

  def place_bets (user , bet) 
    player = self.boardusers.find_by(user: user)
    player.bet = bet
    player.save
    check_bets
  end

  def check_bets
    is_ready = true
    for player in self.boardusers do
      if player.bet == nil
          is_ready = false
      end
    end

    if is_ready
      self.status = 3
    end
    self.save
  end


  def start_game
    self.status = 3
    deal_cards
  end
  
  def join_player (user)
    player = Boarduser.new(user:user)
    self.boardusers.push(player)
  end
  
  def deal_cards
    a = JSON.parse deck
    a.shuffle!

    for player in self.boardusers do
      cards = a.last(5)
      a.rotate!(5)
      player.cards = cards
      player.save
    end
  end

  def get_cards_dealed (user)
    player = self.boardusers.find_by(user: user)
    return player.cards
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
