/* eslint-disable @next/next/no-img-element */
import {useDataContext} from "@/contexts/DataContext";
import {useDrawerTabs} from "@/contexts/DrawerTabs";
import React, {useEffect} from "react";
import Image from "next/image";
import {detectDeviceType} from "@/lib/DetectDevice";
import {useDeviceType} from "@/contexts/DeviceTypeContext";

interface DrawerHeaderProps {
    cardId: number;
}

const DrawerDetails = ({cardId}: DrawerHeaderProps) => {
    const {drawerTab} = useDrawerTabs();
    const {dataArr} = useDataContext();
    const hrStyle: React.CSSProperties = {borderColor: "black"};
    const { deviceType, setDeviceType } = useDeviceType();

    useEffect(() => {
        let userAgent = window.navigator.userAgent;
        const currentDeviceType = detectDeviceType(userAgent);
        setDeviceType(currentDeviceType);
    }, []);

    // Use find instead of filter to get a single selected card
    const selectedCard = dataArr.find(({id}) => cardId === id);

    // Check if selectedCard is not defined
    if (!selectedCard) {
        return null;
    }

    let showDetail = drawerTab === "details";


    return (
        <>
            {showDetail && (
                <div className="z-[1000] w-full gap-4 new-offer-popup__text-content overflow-y-scroll flex flex-col lg:flex-row ">
                    <div className="flex flex-col max-w-xl gap-1 offer-instructions">

                        {/* Render for 'android' or 'ios' only and not for 'web' */}
                        { (selectedCard?.os === 'android' || selectedCard?.os === 'ios') && deviceType !== 'web' ? (
                            <a className="gaming-button" href={selectedCard?.url} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image src="/Perkox-icon.png" width={16} height={16} alt="reward" className="gaming-icon" />
                                <span className="actual-reward" style={{ marginLeft: '8px' }}>Earn +{selectedCard?.reward} points</span>
                            </a>
                        ) : null}


                        {/* Render for 'web' OR if it's a web */}
                        {selectedCard?.os === 'web' ? (
                            <a className="gaming-button" href={selectedCard?.url} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image src="/Perkox-icon.png" width={16} height={16} alt="reward" className="gaming-icon" />
                                <span className="actual-reward" style={{ marginLeft: '8px' }}>Earn +{selectedCard?.reward} points</span>
                            </a>
                        ) : null}







                        <br />
                        <div className="offer-description text-wrap">
                            <span className="title">Offer description :</span>
                            <h1 className="text-gray-300 font-bold text-sm ">
                                {" "}
                                {selectedCard.name} :{" "}
                            </h1>
                            <p className="description">
                                {" "}
                                {selectedCard.description && selectedCard.description}
                            </p>
                            <span className="title">
                            To enjoy our offerwall, please remember:
                        </span>
                            <p className="text-gray-300 font-bold text-sm ">
                                <ol>
                                    <br />{" "}
                                    <li>
                                        1.Use a genuine device: Emulators are not allowed.
                                        Avoid using VPNs or proxies to ensure accurate
                                        location tracking and the best user experience.
                                    </li>
                                    <br />
                                    <hr />
                                    <br />{" "}
                                    <li>
                                        2.Stick with one device and location: Completing
                                        tasks on the same device and location helps track
                                        your progress.
                                    </li>
                                    <br />
                                    <hr />
                                    <br />{" "}
                                    <li>
                                        3.Time limit: Most offers have a 30-day completion
                                        window unless stated otherwise, but also pay
                                        attention to specified time limits for offer
                                        completion.
                                    </li>
                                    <br />
                                    <hr />
                                    <br />{" "}
                                    <li>
                                        4.New users: If you’re new, you will be able to
                                        enjoy the offers. Existing users may not be eligible
                                        unless specifically mentioned in the offer details.
                                    </li>
                                    <br />
                                    <hr />
                                    <br />{" "}
                                    <li>
                                        5.Reward delivery: Rewards are usually prompt, but
                                        there may be up to a 24-hour delay in some cases.
                                    </li>
                                    <br />
                                    <hr />
                                    <br />{" "}
                                    <li>
                                        6.Mobile app tips: Open the app immediately after
                                        installation for a smooth experience and higher
                                        completion chances.
                                    </li>
                                    <br />
                                    <hr />
                                </ol>
                                <br />
                            </p>
                        </div>
                    </div>
                    {selectedCard.goals && (
                        <div className="new-offer-popup__steps-wrapper w-[50%]">
                            <span className="title">All steps</span>
                            <span className="horizontal-line"></span>
                            <div className="steps">
                                {/* Steps content */}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    );

};

export default DrawerDetails;
