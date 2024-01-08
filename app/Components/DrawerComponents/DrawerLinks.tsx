import { useDataContext } from "@/contexts/DataContext";
import { useDrawerTabs } from "@/contexts/DrawerTabs";
import Image from "next/image";
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
      {showLinks && (
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
              <div
                id="qrcode"
                title="https://torox.io/click_track/track/19631556/30382/q584w5u2o2x5i5g474/15307/web/5/y?tag=desktop_ifr&amp;src=w2m_qr"
              >
                <canvas
                  width="147"
                  height="147"
                  style={{ display: " none" }}
                ></canvas>
                {/* <Image
                  width={147}
                  height={147}
                  src="data:image/png;base64,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"
                  style={{ display: "block" }}
                  alt="QR-code"
                /> */}
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
