import { Container, Logo } from "../UI/UiComponent";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10  text-white">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1: Logo + Contact + Social */}
        <div className="space-y-">
          
    {/* < Logo /> */}

          {/* Contact Info */}
          <div className="text-sm space-y-1 text-white/80">
            <a href="/" target="_blank" rel="noopener noreferrer">bluenosemarketing.com</a>
            <p>+91 72319 20002</p>
            <p>+1 (902) 448-5080</p>
           
          </div>

         {/* Social Icons with SVG */}
<div className="flex gap-4 pt-2 mb-4 h-10 mt-10">
  {/* Facebook */}
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <svg
      className="w-5 h-10"
      fill="#ffffff"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.24h3.128V8.412c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.31h3.587l-.467 3.466h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
    </svg>
  </a>

  {/* Twitter / X */}
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <svg
     className="w-5 h-10"
      fill="#ffffff"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 4.557a9.828 9.828 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.555 4.897 4.897 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.513 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z" />
    </svg>
  </a>

  {/* Instagram */}
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <svg
     className="w-5 h-10"
      fill="#ffffff"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.246 2.428.415a4.92 4.92 0 0 1 1.77 1.004 4.92 4.92 0 0 1 1.003 1.77c.17.459.359 1.258.415 2.428.058 1.266.069 1.645.069 4.849s-.012 3.584-.07 4.85c-.056 1.17-.246 1.97-.415 2.428a4.916 4.916 0 0 1-1.003 1.77 4.916 4.916 0 0 1-1.77 1.003c-.459.17-1.258.359-2.428.415-1.266.058-1.645.069-4.85.069s-3.584-.012-4.85-.07c-1.17-.056-1.97-.246-2.428-.415a4.922 4.922 0 0 1-1.77-1.003 4.922 4.922 0 0 1-1.003-1.77c-.17-.459-.359-1.258-.415-2.428C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.056-1.17.246-1.97.415-2.428a4.918 4.918 0 0 1 1.003-1.77 4.918 4.918 0 0 1 1.77-1.003c.459-.17 1.258-.359 2.428-.415C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.013 7.052.072 5.771.131 4.763.313 4.01.637a6.92 6.92 0 0 0-2.513 1.63A6.92 6.92 0 0 0 .637 4.01c-.324.753-.506 1.761-.565 3.042C.013 8.332 0 8.736 0 12c0 3.264.013 3.668.072 4.948.059 1.281.241 2.289.565 3.042a6.922 6.922 0 0 0 1.63 2.513 6.922 6.922 0 0 0 2.513 1.63c.753.324 1.761.506 3.042.565C8.332 23.987 8.736 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.289-.241 3.042-.565a6.922 6.922 0 0 0 2.513-1.63 6.922 6.922 0 0 0 1.63-2.513c.324-.753.506-1.761.565-3.042.059-1.28.072-1.684.072-4.948s-.013-3.668-.072-4.948c-.059-1.281-.241-2.289-.565-3.042a6.92 6.92 0 0 0-1.63-2.513 6.92 6.92 0 0 0-2.513-1.63c-.753-.324-1.761-.506-3.042-.565C15.668.013 15.264 0 12 0z" />
      <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
      <circle cx="18.406" cy="5.594" r="1.44" />
    </svg>
  </a>

  {/* YouTube */}
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <svg
      className="w-5 h-10"
      fill="#ffffff"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.498 6.186a2.997 2.997 0 0 0-2.116-2.116C19.539 3.5 12 3.5 12 3.5s-7.539 0-9.382.57a2.997 2.997 0 0 0-2.116 2.116C.5 8.03.5 12 .5 12s0 3.97.57 5.814a2.997 2.997 0 0 0 2.116 2.116C4.461 20.5 12 20.5 12 20.5s7.539 0 9.382-.57a2.997 2.997 0 0 0 2.116-2.116C23.5 15.97 23.5 12 23.5 12s0-3.97-.002-5.814zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <svg
     className="w-5 h-10"
      fill="#ffffff"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.849-3.037-1.849 0-2.132 1.445-2.132 2.938v5.668H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.369-1.849 3.602 0 4.268 2.371 4.268 5.456v6.284zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07s.926-2.07 2.07-2.07 2.07.926 2.07 2.07-.926 2.07-2.07 2.07zm1.777 13.019H3.56V9h3.554v11.452z" />
    </svg>
  </a>

 {/* TikTok */}
{/* <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
  <svg
    className="w-5 h-10"
    viewBox="0 0 256 256"
    fill="#ffffff"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M216 88c0 48.523-39.477 88-88 88s-88-39.477-88-88 39.477-88 88-88v48c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40V0h48v88z" />
  </svg>
</a> */}

</div>

        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href="/services/social-media">Social Media</a></li>
            <li><a href="/services/paid-advertising">Graphic Designing</a></li>
            <li><a href="/services/seo">Video Editing</a></li>
            <li><a href="/services/influencer-marketing">VideoGraphy</a></li>
            {/* <li><a href="/services/content-marketing">Content Marketing</a></li> */}
            {/* <li><a href="/services/design">Digital Design</a></li> */}
            {/* <li><a href="/services/development">Web & Mobile Development</a></li> */}
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