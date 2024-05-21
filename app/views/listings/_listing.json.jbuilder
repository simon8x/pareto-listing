json.extract! listing, :id, :addres, :description, :image_url, :created_at, :updated_at
json.url listing_url(listing, format: :json)
