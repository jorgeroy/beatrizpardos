class ContactoMailer < ActionMailer::Base
  
  default from: "beatriz.pardos@gmail.com"
  def contacto(senderEmail,message)
    @senderEmail = senderEmail
    @message = message 
    mail(:from => senderEmail,:to => "soporte@beatrizpardos.com", :reply_to => senderEmail, :subject => senderEmail + " solicita informacion")
  end
end
