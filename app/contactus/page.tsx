import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact | WM Dev Studio",
  description: "Get in touch for web, mobile, blockchain, and AI solutions.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <ContactForm />
    </div>
  );
}