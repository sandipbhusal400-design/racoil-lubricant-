import { Award, Building2, Users, Beaker, Globe, Truck, Check, Target, Eye } from 'lucide-react';

const features = [
  { icon: Award, label: 'Established Brand Since 2018' },
  { icon: Building2, label: 'UAE-based Formulation Expertise' },
  { icon: Users, label: 'Expert R&D Team' },
  { icon: Beaker, label: 'Custom Formulations' },
  { icon: Globe, label: 'Global Quality Standards' },
  { icon: Truck, label: 'Timely Delivery' },
];

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '500+', label: 'Products' },
  { value: '100+', label: 'Clients' },
  { value: '24/7', label: 'Support' },
];

const strengths = [
  'Established lubricant brand since 2018',
  'UAE-based formulation expertise',
  'Wide range of automotive, industrial oils, greases, and coolants',
  'Proven performance with strong customer feedback',
  'Private label & customized brand manufacturing available',
  'Focus on quality control and continuous improvement',
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wider mb-4">
            ABOUT <span className="text-primary">US</span>
          </h2>
        </div>

        {/* Main About Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-foreground/90 text-lg leading-relaxed mb-6">
            Founded in 2018, <span className="text-primary font-semibold">RACOIL Lubricants</span> is a growing and reliable lubricant brand committed to delivering high-quality automotive and industrial lubrication solutions. With strong technical support from our experienced formulation adviser based in the UAE, we develop products that meet modern engine, machinery, and industry requirements.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            From the beginning, our focus has been on quality, performance, and customer satisfaction. By using carefully selected base oils and advanced additive technology, we ensure that every RACOIL product delivers consistent performance, excellent protection, and long service life under demanding operating conditions.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-6">
            Over the years, we have built a strong customer base and positive market reputation, supported by excellent customer reviews and long-term partnerships with dealers, workshops, transporters, and industries. Our products are trusted for their reliability, durability, and value.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed">
            In addition to our own brand, RACOIL, we also offer customized lubricant solutions and private labeling services. We work closely with clients to develop formulations and packaging tailored to their specific brand, market, and application requirements, while maintaining strict quality standards.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.label}
              className="flex flex-col items-center text-center p-4 rounded-lg bg-card/50 border border-border hover:border-primary/30 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-primary mb-3" />
              <span className="text-sm text-foreground/80">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl card-gradient border border-border"
            >
              <div className="font-display text-4xl md:text-5xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Strengths & Commitment */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Our Strengths */}
          <div className="card-gradient rounded-xl p-8 border border-border">
            <h3 className="font-display text-2xl tracking-wide text-foreground mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Our Strengths
            </h3>
            <ul className="space-y-3">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Commitment */}
          <div className="card-gradient rounded-xl p-8 border border-border">
            <h3 className="font-display text-2xl tracking-wide text-foreground mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-primary" />
              Our Commitment
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to supplying reliable lubrication solutions that help reduce maintenance costs, improve equipment efficiency, and extend service life. Through innovation, technical knowledge, and customer-focused service, we aim to grow together with our partners and customers.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="card-gradient rounded-xl p-8 border border-primary/30 glow-shadow max-w-3xl mx-auto text-center">
          <h3 className="font-display text-2xl tracking-wide text-foreground mb-4 flex items-center justify-center gap-3">
            <Eye className="w-6 h-6 text-primary" />
            Our Vision
          </h3>
          <p className="text-lg text-foreground/90 leading-relaxed">
            To become a <span className="text-primary font-semibold">trusted and recognized lubricant brand</span> by delivering consistent quality, technical excellence, and customized solutions for both domestic and international markets.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
