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

  def send_email
    sender_email = params[:senderEmail]
    if (sender_email =~/\b[A-Z0-9._%a-z\-]+@(?:[A-Z0-9a-z\-]+\.)+[A-Za-z]{2,4}\z/)
      message = params[:message]
      ContactoMailer.contacto(sender_email, message).deliver 
      flash[:notice] = 'Email enviado con exito.'
    else
      flash[:error] = "El email introducido no es valido"
    end
    redirect_to :contacto
  end

end
