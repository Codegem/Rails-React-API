class CarSerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :commonname
  has_many :favorites
end
