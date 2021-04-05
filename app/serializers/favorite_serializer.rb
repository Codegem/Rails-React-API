class FavoriteSerializer < ActiveModel::Serializer
  attributes :Car_id, :id, :name
  has_one :Car
end
