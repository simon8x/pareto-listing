require "test_helper"

class CitiesControllerTest < ActionDispatch::IntegrationTest
  test "should get atlanta" do
    get cities_atlanta_url
    assert_response :success
  end
end
