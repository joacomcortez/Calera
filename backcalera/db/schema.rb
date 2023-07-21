# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_06_28_203231) do
  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "boards", force: :cascade do |t|
    t.integer "round", default: 3
    t.integer "status"
    t.string "deck", default: "[\"1-oro\",\"1-copa\",\"1-espada\",\"1-basto\",\"2-oro\",\"2-copa\",\"2-espada\",\"2-basto\",\"3-oro\",\"3-copa\",\"3-espada\",\"3-basto\",\"4-oro\",\"4-copa\",\"4-espada\",\"4-basto\",\"5-oro\",\"5-copa\",\"5-espada\",\"5-basto\",\"6-oro\",\"6-copa\",\"6-espada\",\"6-basto\",\"7-oro\",\"7-copa\",\"7-espada\",\"7-basto\",\"8-oro\",\"8-copa\",\"8-espada\",\"8-basto\",\"9-oro\",\"9-copa\",\"9-espada\",\"9-basto\",\"10-oro\",\"10-copa\",\"10-espada\",\"10-basto\",\"11-oro\",\"11-copa\",\"11-espada\",\"11-basto\",\"12-oro\",\"12-copa\",\"12-espada\",\"12-basto\"]"
    t.boolean "direction", default: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "boardusers", force: :cascade do |t|
    t.text "cards"
    t.text "card_played"
    t.integer "bet"
    t.integer "current_wins"
    t.integer "score"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "cards", force: :cascade do |t|
    t.text "rank", default: "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
    t.text "suit", default: "[Oro, Copa, Espada, Basto]"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "decks", force: :cascade do |t|
    t.string "carddeck", default: "[1 Or,1 Co,1 Es,1 Ba,2 Or,2 Co,2 Es,2 Ba,3 Or,3 Co,3 Es,3 Ba,4 Or,4 Co,4 Es,4 Ba,5 Or,5 Co,5 Es,5 Ba,6 Or,6 Co,6 Es,6 Ba,7 Or,7 Co,7 Es,7 Ba,8 Or,8 Co,8 Es,8 Ba,9 Or,9 Co,9 Es,9 Ba,10 Or,10 Co,10 Es,10 Ba,11 Or,11 Co,11 Es,11 Ba,12 Or,12 Co,12 Es,12 Ba]"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
end
