class Board < ApplicationRecord
  enum status: { waiting_for_players: 1, waiting_for_bets: 2, waiting_for_cards: 3, game_over: 4 }
  # has_many :cards, class_name: 'card', foreign_key: 'reference_id'
  has_many :boardusers

  def place_bets(user, bet)
    player = boardusers.find_by(user:)
    player.bet = bet
    player.save
    check_bets
  end

  def check_bets
    is_ready = true
    for player in boardusers do
      is_ready = false if player.bet.nil?
    end

    self.status = 3 if is_ready

    save
  end

  def finish_round
    for player in boardusers do
      player.cards = nil
      player.bet = nil
      player.card_played = nil
      player.save
    end
  end

  def start_game
    self.status = 3
    deal_cards
  end

  def join_player(user)
    return if boardusers.any? { |player| player.user_id == user.id }

    player = Boarduser.new(user:)
    boardusers.push(player)
  end

  def deal_cards
    a = JSON.parse deck
    a.shuffle!

    for player in boardusers do
      cards = a.last(5)
      a.rotate!(5)
      player.cards = cards
      player.save
    end
  end

  def cards_dealed(user)
    player = boardusers.find_by(user:)
    player.cards
  end

  def play_card(user, i)
    player = boardusers.find_by(user:)
    player.cards = JSON.parse player.cards
    player.card_played = player.cards[i]
    a = JSON.parse player.cards
    a.delete(i)
    player.cards = a.to_json
    player.save
  end
end
