import { Palette, Factory, Truck, FlaskConical } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Customization',
    description: 'We offer fully customizable lubricant formulations to match your specific needs, from product design to branding and packaging.',
  },
  {
    icon: Factory,
    title: 'Manufacturing Excellence',
    description: 'Our state-of-the-art manufacturing facilities adhere to the highest standards of quality and safety.',
  },
  {
    icon: Truck,
    title: 'Logistics & Delivery',
    description: 'We ensure timely and efficient delivery of all products, no matter the scale of your operations.',
  },
  {
    icon: FlaskConical,
    title: 'Research & Development',
    description: 'Innovation is at the core of our business. Our dedicated R&D team develops high-performance formulations.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions for all your lubricant needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group card-gradient rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 card-shadow"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl tracking-wide text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
