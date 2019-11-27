class DestinationsController < ApplicationController

    def show
        @destination = Destination.find_by(id: params[:id])
    end
    
end