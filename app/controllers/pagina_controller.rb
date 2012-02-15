class PaginaController < ApplicationController
  def inicio
    @tab="inicio" 
  end

  def galeria
    @tab="galeria"
  end

  def servicios
    @tab="servicios" 
  end

  def contacto
    @tab="contacto"
  end

end
