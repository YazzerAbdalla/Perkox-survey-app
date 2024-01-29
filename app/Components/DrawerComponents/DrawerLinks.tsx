import { useDataContext } from "@/contexts/DataContext";
import React from "react";
import GenerateQRCode from "./Qr";
import { useDrawerTabs } from "@/contexts/DrawerTabs";

interface DrawerLinksProps {
  cardId: number;
}

const DrawerLinks = ({ cardId }: DrawerLinksProps) => {
  const { drawerTab } = useDrawerTabs();
  const { dataArr } = useDataContext();

  // Use explicit type for the id parameter
  const selectedCard = dataArr.find(({ id }: { id: number }) => cardId === id);

  // Show links content only when drawerTab is "links" and selectedCard is available
  const showLinks = drawerTab === "links" && selectedCard;

  return (
    <>
      {showLinks && (
        <div className="new-offer-popup__content gap-4 z-[1000] p-4 w-full overflow-y-scroll ">
          <div className="new-offer-popup__links">
            <div className="qrcode-wrapper">
              <div id="qrcode" title={selectedCard?.url}>
                <GenerateQRCode url={selectedCard?.url} />
              </div>
              <div className="text-content">
                <span className="title">QR code</span>
                <p className="text">
                  Scan the generated image code with your{" "}
                  {selectedCard?.os === "android"
                    ? "Android"
                    : selectedCard?.os === "ios"
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