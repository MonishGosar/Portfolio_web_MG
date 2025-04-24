
import { 
  Github, 
  Linkedin,
  Mail
} from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      platform: "Email",
      href: "mailto:monish.emailbox@gmail.com",
      label: "monish.emailbox@gmail.com",
      icon: Mail
    },
    {
      platform: "LinkedIn",
      href: "https://linkedin.com/in/monish-gosar",
      label: "linkedin.com/in/monish-gosar",
      icon: Linkedin
    },
    {
      platform: "GitHub",
      href: "https://github.com/monish-gosar",
      label: "github.com/monish-gosar",
      icon: Github
    }
  ];

  return (
    <section id="contact" className="section bg-gray-900 text-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
          Get In Touch
        </h2>
        
        <div className="max-w-md mx-auto">
          <p className="text-center text-gray-400 mb-8">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
          
          <div className="space-y-4">
            {contactLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-gray-800 rounded-md transition-all hover:bg-gray-700"
              >
                <div className="bg-red rounded-full p-2 mr-4">
                  <link.icon size={20} />
                </div>
                <div>
                  <p className="font-medium">{link.platform}</p>
                  <p className="text-sm text-gray-400">{link.label}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
