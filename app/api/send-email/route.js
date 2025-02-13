import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phoneNumber, inquiryType, inquiry } =
      await request.json();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `"${name}" <onboarding@resend.dev>`,
      to: [
        "sales@silvermountain.com",
        "zaw@silvermountain.com",
        "soe@silvermountain.com",
      ], // Replace with your email or multiple recipients
      subject: `New Inquiry from ${name}`,
      react: EmailTemplate({ name, email, phoneNumber, inquiryType, inquiry }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

const EmailTemplate = ({ name, email, phoneNumber, inquiryType, inquiry }) => (
  <div>
    <h1>New Inquiry</h1>
    <p>
      <strong>Name:</strong> {name}
    </p>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>
      <strong>Phone Number:</strong> {phoneNumber}
    </p>
    <p>
      <strong>Inquiry Type:</strong> {inquiryType}
    </p>
    <p>
      <strong>Inquiry Message:</strong> {inquiry}
    </p>
  </div>
);
