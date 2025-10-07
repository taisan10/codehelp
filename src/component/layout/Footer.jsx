import { Container, Logo } from "../UI/UiComponent";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 bg-black  text-white">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1: Logo + Contact + Social */}
        <div className="space-y-">
          
    {/* < Logo /> */}

          {/* Contact Info */}
          <div className="text-sm space-y-1 text-white/80">
            <a href="https://bluenosemarketing.com" target="_blank" rel="noopener noreferrer">bluenosemarketing.com</a>
            <p>+91 72319 20002</p>
            <p>+1 (902) 718-9007</p>
           
          </div>

          {/* Social Icons with iframe or SVG */}
         <div className="flex gap-4 pt-2 mb-4 bg-gray-50 h-20 mt-10 rounded-xl">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook" className="w-10 h-6 mt-5" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.simpleicons.org/x/000000" alt="Twitter (X)" className="w-10 h-6 mt-5" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" className="w-10 h-6 mt-5" />
  </a>
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.simpleicons.org/youtube/FF0000" alt="YouTube" className="w-10 h-6 mt-5" />
  </a>
  {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <img src="https://www.svgrepo.com/show/475661/linkedin-color.svg" alt="LinkedIn" className="w-10 h-6 mt-5" />
  </a> */}
  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.simpleicons.org/tiktok/000000" alt="TikTok" className="w-10 h-6 mt-5" />
  </a>
</div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="/services/social-media">Social Media</a></li>
            <li><a href="/services/paid-advertising">Paid Advertising</a></li>
            <li><a href="/services/seo">SEO</a></li>
            <li><a href="/services/influencer-marketing">Influencer Marketing</a></li>
            <li><a href="/services/content-marketing">Content Marketing</a></li>
            <li><a href="/services/design">Digital Design</a></li>
            <li><a href="/services/development">Web & Mobile Development</a></li>
          </ul>
        </div>

        {/* Column 3: Industries */}
        <div>
          <h4 className="font-semibold mb-4">Industries</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="/industries/b2b">B2B</a></li>
            <li><a href="/industries/b2c">B2C</a></li>
            <li><a href="/industries/saas">SaaS</a></li>
            <li><a href="/industries/fintech">Fintech</a></li>
            <li><a href="/industries/ecommerce">Ecommerce</a></li>
            <li><a href="/industries/crypto">Crypto</a></li>
            <li><a href="/industries/gaming">Gaming</a></li>
          </ul>
        </div>

        {/* Column 4: Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="/about">About Us</a></li>
            <li><a href="/success-stories">Success Stories</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/academy">Ninja Academy</a></li>
            <li><a href="/affiliate">Affiliate Program</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </Container>

      {/* Embedded Map */}
      <Container>
        <div className="w-full h-80 rounded-xl overflow-hidden ring-1 ring-white/10 mt-10">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.4654753839936!2d-63.63251087902276!3d44.659525482942136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a213a9bb324a1%3A0x893bde709f90f7dc!2sBluenose%20Studio!5e0!3m2!1sen!2sca!4v1759469414406!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Bluenose Digital Marketing. All rights reserved. &nbsp;
        <a href="/terms" className="underline">Terms of Service</a> |{" "}
        <a href="/privacy" className="underline">Privacy Policy</a> |{" "}
        <a href="/cookies" className="underline">Cookie Policy</a> 
      </div>
    </footer>
  );
}