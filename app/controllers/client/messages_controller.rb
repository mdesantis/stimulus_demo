module Client
  class MessagesController < ApplicationController
    before_action :require_sign_in

    def create
      @message = Message.new(message_params.merge(author: current_user))

      if @message.save
        render status: :created
      else
        render json: @message.errors, status: :unprocessable_entity
      end
    end

    def destroy
      Message.find(params[:id]).destroy

      head :no_content
    end

    private

    # Never trust parameters from the scary internet, only allow the white list through.
    def message_params
      params.require(:message).permit(:text)
    end
  end
end
