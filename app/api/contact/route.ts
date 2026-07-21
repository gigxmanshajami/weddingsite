import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key provided
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, date, budget, guests, vision } = data;

    // Validate basic requirements
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required.' },
        { status: 400 }
      );
    }

    const domainEmail = 'booking@dreammoments.co.in';

    // HTML Template for the user (Thank you email)
    const userHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #fcfcfc; margin: 0; padding: 0; color: #333; }
          .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #eaeaea; }
          .header { background: #1a1a1a; padding: 40px 30px; text-align: center; }
          .header h1 { color: #d4af37; margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 2px; text-transform: uppercase; }
          .content { padding: 40px 30px; line-height: 1.6; }
          .content h2 { color: #1a1a1a; font-size: 22px; font-weight: 400; margin-top: 0; }
          .content p { font-size: 16px; color: #555; margin-bottom: 20px; }
          .details { background: #f9f9f9; padding: 20px; border-radius: 6px; margin: 30px 0; border-left: 4px solid #d4af37; }
          .details p { margin: 10px 0; font-size: 15px; }
          .details strong { color: #1a1a1a; display: inline-block; width: 130px; }
          .footer { background: #fafafa; padding: 25px 30px; text-align: center; border-top: 1px solid #eee; }
          .footer p { margin: 0; font-size: 14px; color: #888; }
          .footer a { color: #d4af37; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Dream Moments</h1>
          </div>
          <div class="content">
            <h2>Thank You, ${name}!</h2>
            <p>We have successfully received your consultation request. We are thrilled to learn more about your vision and how we can bring it to life.</p>
            <p>Here is a summary of the details you provided:</p>
            <div class="details">
              <p><strong>Wedding Date:</strong> ${date || 'Not specified'}</p>
              <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
              <p><strong>Guest Count:</strong> ${guests || 'Not specified'}</p>
            </div>
            <p>Our team will review your inquiry and get back to you shortly to schedule your personalized consultation.</p>
            <p>Warm regards,<br>The Dream Moments Team</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Dream Moments. All rights reserved.</p>
            <p><a href="https://dreammoments.co.in">dreammoments.co.in</a></p>
          </div>
        </div>
      </body>
      </html>
    `;

    // HTML Template for the owner (Notification email)
    const ownerHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #fcfcfc; margin: 0; padding: 0; color: #333; }
          .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); border: 1px solid #eaeaea; }
          .header { background: #1a1a1a; padding: 40px 30px; text-align: center; }
          .header h1 { color: #d4af37; margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 2px; text-transform: uppercase; }
          .content { padding: 40px 30px; line-height: 1.6; }
          .content h2 { color: #1a1a1a; font-size: 22px; font-weight: 400; margin-top: 0; border-bottom: 2px solid #eaeaea; padding-bottom: 15px; margin-bottom: 25px; }
          .content p { font-size: 15px; color: #555; margin-bottom: 25px; }
          .field { margin-bottom: 20px; }
          .label { font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #888; display: block; margin-bottom: 5px; font-weight: 600; }
          .value { font-size: 16px; color: #1a1a1a; background: #f9f9f9; padding: 15px; border-radius: 6px; border-left: 4px solid #d4af37; white-space: pre-wrap; }
          .value a { color: #d4af37; text-decoration: none; font-weight: 500; }
          .footer { background: #fafafa; padding: 25px 30px; text-align: center; border-top: 1px solid #eee; }
          .footer p { margin: 0; font-size: 14px; color: #888; }
          .footer a { color: #d4af37; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Dream Moments</h1>
          </div>
          <div class="content">
            <h2>New Consultation Request</h2>
            <p>A new client has submitted a consultation request through the website. Here are their details:</p>
            
            <div class="field">
              <span class="label">Full Name</span>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <span class="label">Email Address</span>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            <div class="field">
              <span class="label">Phone Number</span>
              <div class="value"><a href="tel:${phone}">${phone}</a></div>
            </div>
            <div class="field">
              <span class="label">Wedding Date</span>
              <div class="value">${date || 'Not specified'}</div>
            </div>
            <div class="field">
              <span class="label">Budget Range</span>
              <div class="value">${budget || 'Not specified'}</div>
            </div>
            <div class="field">
              <span class="label">Guest Count</span>
              <div class="value">${guests || 'Not specified'}</div>
            </div>
            <div class="field">
              <span class="label">Client Vision / Additional Info</span>
              <div class="value">${vision || 'Not specified'}</div>
            </div>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Dream Moments. All rights reserved.</p>
            <p>This is an automated notification from <a href="https://dreammoments.co.in">dreammoments.co.in</a></p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send emails using Resend Batch API
    const dataRes = await resend.batch.send([
      {
        from: `Dream Moments <${domainEmail}>`,
        to: [email],
        subject: 'Thank you for your inquiry – Dream Moments',
        html: userHtml,
      },
      {
        from: `Dream Moments <${domainEmail}>`,
        to: ['contact.weddingwave@gmail.com'],
        subject: `New Consultation Request: ${name}`,
        html: ownerHtml,
      }
    ]);

    return NextResponse.json({ success: true, data: dataRes });
  } catch (error: any) {
    console.error('Resend API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send emails' },
      { status: 500 }
    );
  }
}
