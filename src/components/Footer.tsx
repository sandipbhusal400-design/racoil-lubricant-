const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-lg px-3 py-1">
              <span className="font-display text-xl text-primary-foreground tracking-wider">RACOIL</span>
            </div>
            <span className="text-xs text-muted-foreground">Lubricants & Grease</span>
          </div>
          
          <p className="text-muted-foreground text-sm text-center">
            © {new Date().getFullYear()} Global Lubricants Industries Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
