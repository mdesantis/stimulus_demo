class MessagesController < ApplicationController
  def create
    @message = Message.new(message_params.merge(author_ip: request.remote_ip))

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
