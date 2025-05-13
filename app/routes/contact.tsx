import type { Route } from "./+types/contact";
import sgMail from "@sendgrid/mail";
import { z } from "zod";
import { ArrowCircleLeft } from "~/ui/icons/vercel";
import { Button } from "@heroui/react";
import { Link, useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Jossy Solá Contact" },
    { name: "description", content: "Contact Jossy Sola" },
  ];
}

export default function Contact ({
    actionData
}: Route.ComponentProps) {
  const navigate = useNavigate();
  return <section className="w-full h-screen flex flex-col items-center justify-center gap-3">
    <header className="w-full flex flex-col md:flex-row justify-center items-center">
      <Button 
      isIconOnly 
      aria-label="Go back button" 
      variant="light"
      onPress={() => navigate(-1) }>
        <ArrowCircleLeft />
      </Button>
      <h1 style={{ fontFamily: "Geist Bold" }} className="text-center text-3xl m-5">Contact 💌</h1>
    </header>
    
    <h2>Want to reach out?</h2>
      
    <h2 className="flex flex-row gap-2 items-center">Message me on 
      <Link to="https://www.linkedin.com/in/jossysola/" target="_blank">
        <img alt="LinkedIn" aria-label="LinkedIn link" src="linkedin.png" width={32} height={32} />
      </Link>,
    </h2> 
    <h2 className="flex flex-row gap-2 items-center">Check my projects on 
      <Link to="https://github.com/JossySola" target="_blank">
        <img alt="GitHub" aria-label="GitHub link" src="github-mark-white.png" className="hidden dark:inline" width={32} height={32} />
      </Link>
      <Link to="https://github.com/JossySola" target="_blank">
        <img alt="GitHub" aria-label="GitHub link" src="github-mark.png" className="inline dark:hidden" width={32} height={32} />
      </Link>
      ,
    </h2> 
    <h2 className="flex flex-row gap-2 items-center">or DM me on 
      <Link to="https://www.instagram.com/jossysolart/" target="_blank">
        <img alt="Instagram" aria-label="Instagram Link" src="instagram.webp" width={32} height={32} />
      </Link>
      !
    </h2>
  </section>
}

export async function action ({
  request
}: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const captcha = formData.get("g-recaptcha-response");
  console.log(captcha)

  const nameValidation = z.string().safeParse(name);
  const emailValidation = z.string().email().safeParse(email);
  const messageValidation = z.string().safeParse(message);

  if (!nameValidation.success || !emailValidation.success || !messageValidation.success) {
      return {
          message: "Please fill out the form with valid data.",
          success: false,
      }
  }
  const msg = {
      to: "contact@jossysola.com",
      from: "no-reply@jossysola.com",
      subject: "Message from Homepage",
      html: `<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml"><head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <!--<![endif]-->
    <!--[if (gte mso 9)|(IE)]>
    <xml>
      <o:OfficeDocumentSettings>
        <o:AllowPNG/>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
    <!--[if (gte mso 9)|(IE)]>
<style type="text/css">
  body {width: 600px;margin: 0 auto;}
  table {border-collapse: collapse;}
  table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
  img {-ms-interpolation-mode: bicubic;}
</style>
<![endif]-->
    <style type="text/css">
  body, p, div {
    font-family: arial,helvetica,sans-serif;
    font-size: 14px;
  }
  body {
    color: #000000;
  }
  body a {
    color: #1188E6;
    text-decoration: none;
  }
  p { margin: 0; padding: 0; }
  table.wrapper {
    width:100% !important;
    table-layout: fixed;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  img.max-width {
    max-width: 100% !important;
  }
  .column.of-2 {
    width: 50%;
  }
  .column.of-3 {
    width: 33.333%;
  }
  .column.of-4 {
    width: 25%;
  }
  ul ul ul ul  {
    list-style-type: disc !important;
  }
  ol ol {
    list-style-type: lower-roman !important;
  }
  ol ol ol {
    list-style-type: lower-latin !important;
  }
  ol ol ol ol {
    list-style-type: decimal !important;
  }
  @media screen and (max-width:480px) {
    .preheader .rightColumnContent,
    .footer .rightColumnContent {
      text-align: left !important;
    }
    .preheader .rightColumnContent div,
    .preheader .rightColumnContent span,
    .footer .rightColumnContent div,
    .footer .rightColumnContent span {
      text-align: left !important;
    }
    .preheader .rightColumnContent,
    .preheader .leftColumnContent {
      font-size: 80% !important;
      padding: 5px 0;
    }
    table.wrapper-mobile {
      width: 100% !important;
      table-layout: fixed;
    }
    img.max-width {
      height: auto !important;
      max-width: 100% !important;
    }
    a.bulletproof-button {
      display: block !important;
      width: auto !important;
      font-size: 80%;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
    .columns {
      width: 100% !important;
    }
    .column {
      display: block !important;
      width: 100% !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
    .social-icon-column {
      display: inline-block !important;
    }
  }
</style>
    <!--user entered Head Start--><!--End Head user entered-->
  </head>
  <body>
    <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#FFFFFF;">
      <div class="webkit">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
          <tbody><tr>
            <td valign="top" bgcolor="#FFFFFF" width="100%">
              <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                <tbody><tr>
                  <td width="100%">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tbody><tr>
                        <td>
                          <!--[if mso]>
  <center>
  <table><tr><td width="600">
<![endif]-->
                                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                    <tbody><tr>
                                      <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
  <tbody><tr>
    <td role="module-content">
      <p></p>
    </td>
  </tr>
</tbody></table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="a63946ad-3a4f-47b0-9d7f-b7c1900a8414" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:18px 18px 18px 18px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-family: helvetica, sans-serif; color: #afafaf; font-size: 14px"><strong>Name:</strong></span><span style="font-family: helvetica, sans-serif; color: #afafaf; font-size: 14px"> &nbsp;${ name }</span></div>
<div style="font-family: inherit; text-align: inherit"><span style="font-family: helvetica, sans-serif; color: #afafaf; font-size: 14px"><strong>Email:</strong></span><span style="font-family: helvetica, sans-serif; color: #afafaf; font-size: 14px"> &nbsp;${ email }</span></div><div></div></div></td>
    </tr>
  </tbody>
</table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="4f450a24-0b14-490d-85a1-c1674e3c9ab3">
  <tbody>
    <tr>
      <td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="">
        <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="1px" style="line-height:1px; font-size:1px;">
          <tbody>
            <tr>
              <td style="padding:0px 0px 1px 0px;" bgcolor="#afafaf"></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="26a0db4b-f7c5-4337-813e-416a7914a9aa" data-mc-module-version="2019-10-22">
  <tbody>
    <tr>
      <td style="padding:18px 18px 18px 18px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 18px">${ message }</span></div><div></div></div></td>
    </tr>
  </tbody>
</table></td>
                                    </tr>
                                  </tbody></table>
                                  <!--[if mso]>
                                </td>
                              </tr>
                            </table>
                          </center>
                          <![endif]-->
                        </td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody></table>
            </td>
          </tr>
        </tbody></table>
      </div>
    </center>
  
</body></html>`
  }
  try {
      process.env.SENDGRID_API_KEY && sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const mail = await sgMail.send(msg);
      if (mail[0].statusCode !== 202) {
          throw new Error();
      }
      return {
          message: "Email sent!",
          success: true,
      }
  } catch (e) {
      return {
          message: "An unexpected error has occurred. Please try again later.",
          success: false,
      }
  }
}