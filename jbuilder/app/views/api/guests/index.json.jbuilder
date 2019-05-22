json.guests do
    json.array! @guests do |guest|
        json.id guest.id
        json.name guest.name
        json.age guest.age
        json.color guest.favorite_color
        
    end
end

json.gifts do
    @guests.each do |guest|
        json.set! guest.id do
            json.extract! guest.gifts, :id, :title

        end
    end
end
# @guests.each_with_index do |guest, idx|
#     json.set! idx do
#         # json.name guest.name
#         # json.age guest.age
#         # json.color guest.favorite_color
#         json.partial! 'api/guests/guest',
#         guest: guest
#     end
# end

