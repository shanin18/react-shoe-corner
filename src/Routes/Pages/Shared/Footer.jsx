import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h5 className="text-lg font-semibold mb-4">About Us</h5>
            <p className="text-sm">
              We are a shoe ecommerce website that provides the latest and
              greatest shoe styles for our customers.
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
            <p className="text-sm mb-2">123 Main St</p>
            <p className="text-sm mb-2">Anytown, USA 12345</p>
            <p className="text-sm mb-2">Phone: 555-555-5555</p>
            <p className="text-sm">Email: info@shoeCorner.com</p>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <ul className="flex space-x-4">
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">
            &copy; 2023 ShoeCorner. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
