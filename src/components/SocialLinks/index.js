import React from "react";
import stellaIOS from "assets/stella-ios.svg";
import stellaAndroid from "assets/stella-android.svg";

const SocialLinks = ({isPT, isPD}) => {
  let classSetting = `app-linker_badges ${isPT && 'pt-4'} ${isPD && 'pd-4'}`
  return (
    <div className={classSetting}>
      <a
        target="_blank"
        href="https://apps.apple.com/ca/app/stella-stays/id1568217403"
      >
        <img alt="Download on the App Store" src={stellaIOS} className="me-2" />
      </a>

      <a
        target="_blank"
        href="https://play.google.com/store/apps/details?id=ai.stays.stella.guestapp.release&hl=en&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
      >
        <img alt="Download on the Android Store" src={stellaAndroid} />
      </a>
    </div>
  );
};

export default SocialLinks;
