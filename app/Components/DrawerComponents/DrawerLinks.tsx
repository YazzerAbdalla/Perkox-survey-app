import { useDataContext } from "@/contexts/DataContext";
import { useDrawerTabs } from "@/contexts/DrawerTabs";
import React from "react";
import GenerateQRCode from "./Qr";

interface DrawerHeaderProps {
  cardId: number;
}

const DrawerLinks = ({ cardId }: DrawerHeaderProps) => {
  const { drawerTab } = useDrawerTabs();
  let showLinks = drawerTab == "links" ? true : false;
  const { dataArr } = useDataContext();

  const selectedCard = dataArr.filter(({ id }) => cardId == id);

  return (
    <>
    {showLinks && selectedCard.length > 0 && (
        <div className="new-offer-popup__content gap-4 z-[1000] p-4 w-full overflow-y-scroll ">
          <div className="new-offer-popup__email-form">
            <span className="title">E-mail to your Phone</span>
            <span className="horizontal-line"></span>
            <form action="post">
              <label htmlFor="user-email" className="user-email">
                Your e-mail
                <input
                  type="email"
                  id="user-email"
                  placeholder="Your email"
                  name="user_email"
                />
                <span
                  className="invalid-input"
                  style={{ display: "none" }}
                ></span>
                <div
                  data-lastpass-icon-root="true"
                  style={{
                    position: "relative",
                    height: "0px",
                    width: "0px",
                    float: "left",
                  }}
                ></div>
              </label>
              <div
                className="g-recaptcha"
                data-sitekey="6Ld11csoAAAAAFBhyrUgOlA6CsnVoO7S8FqgZswq"
              >
                <div style={{ width: "304px", height: "78px" }}>
                  <div>
                    <iframe
                      title="reCAPTCHA"
                      width="304"
                      height="78"
                      role="presentation"
                      name="a-hgytjtxca1q7"
                      scrolling="no"
                      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                      src="https://www.google.com/recaptcha/api2/anchor?ar=2&amp;k=6Ld11csoAAAAAFBhyrUgOlA6CsnVoO7S8FqgZswq&amp;co=aHR0cHM6Ly90b3JveC5pbzo0NDM.&amp;hl=en&amp;v=u-xcq3POCWFlCr3x8_IPxgPu&amp;size=normal&amp;cb=73uzpot2xoyg"
                    ></iframe>
                  </div>
                  <textarea
                    id="g-recaptcha-response"
                    name="g-recaptcha-response"
                    className="g-recaptcha-response"
                    style={{
                      width: "250px",
                      height: "40px",
                      border: "1px solid rgb(193, 193, 193)",
                      margin: "10px 25px",
                      padding: "0px",
                      resize: "none",
                      display: "none",
                    }}
                  ></textarea>
                </div>
                <iframe style={{ display: " none" }}></iframe>
              </div>
              <label htmlFor="agreement" className="agreement">
                <input type="checkbox" id="agreement" name="is_tc_checked" />
                <span className="checkmark"></span>
                By providing your email address and checking this box, you agree
                that the info will be used by Torox in order to provide you an
                improved service.
              </label>
              <div className="actions">
                <p className="text">We will never share or spam your email!</p>
                <button className="btn violet">Send</button>
              </div>
              <span className="response-message"></span>
            </form>
          </div>
          <div className="new-offer-popup__links">
            <div className="qrcode-wrapper">
              <div id="qrcode" title={selectedCard[0].url}>
                <GenerateQRCode url={selectedCard[0].url} />
              </div>
              <div className="text-content">
                <span className="title">QR code</span>
                <p className="text">
                  Scan the generated image code with your{" "}
                  {selectedCard[0].os == "android"
                    ? "Android"
                    : selectedCard[0].os == "ios"
                    ? "iOS"
                    : "Desktop"}{" "}
                  device
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DrawerLinks;