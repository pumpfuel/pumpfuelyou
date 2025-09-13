import logo from "@/assets/logo.png";
import dexscreenerLogo from "@/assets/dexscreener-logo-new.png";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-brand-secondary to-brand-primary py-8 shadow-[0_4px_20px_rgba(34,197,94,0.15)]">
      <div className="container mx-auto px-4 relative">
        {/* Distribution Wallet */}
        <div className="absolute top-6 left-6">
          <a 
            href="https://solscan.io/account/EkkzGp8kJmYWFXfvhA1XcxMU6q34xnaBhKELxHWSUEhC" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-start p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
          >
            <span className="text-white/80 text-xs font-medium">Distribution Wallet</span>
            <span className="text-white text-sm font-mono">
              {`EkkzGp8kJmYWFXfvhA1XcxMU6q34xnaBhKELxHWSUEhC`.slice(0, 8)}...{`EkkzGp8kJmYWFXfvhA1XcxMU6q34xnaBhKELxHWSUEhC`.slice(-4)}
            </span>
          </a>
        </div>
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-15 h-15 bg-brand-secondary rounded-xl flex items-center justify-center shadow-lg">
            <img src={logo} alt="Pumpfuel Logo" className="w-10 h-10" />
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold text-shadow">
            Pumpfuel
          </h1>
        </div>
        <p className="text-center text-white/90 text-lg">
          Fueling Pumpfun creators with fees
        </p>
        
        {/* Social Icons */}
        <div className="absolute top-6 right-6 flex gap-3">
          {/* DexScreener Icon */}
          <a 
            href="https://dexscreener.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
          >
            <img src={dexscreenerLogo} alt="DexScreener" className="w-6 h-6" />
          </a>
          
          {/* Twitter/X Icon */}
          <a 
            href="https://twitter.com/pumpfuelyou" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};
