import nodemailer from 'nodemailer';

const transporter:any = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.TWO_FA_KEY
  }
});

export const sendEmail = async (mailOptions: any) => {
    try{
      transporter.sendMail(mailOptions, async function(error:any, info:any){
          if (error) {
              console.log(error);
        } else {
            console.log(info)
        }
      });
    }
    catch (error) {
        console.log(error);
    }
}