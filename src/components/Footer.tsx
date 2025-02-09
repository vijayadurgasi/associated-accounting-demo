
export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-slate mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate/70 hover:text-slate transition-colors">Features</a></li>
              <li><a href="#" className="text-slate/70 hover:text-slate transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate/70 hover:text-slate transition-colors">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate/70 hover:text-slate transition-colors">About</a></li>
              <li><a href="#" className="text-slate/70 hover:text-slate transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate/70 hover:text-slate transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate/70 hover:text-slate transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate/70 hover:text-slate transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate/70 hover:text-slate transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-slate mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate/70 hover:text-slate transition-colors">Privacy</a></li>
              <li><a href="#" className="text-slate/70 hover:text-slate transition-colors">Terms</a></li>
              <li><a href="#" className="text-slate/70 hover:text-slate transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-slate/70">
            © {new Date().getFullYear()} Associate Accounting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
