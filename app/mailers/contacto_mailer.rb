class ContactoMailer < ActionMailer::Base
  
  default from: "beatriz.pardos@gmail.com"
  def contacto(senderEmail,message)
    @senderEmail = senderEmail
    @message = message 
    mail(:to => "jorgeroy@gmail.com", :reply_to => senderEmail, :subject => senderEmail + " solicita informacion")
  end
end
