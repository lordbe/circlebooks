import React from "react";
import "../styles/style.css";
import { NavLink } from "react-router-dom";

export const BookstoreExperience = () => {
  return (
    <div className="bookstore-experience">
      <div className="type-simple-website">
        <div className="brand">
          <img className="img" alt="Icon" src="https://c.animaapp.com/b29AHa7X/img/icon@2x.png" />
          <img
            className="circlepos-com-normal"
            alt="Circlepos com normal"
            src="https://c.animaapp.com/b29AHa7X/img/circlepos-com-normal-1@2x.png"
          />
        </div>
        <div className="nav-links">
          <div className="nav-link">
            <div className="nav-label">Browse Books</div>
          </div>
          <div className="nav-link">
            <div className="nav-label">Our Story</div>
          </div>          
          <button className="button">
            <div className="text-container">
              <button className="CTA">User Login</button>
            </div>
          </button>
          <button className="text-container-wrapper">
            <div className="text-container">
              <button className="text-wrapper">Create Account</button>
            </div>
          </button>
        </div>
      </div>
      <div className="type-stacked-medium">
        <div className="content">
          <div className="div">
            <p className="figma-ipsum">Explore our curated selection of books.</p>
            <p className="p">Join our community of book lovers and discover your next read.</p>
            <div className="button-combo">
              <div className="CTA-button">
                <div className="CTA-wrapper">                                  
                  <NavLink
                    to={{
                      pathname: "/books"                      
                    }}
                    className={({ isActive }) =>
                      `nav-link ${
                        isActive ? "active" : ""
                      } link-warning link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover`
                    }
                  >
                    Start Your Journey
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="image-container">
            <img
              className="image-lummi"
              alt="Image lummi"
              src="https://c.animaapp.com/b29AHa7X/img/image---lummi.svg"
            />
          </div>
        </div>
      </div>
      <div className="property-image">
        <img className="image-lummi-2" alt="Image lummi" src="https://c.animaapp.com/b29AHa7X/img/image----lummi.svg" />
        <div className="copy-component">
          <div className="heading-container">
            <div className="sign-up-heading">Join Us Now</div>
            <div className="subheading">Take the Next Step!</div>
          </div>
          <a className="google-login" href="https://myaccount.google.com/" rel="noopener noreferrer" target="_blank">
            <img className="img" alt="Google icon" src="https://c.animaapp.com/b29AHa7X/img/google-icon.svg" />
            <div className="continue-with-google">Sign in with Google</div>
          </a>
          <div className="separator">
            <div className="line" />
            <div className="text-wrapper-2">or</div>
            <div className="line" />
          </div>
          <div className="form">
            <div className="input">
              <div className="label">Enter your username</div>
              <div className="input-form">
                <div className="placeholder-text-wrapper">
                  <div className="placeholder-text">Choose a strong password</div>
                </div>
              </div>
            </div>
            <button className="div-wrapper">
              <div className="text-container-2">
                <button className="CTA-3">Sign in with Email</button>
              </div>
            </button>
          </div>
          <p className="by-continuing-you">By signing in, you accept our Terms and Privacy Policy.</p>
        </div>
      </div>
      <div className="property-image-2">
        <div className="contact-image-lummi" />
        <div className="contact-copy">
          <div className="copy">
            <div className="heading">Connect with Us</div>
            <div className="description">Join the Book Community</div>
          </div>
          <div className="input-2">
            <div className="label">Full Name</div>
            <div className="input-form-2">
              <div className="text-container-3">
                <div className="placeholder-text">Your Name Here</div>
              </div>
            </div>
          </div>
          <div className="input-2">
            <div className="label">Your Email Address</div>
            <div className="input-form-2">
              <div className="text-container-3">
                <div className="placeholder-text">Your Email Here</div>
              </div>
            </div>
          </div>
          <div className="input-3">
            <div className="label">Your Message Here</div>
            <div className="input-form-3">
              <div className="text-container-3">
                <div className="placeholder-text">Type your message</div>
              </div>
            </div>
          </div>
          <button className="button-2">
            <div className="text-container-4">
              <button className="CTA-4">Send Message</button>
            </div>
          </button>
        </div>
      </div>
      <div className="type-single-row-CTA">
        <div className="container">
          <div className="copy-component-2">
            <div className="heading-text">
              <p className="heading-2">Discover Your Next Favorite Book</p>
              <p className="subheading-2">Explore a world of stories and knowledge.</p>
            </div>
            <div className="button-combo-2">
              <button className="CTA-button-2">
                <button className="text-container-5">
                  <button className="CTA-4">Learn More</button>
                </button>
              </button>
              <div className="secondary-button">
                <div className="text-container-6">
                  <button className="CTA-5">View Details</button>
                </div>
              </div>
            </div>
          </div>
          <div className="image-lummi-3" />
        </div>
      </div>
      <div className="type-simple">
        <div className="col-3">
          <div className="column">
            <img className="logo" alt="Logo" src="https://c.animaapp.com/b29AHa7X/img/circlepos-com-normal-1@2x.png" />
            <div className="links">
              <div className="link">Learn About Us</div>
              <div className="link">Our Work</div>
              <div className="link">Follow Us</div>
              <div className="link">Get in Touch</div>
            </div>
          </div>

          <div className="col-3">
          <div className="actions">
            <div className="heading-3">Subscribe for Updates</div>
            <div className="form-2">
              <input className="text-input" placeholder="Your Email Here" type="email" />
              <button className="button-wrapper">
                <button className="button-3">Subscribe Now</button>
              </button>
            </div>
            <p className="text">You agree to our Privacy Policy by subscribing.</p>
          </div>
          </div>
        </div>
        <div className="credits">
          <div className="divider" />
          <div className="div-2">
            <div className="footer-links">
              <div className="text-wrapper-3">Privacy Policy</div>
              <div className="text-wrapper-3">Terms of Service</div>
              <div className="text-wrapper-3">Cookie Preferences</div>
            </div>
            <p className="text-wrapper-3">© 2024 Books. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
