class MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)

    if @message.save
      render status: :created
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def message_params
    params.require(:message).permit(:text)
  end
end
