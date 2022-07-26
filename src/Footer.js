import cheers from './BrownSugar.jpeg'
import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer className="text-gray-500 bg-yellow-100 lg:grid lg:grid-cols-5">
  <aside className="hidden lg:relative lg:col-span-2 lg:block">
    <img
      className='absolute inset-0 object-cover w-full h-full blur-sm'
      src={cheers}
      alt="Bubble Tea Blur BG img"
    />
       <img
      className="absolute inset-0 object-contain w-full h-full"
      src={cheers}
      alt="Bubble Tea"
    /> 
  </aside>

  <div className="px-4 py-16 sm:px-6 lg:px-8 lg:col-span-3">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p className="font-medium">
          <span className="text-xs tracking-widest uppercase">
            Store 
          </span>

          <a className="block text-2xl sm:text-3xl hover:opacity-75" href="google.com">
            732-478-2141
          </a>
        </p>

        <ul className="mt-8 space-y-2 text-sm">
          <li>Monday to Friday: 11am - 8pm</li>
          <li>Weekend: 11am - 9pm</li>
        </ul>

        <div className="flex mt-16 space-x-3">
          <a className="p-2 border rounded-full border-white/25 hover:opacity-75" href="google.com" target="_blank" rel="noreferrer">
            <span className="sr-only"> Facebook </span>

            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </svg>
          </a>

          <a className="p-2 border rounded-full border-white/25 hover:opacity-75" href="google.com" target="_blank" rel="noreferrer">
          <span className="sr-only"> Instagram </span>

            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
            </svg>
          </a>

            <a className="p-2 border rounded-full border-white/25 hover:opacity-75" href="google.com" target="_blank" rel="noreferrer">
            <span className="sr-only"> Tik-Tok </span>

            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
           <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>TikTok</title><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
            </svg>
          </a>

        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium">
            CONTACT US
          </p>

          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" href="google.com"> FAQs </a>
            <a className="hover:opacity-75" href="google.com"> Support </a>
            <a className="hover:opacity-75" href="google.com"> Gift Cards </a>
          </nav>
        </div>

        <div>
          <p className="font-medium">ABOUT US</p>

          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" href="google.com"> Products </a>
            <a className="hover:opacity-75" href="google.com"> Nutrition </a>
            <a className="hover:opacity-75" href="google.com"> Teas </a>
          </nav>
        </div>
      </div>
    </div>

    <div className="pt-12 mt-12 border-t border-gray-800">
      <div className="text-sm text-gray-700 sm:items-center sm:justify-between sm:flex">
        <div className="flex space-x-3">
          <a className="hover:opacity-75" href="google.com"> Privacy Policy </a>
          <a className="hover:opacity-75" href="google.com"> Terms & Conditions </a>
          <a className="hover:opacity-75" href="google.com"> In Store Purchase Policy </a>
        </div>

        <p className="mt-4 sm:mt-0">
          &copy; 2022 Amoria Tea
        </p>
      </div>

      <p className="mt-8 text-xs text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia quia quod repellendus. Porro harum,
        odio dolore perspiciatis praesentium provident esse consequatur quibusdam aperiam, cupiditate omnis modi in
        quasi? In, maxime odio vel repellat sed earum? Debitis quaerat facilis animi. Odio natus nostrum laboriosam
        impedit magnam praesentium asperiores consectetur ipsum.
      </p>
    </div>
  </div>
</footer>
        </div>
    );
}

export default Footer;