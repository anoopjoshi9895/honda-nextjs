import type { NextPage, GetStaticProps } from "next";
import { store } from "../app/store";
import { getSlideAsync } from "../feature/slideSlice";
import { getNewsAsync } from "../feature/newsSlice";
import SliderBanner from "../components/slider-banner";
import Experiance from "../components/Experience";
import { LandingOffer } from "../components/landing-offer";
import { StayConnected } from "../components/stay-connected";
import NewsItems from "../components/newsItems";
import { useRouter } from "next/router";
import { ILandingScreenData, INewsItem, IFooter } from "../models/models";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/Layout";
import { getFooterAsync } from "../feature/footerSlice";

interface SSRHomeData {
  slide: ILandingScreenData;
  news: INewsItem;
  footerData: IFooter;
}
const Home: NextPage<SSRHomeData> = ({
  slide,
  news,
  footerData,
}: SSRHomeData) => {
  const router = useRouter();
  const {
    topSlider,
    automobileSlider,
    marineSlider,
    powerProductSlider,
    motorcycleSlider,
    offers,
    stayConnected,
  } = slide;

  return (
    <Layout footerData={footerData}>
      <div className="content-wrapper home overflow-hidden">
        <SliderBanner detail={topSlider} />
        <Experiance
          automobileSlider={automobileSlider}
          marineSlider={marineSlider}
          powerProductSlider={powerProductSlider}
          motorcycleSlider={motorcycleSlider}
        />
        <div className="">
          <LandingOffer data={offers} />
        </div>
        <div className="">
          <StayConnected data={stayConnected} />
        </div>

        <div className="">
          <NewsItems data={news} />
        </div>
      </div>
    </Layout>
  );
};


export const getStaticProps: GetStaticProps = async ({
  locale,
  locales,
}: any) => {
  await Promise.all([
    store.dispatch(getNewsAsync(locale)),
    store.dispatch(getSlideAsync(locale)),
    store.dispatch(getFooterAsync(locale)),

  ]);

  const news = store.getState().news.data;
  const slide = store.getState().slide.data;
  const footer = store.getState().footer.data;
  if (!news || !slide || !footer) {
    return {
      notFound: true,
      props: {},
      revalidate: 1,
    };
  } else {
    return {
      props: {
        locale: locale,
        locales: locales,
        ...(await serverSideTranslations(locale, ["common"])),
        slide: slide,
        news: news,
        footerData: footer
      },
      revalidate: 60,
    };
  }
};


export default Home;
