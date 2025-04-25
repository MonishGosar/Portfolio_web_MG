import { 
  Github, 
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send
} from "lucide-react";
import { useState, FormEvent } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const contactInfo = {
    email: "monish.emailbox@gmail.com",
    phone: "+91 7045636928",
    location: "Mumbai, India"
  };

  const socialLinks = [
    {
      platform: "LinkedIn",
      href: "https://linkedin.com/in/monish-gosar",
      icon: Linkedin
    },
    {
      platform: "GitHub",
      href: "https://github.com/MonishGosar",
      icon: Github
    },
    {
      platform: "Email",
      href: "mailto:monish.emailbox@gmail.com",
      icon: Mail
    }
  ];

  return (
    <section id="contact" className="section bg-muted/50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-black mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-6 pb-4 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-black mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">Feel free to reach out through any of these channels</p>
            
            <div className="space-y-6">
              <div className="flex items-center text-gray-700">
                <Mail className="w-5 h-5 mr-4 text-red-600" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-red-600 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center text-gray-700">
                <Phone className="w-5 h-5 mr-4 text-red-600" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="w-5 h-5 mr-4 text-red-600" />
                <span>{contactInfo.location}</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-black mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-50 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-black mb-6">Send Me a Message</h3>
            <p className="text-gray-600 mb-8">Fill out the form below and I'll get back to you as soon as possible</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-md text-black focus:outline-none focus:border-red-500"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-md text-black focus:outline-none focus:border-red-500"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-2 bg-white border border-gray-200 rounded-md text-black focus:outline-none focus:border-red-500"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="I'd like to discuss a project..."
                  className="w-full px-4 py-2 bg-white border border-gray-200 rounded-md text-black focus:outline-none focus:border-red-500"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
