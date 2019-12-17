
require 'net/http'
require 'json'

class RocketsController < ApplicationController
    def index
        url = 'https://api.spacexdata.com/v3/launches'
        uri =URI(url)
        response = Net::HTTP.get(uri)
        res = JSON.parse(response)
        result = []
        
        res.each do |n|
        
            result.push({
                'flight_number' => n['flight_number'],
                'mission_name'=>n['mission_name'],
                'launch_year'=>n['launch_year'],
                'nationality'=>n['rocket']['second_stage']['payloads'][0]['nationality'],
                'launch_success'=>n['launch_success'],
                'article_link'=>n['links']['article_link'],
                'video_link' => n['links']['video_link'],
                'flickr_images'=> n['links']['flickr_images'],
                'details'=> n['details']
            })
        end
        #byebug
        render json: result
    

    # def show
    #     rocket = Rocket.find(params[:id])
    #     render json: rocket
    # end

    # def create

    end
end
