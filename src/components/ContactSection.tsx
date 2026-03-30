import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, User } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="container px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-wider fest-gradient-text mb-4">Contact Us</h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto mb-10 sm:mb-12">
          {[
            { icon: Mail, label: "Email", value: "cultural@aitmbgm.ac.in", href: "mailto:cultural@aitmbgm.ac.in" },
            { icon: Phone, label: "Phone", value: "86609735448", href: "tel:86609735448" },
            { icon: MapPin, label: "Location", value: "AITM, Belagavi", href: "https://www.google.com/maps/place/Angadi+Institute+of+Technology+and+Management/@15.8446878,74.4669055,19z/data=!4m6!3m5!1s0x3bbf653f86391c41:0x6f90eeb682e03767!8m2!3d15.84528!4d74.471307!16s%2Fg%2F11bwdycjz0?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D" },
            { icon: Instagram, label: "Instagram", value: "@aitm_belagavi_", href: "https://www.instagram.com/aitm_belagavi_/" },
          ].map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass glass-hover rounded-xl p-4 sm:p-6 text-center transition-all duration-500 block"
            >
              <item.icon className="mx-auto mb-2 sm:mb-3 text-primary" size={24} />
              <div className="font-heading text-[10px] sm:text-sm uppercase tracking-widest text-muted-foreground mb-1">{item.label}</div>
              <div className="text-xs sm:text-sm text-foreground break-all sm:break-normal">{item.value}</div>
            </motion.a>
          ))}
        </div>

        {/* Student Coordinators Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl tracking-wider fest-gradient-text mb-4">
            Student Coordinators
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-5xl mx-auto mb-10 sm:mb-12">
{[
            { 
              branch: "Artificial Intelligence & Data Science", 
              coord1: " Neki Jain", 
              phone1: "+91 7568676897",
              coord2: "Ramesh H",
              phone2: "+91  7353204108",
            },
            { 
              branch: "Computer Science", 
              coord1: "Shireedhar Suji",
              phone1: "+91 8884608943",
              coord2: "Srushti B",
              phone2: "+91 8431976442",
            },
            { 
              branch: "Mechanical Engineering", 
              coord1: "Prathamesh patil",
              phone1: "+91 8904308926",
              coord2: "Pradeep kulkarni ",
              phone2: "+91 8197898550",
            },
            { 
              branch: "Civil Engineering", 
              coord1: "Ritesh Y. Sutar",
              phone1: "+91 9164848342",
              coord2: "Parth R. Patil",
              phone2: "+91 7026611587",
            },
            { 
              branch: "Electronics & Communication Engg.", 
              coord1: "Chetan Hanamannavar",
              phone1: "+91 8867472005",
              coord2: "Megha Biradar",
              phone2: "+91 6363767116",
            },
            { 
              branch: "Electrical & Electronics Engg.", 
              coord1: "Shubham R Biradar ",
              phone1: "+91 8904308926",
              coord2: "Shreedevi Baligar",
              phone2: "+91 9353924390",
            },
            { 
              branch: "Robotics & Automation", 
              coord1: "Yasirahmad Ron",
              phone1: "+91 8951450068",
              coord2: "Abhinandan",
              phone2: "+91 866-0569165",
            },
            { 
              branch: "BCA", 
              coord1: "Ruchita Nelagali",
              phone1: "+91 7411481463",
              coord2: "Sushil Sahadevache",
              phone2: "+91 9353362031",
            },
          ].map((branchItem, i) => (
            <motion.div
              key={branchItem.branch}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass glass-hover rounded-xl p-3 sm:p-5 text-center transition-all duration-500 block max-h-56 overflow-hidden"
            >
              <User className="mx-auto mb-3 sm:mb-4 text-primary" size={24} />
              <div className="font-heading text-[9px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-2 line-clamp-2">{branchItem.branch}</div>
                <div className="space-y-1 text-left">
                <div>
                  <div className="font-semibold text-xs sm:text-sm text-foreground line-clamp-1">1. {branchItem.coord1}</div>
                  <a href={`tel:${branchItem.phone1.replace(/\s/g, '')}`} className="text-xs sm:text-sm text-foreground hover:text-primary block">{branchItem.phone1}</a>
                </div>
                <div>
                  <div className="font-semibold text-xs sm:text-sm text-foreground line-clamp-1">2. {branchItem.coord2}</div>
                  <a href={`tel:${branchItem.phone2.replace(/\s/g, '')}`} className="text-xs sm:text-sm text-foreground hover:text-primary block">{branchItem.phone2}</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass rounded-xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1533.265308739!2d74.471307!3d15.84528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf653f86391c41%3A0x6f90eeb682e03767!2sAngadi%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1728000000000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AITM Belagavi Location"
            className="w-full sm:h-[350px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;