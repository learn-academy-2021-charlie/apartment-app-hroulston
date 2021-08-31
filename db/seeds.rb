# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

  user = User.create!(email: 'newemail@gmail.com', password:'testabc123', password_confirmation: 'testabc123')

# Diff way of creating apartment and associating with the user:
# apartment_1= Apartment.create!()
# user.apartments << apartment_1

apartments = [
  {
    street: '1432 Valinda Ave.',
    city: 'Pomona',
    state: 'CA',
    manager: 'Meghan',
    email: 'meghan@gmail.com',
    price: '1200',
    bedrooms: 2,
    bathrooms: 1,
    pets: 'cats only'
  },
  {
    street: '528 1st St.',
    city: 'Pasadena',
    state: 'CA',
    manager: 'Geoff',
    email: 'gmark22@yahoo.com',
    price: '2600',
    bedrooms: 2,
    bathrooms: 1,
    pets: 'no pets allowed'
  }
]



apartments.each do |attribute|
  user.apartments.create attribute
end
