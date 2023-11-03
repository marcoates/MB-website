import React, { useState } from "react";
import "./Modal.css";
import "./Header.css";
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import emailjs from "@emailjs/browser";

export default function Modal(props) {
  const [popupClick, popupClickSet] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:1000px)");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSend(true);
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)
  };

  return (
    <>
      <button className="contactButton" onClick={() => popupClickSet(true)}>
        CONTACT ME
      </button>

      {popupClick &&
       createPortal(
        <>
          <AnimatePresence mode="wait">
            <motion.div
              key="background"
              className="backgroundPopup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
            <AnimatePresence mode="wait">
          {isSend ?
              <motion.div
                className="popupContainer"
                key="popupContainer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="popupContainerTopBar">
                  <div className="popupTitleContainer">
                    <ChatIcon fontSize="large" style={{ color: "#ff0000" }} />
                    <h1 className="popupTitle">LET'S CHAT!</h1>
                  </div>
                  <button
                    className="popupExit"
                    onClick={() =>
                    {
                    setIsSend(false);
                    popupClickSet(false)
                    }
                    }
                  >
                    X
                  </button>
                </div>
                <div className="popupContainerBodySend">
                <div className="bodySendImgContainer">
                  <img className="bodySendImg" alt="bodySendImg" src={require("../assets/At-the-desk.gif")}></img>
                </div>
                <div className="bodySendMsg">
                <h1>Thanks for your Message!</h1>
                  <p>I will respond to your request as soon as possible!</p>
                </div>
                </div>
              </motion.div>
   :
              <motion.div
                className="popupContainer"
                key="popupContainer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="popupContainerTopBar">
                  <div className="popupTitleContainer">
                    <ChatIcon fontSize="large" style={{ color: "#ff0000" }} />
                    <h1 className="popupTitle">LET'S CHAT!</h1>
                  </div>
                  <button
                    className="popupExit"
                    onClick={() => popupClickSet(false)}
                  >
                    X
                  </button>
                </div>
                <div className="popupContainerBody">
                  <ul className="popupListTextRocket">
                    <motion.li
                      className="popupRocket"
                      initial={{ x: 0, y: 0 }}
                      animate={{ x: -2, y: -2 }}
                      transition={{
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 0.5,
                      }}
                    >
                      🚀
                    </motion.li>
                    <motion.li className="popupText">
                      Let’s talk about the best solution {isSmallScreen ? null : <br />} to boost up your business image!
                    </motion.li>
                  </ul>
                  <form className="popupForm" name="contactForm" placeholder="Name" onSubmit={sendEmail}>
                    <div className="poupTextAreaContainer">
                      <PersonIcon fontSize="small" className="popupIcon"/>
                      <input
                      type="text"
                        className="popupTextArea"
                        id="1"
                        name="user_name"
                        rows="1"
                        placeholder="Name"
                      ></input>
                    </div>
                    <div className="poupTextAreaContainer">
                      <EmailIcon fontSize="small" className="popupIcon" />
                      <input
                      type="text"
                        className="popupTextArea"
                        id="2"
                        name="user_email"
                        rows="1"
                        cols="50"
                        placeholder="Email"
                      ></input>
                    </div>
                    <div className="poupTextAreaContainer">
                      <LocalPhoneIcon fontSize="small" className="popupIcon" />
                      <input
                      type="text"
                        className="popupTextArea"
                        id="3"
                        name="user_phone"
                        rows="1"
                        cols="50"
                        placeholder="Phone number"
                      ></input>
                    </div>
                    <textarea
                      className="popupTextAreaMessage"
                      id="4"
                      name="user_message"
                      rows="4"
                      cols="50"
                      placeholder="Message"
                    ></textarea>
                    <div className="checkboxContainer">
                      <input type="checkbox" style={{height: isSmallScreen && "25px", width: isSmallScreen && "25px"}}></input>
                      <label>
                        I consent to having this website store my submitted
                        information so they can respond to my inquiry.
                      </label>
                    </div>
                    <button className="popupSend">SEND</button>
                  </form>
                </div>
              </motion.div>}
              </AnimatePresence>
               
              </motion.div>
            </AnimatePresence>
            </>
            ,
            document.getElementById("portal")
          )}
    </>
  );
}
