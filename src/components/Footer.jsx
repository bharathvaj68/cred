const Footer = () => {
  return (
    <footer className="bg-black text-neutral-400 pt-24 pb-12 border-t border-neutral-900 text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        {/* Main Links Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-20">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="w-10 h-10 border border-white flex items-center justify-center font-bold text-white tracking-tighter rounded-md">
              C
            </div>
            <p className="text-xs text-neutral-600 uppercase tracking-widest">Premium Ecosystems</p>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-wider uppercase text-xs mb-6 font-mono text-neutral-300">Products</h4>
            <ul className="space-y-3 text-neutral-500 text-xs">
              <li><a href="#" className="hover:text-white transition-colors duration-200">CRED money</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">CRED mint</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">CRED garage</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">CRED cash</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-wider uppercase text-xs mb-6 font-mono text-neutral-300">Company</h4>
            <ul className="space-y-3 text-neutral-500 text-xs">
              <li><a href="#" className="hover:text-white transition-colors duration-200">about CRED</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">security setups</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-wider uppercase text-xs mb-6 font-mono text-neutral-300">Resources</h4>
            <ul className="space-y-3 text-neutral-500 text-xs">
              <li><a href="#" className="hover:text-white transition-colors duration-200">partner with us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">calculators</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">tech blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold tracking-wider uppercase text-xs mb-6 font-mono text-neutral-300">Policy</h4>
            <ul className="space-y-3 text-neutral-500 text-xs">
              <li><a href="#" className="hover:text-white transition-colors duration-200">privacy policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">terms & conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">transactions security</a></li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Stamp */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 gap-4">
          <p>© 2020-26 Dreamplug Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-neutral-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Instagram</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;