class StaticController < ApplicationController

  def home
  end

  def slow_streaming
    @times = 10_000
  end
end
