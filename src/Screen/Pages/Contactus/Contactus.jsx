import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-4 mt-8 flex-grow"> {/* Added flex-grow */}
        <div className="w-full mb-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Feel Free To Contact Us</h1>
        </div>
        <div className="w-full mb-8">
          <iframe
            className="w-full h-64 md:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.125861034234!2d-122.08424968469236!3d37.421999979825366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24e92a1777b%3A0xf3c4dba8f31e3b6d!2sGoogleplex!5e0!3m2!1sen!2sus!4v1607481081216!5m2!1sen!2sus"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form action='https://formspree.io/f/mbjnvwqq' method='POST'>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="username"
                  autoComplete='off'
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="email"
                  autoComplete='off'
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name='message'
                  rows="4"
                  placeholder="Your message"
                  autoComplete='off'
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <input
                  type="submit"
                  value="Send"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                />
              </div>
            </form>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Our Office</h2>
            <div className="mb-4 flex items-center">
              <i className="fas fa-map-marker-alt text-blue-500 mr-2"></i>
              <p>1600 Amphitheatre Parkway, Mountain View, CA 94043</p>
            </div>
            <div className="mb-4 flex items-center">
              <i className="fas fa-phone-alt text-blue-500 mr-2"></i>
              <p>+1 123 456 7890</p>
            </div>
            <div className="mb-4 flex items-center">
              <i className="fas fa-envelope text-blue-500 mr-2"></i>
              <p>info@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
