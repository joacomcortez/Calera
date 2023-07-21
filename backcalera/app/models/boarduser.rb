class Boarduser < ApplicationRecord
  belongs_to :board, class_name: 'board', foreign_key: 'board_id'
  belongs_to :user
end
