import emailjs from '@emailjs/browser';

// You'll need to sign up for EmailJS (https://www.emailjs.com/) and get these values
// For security, these should be stored in environment variables
const EMAILJS_SERVICE_ID = 'your_service_id'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key

interface SendConfirmationEmailParams {
  name: string;
  email: string;
  company: string;
  role: string;
}

/**
 * Sends a confirmation email to the user who requested a demo
 * 
 * @param params Object containing user details (name, email, company, role)
 * @returns Promise that resolves when the email is sent
 */
export const sendConfirmationEmail = async (params: SendConfirmationEmailParams): Promise<void> => {
  try {
    const templateParams = {
      to_name: params.name,
      to_email: params.email,
      from_name: 'MortgageAI Team',
      company: params.company,
      role: params.role,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('Confirmation email sent successfully!');
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    throw error;
  }
};
