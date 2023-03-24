class StaticController < ApplicationController
  def home
  end

  def turbo
    respond_to do |format|
      format.turbo_stream { render turbo_stream: turbo_stream.replace('turbo-test-drop', partial: 'turbo') }
    end
  end
end
