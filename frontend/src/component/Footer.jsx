import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";
import us from "../assets/US.png"
import Frame from "../assets/Frame.png";
import "../styles/Footer.css";

function Footer() {
  const [accordion_1, setaccordion_1] = useState(false);
  const [accordion_2, setaccordion_2] = useState(false);
  const [accordion_3, setaccordion_3] = useState(false);

  return (
    <div className="footer">
      <div className="contact">
        <div>
          <h1>BE THE FIRST TO KNOW</h1>
          <p>Sign up for updates from mettā muse.</p>
          <div>
            <input type="text" placeholder="Enter you Email..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div>
          <div>
            <h1>CONTACT US</h1>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>
          <div>
            <h1>CURRENCY</h1>
            <div className="usd">
              <img src={us} />
              <div>USD</div>
            </div>
            <p>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>
      <div className="details">
        <div
          className="accordion_1"
          onClick={() => setaccordion_1(!accordion_1)}
        >
          <div>
            <h1>mettā muse</h1>
            {accordion_1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          <div className={`accordion_content ${accordion_1 ? "show" : ""}`}>
            <p>About Us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
          </div>
        </div>

        <div
          className="accordion_2"
          onClick={() => setaccordion_2(!accordion_2)}
        >
          <div>
            <h1>Quick Links</h1>
            {accordion_2 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
          <div className={`accordion_content ${accordion_2 ? "show" : ""}`}>
            <p>Orders & Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>

        <div
          onClick={() => setaccordion_3(!accordion_3)}
          className="accordion_3"
        >
          <div>
            <h1>Follow Us</h1>
            {accordion_3 ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>

          <div className={`accordion_content ${accordion_3 ? "show" : ""}`}>
            <RiInstagramFill />
            <IoLogoLinkedin />
          </div>
          <div>
          <h1>mettā muse Accepts</h1>
          <img className="img" src={Frame} alt="frame" />
        </div>
        </div>

       
      </div>

      <div className="copyright">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
