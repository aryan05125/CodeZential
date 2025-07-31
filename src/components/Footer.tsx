import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} CodeZential. Crafted with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />{' '}
            for future-ready businesses.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;