class TweetsController < ApplicationController
    def index
        render json: Tweet.all
    end

    def show

    end
end