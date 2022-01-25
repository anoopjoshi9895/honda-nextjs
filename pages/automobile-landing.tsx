import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SliderBanners from "../components/slider-banner";
import { useRouter } from "next/router";
import {
  loadAutoMobileLandingPage,
  loadContactUsPage,
} from "../apiService/apiService";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ListCard from "../components/AutomobileLanding/listCard";
import AddressCard from "../components/AutomobileLanding/addressCard";
import CarSlides from "../components/AutomobileLanding/carSlides";
// import { FullPageLoader } from 'components/loader';
// import MetaDetails from 'components/meta-details/MetaDetails';
import { IAutoMobileLandingPage, IContactUs } from "../models/models";

interface CustomProps {
  res: IAutoMobileLandingPage;
  contact: IContactUs;
}
const AutomobileLanding = ({ res, contact }: CustomProps) => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { defaultLocale, isFallback, query } = router;
  // const { loadAuthoMobileLanding, autoMobileLanding } = useCMS();
  const { banner, carSlider, categoryList, locateUs, metaDetails, offer } = res;
  // console.log(res,"res in automobile landing")

  return (
    <>
      {/* {metaDetails && (
        <MetaDetails metaDetails={metaDetails} />
      )} */}
      {banner && <SliderBanners specs={[]} detail={banner ?? []} landing />}
      {categoryList && <ListCard categories={categoryList} />}

      {carSlider && <CarSlides carItems={carSlider} />}

      {offer && locateUs && (
        <AddressCard offer={offer} locateUs={locateUs} contactData={contact} />
      )}
      {/* {!autoMobileLanding && <FullPageLoader />} */}
    </>
  );
};

export const getStaticProps = async ({ locale, locales }: any) => {
  const language = locale;
  var res = await loadAutoMobileLandingPage(language);
  var contact = await loadContactUsPage(language);
  if (!res || !contact) {
    return {
      notFound: true,
      props: {},
      revalidate: 1,
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale,
      locales,
      res,
      contact,
    },
  };
};

export default AutomobileLanding;
