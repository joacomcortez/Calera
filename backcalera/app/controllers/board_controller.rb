class BoardController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @boards = Board.all
    render json: @boards
  end

  def show
    @boards = Board.find_by(params[:id])
    if @board.exists?
      render status: 200, json: { board: @board }
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
    @board = Board.find_by(params[:id])
    @user = User.find_by(params[:user_id])
    @board.join_player(@user)
    if @board.save
      render status: 200, json: { board: @board }
    else
      render status: 400, json: { message: @board.error.details }
    end
  end
  
  def show
    @board = Board.find_by(params[:id])
    if @board.exists?
      render status: 200, json: { board: @board }
    else
      render status: 400, json: { message: 'user not found' }
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
    
    cards = @board.get_cards_dealed(@user)
    if cards.exists?
      render status: 200, json: { cards: cards }
    else
      render status: 400, json: { message: 'cards not found' }
    end
  end

  def deal_cards
    @board = Board.find_by(id: params[:id])
    # si no existe que explote

    deal_cards

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
