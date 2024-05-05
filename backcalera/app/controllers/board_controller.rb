class BoardController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @boards = Board.all
    render json: @boards
  end

  def show
    @board = Board.find(params[:id])
    if @board.present?
      render status: 200, json: { board: @board.as_json(include: { boardusers: { include: :user } }) }
    else
      render status: 400, json: { message: 'board not found' }
    end
  end

  def create
    @board = Board.new
    @user = User.find_by(params[:user_id])
    @board.join_player(@user)
    if @board.save
      render status: 200, json: { board: @board }
    else
      render status: 400, json: { message: @board.error.details }
    end
  end

  def join
    @board = Board.find(params[:id])
    @user = User.find(params[:user_id])
    @board.join_player(@user)
    if @board.save
      # board.as_json(include: { boardusers: { include: :user } })

      render status: 200, json: { board: @board.as_json(include: { boardusers: { include: :user } }) }
    else
      render status: 400, json: { message: @board.error.details }
    end
  end

  def start_game
    @board = Board.find_by(id: params[:id])
    @board.start_game
    if @board.save
      render status: 200, json: { board: @board }
    else
      render status: 400, json: { message: @board.error.details }
    end
  end

  def cards_dealed
    @board = Board.find_by(id: params[:id])
    @user = User.find_by(params[:user_id])
    cards = @board.cards_dealed(@user)
    if cards.present?
      render status: 200, json: { cards: JSON.parse(cards) }
    else
      render status: 400, json: { message: 'cards not found' }
    end
  end

  def deal_cards
    @board = Board.find_by(id: params[:id])

    @board.deal_cards

    if @board.save
      render status: 200, json: { board: @board }
    else
      render status: 400, json: { message: @board.error.details }
    end
  end

  def play_card
    @board = Board.find_by(id: params[:id])
    @user = User.find_by(params[:user_id])
    @board.play_card(@user, params[:card])
    if @board.save
      render status: 200, json: { board: @board }
    else
      render status: 400, json: { message: @board.error.details }
    end
  end

  def delete_previous_hand
    @board = Board.find_by(id: params[:id])
    @board.delete_previous_hand
    if @board.save
      render status: 200, json: { board: @board }
    else
      render status: 400, json: { message: @board.error.details }
    end
  end

  def shuffle
    deckarray.shuffle!
  end

  # def board_params
  #   params.require(:board).permit(:user1, :user2, :user3, :user4)
  # end

  # def card_params
  #   params.require(:card).permit(:suit, :number)
  # end
end
