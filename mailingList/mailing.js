var nodeMailer=require("nodemailer");
var smtpTransport=nodemailer.createTransport("SMTP",{
    host:"smtp.ethereal.email",
    port:25
});

var mailList=['xyz@gmail.com','abx@gmail.com'];

var msg={
    from:'avinashjaiswal642@gmail.com',
    subject:'Hello!',
    text:"i am avinash jaiswal",
    to:mailList
}

smtpTransport.sendMail(msg,(error,info)=>{
    if(error)
    {
        return console.log(error);
    }
    console.log("message sent %s;",info.messageId);
    console.log('preview URL:%s',nodemailer.getTestMessageUrl(info));
})