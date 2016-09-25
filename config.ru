# This file is used by Rack-based servers to start the application.

require_relative 'config/environment'
require 'faye'
# require File.expand_path('../app', __FILE__)

use Faye::RackAdapter, mount: '/faye', timeout: 25

run Rails.application
