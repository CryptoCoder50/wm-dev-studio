export default function ContactPage() {
    return (
      <div className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
  
        <p className="mb-8 text-gray-600">
          If you have questions, project inquiries, or collaboration ideas,
          feel free to reach out.
        </p>
  
        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              className="w-full border rounded-lg p-3"
              placeholder="Your name"
            />
          </div>
  
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg p-3"
              placeholder="your@email.com"
            />
          </div>
  
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              rows={5}
              className="w-full border rounded-lg p-3"
              placeholder="Tell us about your project..."
            />
          </div>
  
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  }