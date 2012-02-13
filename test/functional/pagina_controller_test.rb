require 'test_helper'

class PaginaControllerTest < ActionController::TestCase
  test "should get inicio" do
    get :inicio
    assert_response :success
  end

  test "should get galeria" do
    get :galeria
    assert_response :success
  end

  test "should get servicios" do
    get :servicios
    assert_response :success
  end

  test "should get contacto" do
    get :contacto
    assert_response :success
  end

end
