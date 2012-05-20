class ContactoMailer < ActionMailer::Base
  
  default from: "beatriz.pardos@gmail.com"
  def contacto(senderEmail,mensaje)
    mail(:to => "beatriz.pardos@gmail.com", :subject => senderEmail + " solicita informacion")
  end
end
