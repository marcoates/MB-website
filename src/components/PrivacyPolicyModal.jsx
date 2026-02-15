import React, { useState } from "react";
import "./PrivacyPolicyModal.css";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import PolicyIcon from "@mui/icons-material/Policy";

export default function PrivacyPolicyModal({ isOpen, onClose, trigger }) {
  const [internalOpen, setInternalOpen] = useState(false);

  // Support both controlled (isOpen/onClose) and uncontrolled (trigger) usage
  const isControlled = isOpen !== undefined;
  const showModal = isControlled ? isOpen : internalOpen;
  const handleClose = isControlled ? onClose : () => setInternalOpen(false);
  const handleOpen = () => setInternalOpen(true);

  return (
    <>
      {!isControlled &&
        (trigger ? (
          <span onClick={handleOpen}>{trigger}</span>
        ) : (
          <button className="privacyPolicyTrigger" onClick={handleOpen}>
            Privacy Policy
          </button>
        ))}

      {showModal &&
        createPortal(
          <AnimatePresence mode="wait">
            <motion.div
              key="privacyBackground"
              className="backgroundPopup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={handleClose}
            >
              <motion.div
                className="popupContainer privacyPopupContainer"
                key="privacyPopupContainer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="popupContainerTopBar">
                  <div className="popupTitleContainer">
                    <PolicyIcon
                      fontSize="large"
                      style={{ color: "#ff0000" }}
                    />
                    <h1 className="popupTitle">PRIVACY POLICY</h1>
                  </div>
                  <button className="popupExit" onClick={handleClose}>
                    X
                  </button>
                </div>

                <div className="privacyPopupBody">
                  <p className="privacyLastUpdated">
                    Last updated: February 15, 2026
                  </p>

                  <section className="privacySection">
                    <h2>1. Introduction</h2>
                    <p>
                      This website is a personal portfolio owned and operated by
                      Marco Braggion. It is designed to showcase my professional
                      work and skills. This Privacy Policy explains how I handle
                      any information collected through this website.
                    </p>
                  </section>

                  <section className="privacySection">
                    <h2>2. Data Controller</h2>
                    <p>
                      Marco Braggion
                      <br />
                      Milan, Italy
                      <br />
                      Email: marco.braggion92@gmail.com
                    </p>
                  </section>

                  <section className="privacySection">
                    <h2>3. Data Collected via Contact Form</h2>
                    <p>
                      If you use the contact form on this website, the following
                      information may be collected:
                    </p>
                    <ul>
                      <li>Name</li>
                      <li>Email address</li>
                      <li>Phone number (optional)</li>
                      <li>Message content</li>
                    </ul>
                    <p>
                      This data is collected solely to respond to your inquiry
                      and is not used for any other purpose, nor shared with
                      third parties. The contact form is processed via{" "}
                      <a
                        href="https://www.emailjs.com/docs/legal/privacy-policy/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        EmailJS
                      </a>
                      , which acts as a data processor to deliver your message to
                      my email inbox.
                    </p>
                  </section>

                  <section className="privacySection">
                    <h2>4. Third-Party Embeds</h2>
                    <p>
                      This website embeds videos from YouTube using the
                      privacy-enhanced mode (
                      <code>youtube-nocookie.com</code>). In this mode, YouTube
                      does not set cookies on your device unless you interact
                      with the video player. When you play an embedded video,
                      YouTube's own{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>{" "}
                      applies.
                    </p>
                  </section>

                  <section className="privacySection">
                    <h2>5. Hosting</h2>
                    <p>
                      This website is hosted on GitHub Pages. GitHub may collect
                      technical information such as IP addresses in their server
                      logs. For more details, please refer to{" "}
                      <a
                        href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub's Privacy Statement
                      </a>
                      .
                    </p>
                  </section>

                  <section className="privacySection">
                    <h2>6. Cookies</h2>
                    <p>
                      This website does not use its own cookies or analytics
                      tools. No tracking, profiling, or advertising cookies are
                      set by this website. Third-party embeds (such as YouTube)
                      may set cookies only upon user interaction, as described
                      above.
                    </p>
                  </section>

                  <section className="privacySection">
                    <h2>7. Your Rights</h2>
                    <p>
                      Under the GDPR, you have the right to access, correct, or
                      delete any personal data I may hold about you (e.g., data
                      submitted via the contact form). To exercise these rights,
                      please contact me at{" "}
                      <a href="mailto:marco.braggion92@gmail.com">
                        marco.braggion92@gmail.com
                      </a>
                      .
                    </p>
                  </section>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.getElementById("portal")
        )}
    </>
  );
}
