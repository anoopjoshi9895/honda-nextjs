import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SliderBanners from "../../components/slider-banner";
import { TrimSection } from "../../components/TrimSection";
import ExploreColorTab from "../../components/explore-color-tabs";
import Design from "../../components/Design";
import SliderWithDetails from "../../components/sliderWithDetails";
import { GallerySection } from "../../components/GallerySection";
import { Convenience } from "../../components/Gallery";
import { IProductDetails, IFooter } from "../../models/models";
import { loadVehicleDetail } from "../../apiService/apiService";

interface CustomProps {
  res: IProductDetails;
  locale: string;
  locales: any;
  slug: string;
  footerData: IFooter;
}

export default function GspPage({ res, locale, locales, slug }: CustomProps) {
  const router = useRouter();
  const { defaultLocale, isFallback, query } = router;
  const { t, i18n } = useTranslation("common");
  if (isFallback) {
    return "Loading...";
  }

  // const [downloadBrochurePopupOpen, setDownloadBrochurePopupOpen] =
  //   useState(false);
  // const [requestCallbackPopUpOpen, setRequestCallbackPopUpOpen] =
  //   useState(false);
  //   const [scrollIds, setScrollIds] = useState<string[]>([]);

  const {
    banner,
    title,
    detailItems,
    specs,
    trims,
    ecomModelCode,
    interiorColorVariants,
    colorVariants,
    design,
    gallery,
    convenience,
    buildLink,
  } = res;

  // let buildLink: string | undefined;
  // if (vehicleDetails?.buildLink) {
  //   const url =
  //     window.location.protocol +
  //     '//' +
  //     window.location.hostname +
  //     (window.location.port ? ':' + window.location.port : '');
  //   buildLink = url + '/' + vehicleDetails?.buildLink;
  // }
  const onCallbackPopupCancel = () => {
    // setRequestCallbackPopUpOpen(!requestCallbackPopUpOpen);
  };

  const renderCallbackModal = () => {
    // return (
    //   <ReactModal
    //     isOpen={requestCallbackPopUpOpen}
    //     contentLabel="Callback"
    //     style={customStyles}
    //     onRequestClose={onCallbackPopupCancel}
    //     shouldCloseOnOverlayClick={true}
    //   >
    //     {vehicleDetails && vehicleDetails.ecomProductId && (
    //       <RequestCallbackPopUp
    //         onPopupCancel={onCallbackPopupCancel}
    //         title={'Request a callback'}
    //         productID={parseInt(vehicleDetails.ecomProductId, 10)}
    //         showroomsList={props.showroomsList}
    //         productTitle={vehicleDetails?.title}
    //         productImage={vehicleDetails?.colorVariants?.[0]?.image?.url || ''}
    //       />
    //     )}
    //   </ReactModal>
    // );
  };
  const onDownloadBrochureCancel = () => {
    // setDownloadBrochurePopupOpen(!downloadBrochurePopupOpen);
  };
  const renderDownloadBrochureModal = () => {
    // return (
    //   <ReactModal
    //     isOpen={downloadBrochurePopupOpen}
    //     contentLabel="Download brochure"
    //     style={customStyles}
    //     onRequestClose={onDownloadBrochureCancel}
    //     shouldCloseOnOverlayClick={true}
    //   >
    //     {vehicleDetails && vehicleDetails.ecomProductId && (
    //       <DownloadBrochurePopUp
    //         onPopupCancel={onDownloadBrochureCancel}
    //         title={'Download brochure'}
    //         productID={parseInt(vehicleDetails.ecomProductId, 10)}
    //         showroomsList={props.showroomsList}
    //         productTitle={vehicleDetails?.title}
    //         productImage={vehicleDetails?.colorVariants?.[0]?.image?.url || ''}
    //       />
    //     )}
    //   </ReactModal>
    // );
  };

  const detail_nav_bar = [
    {
      hash: "#trimsSpecs",
      // link:"detail.trim_and_specs",
      link: "trim and specs",
      id: 1,
    },
    {
      hash: "#exploreColor",
      // link:"common.explore_the_color",
      link: "explore the color",
      id: 2,
    },
    {
      hash: "#exterior-interior",
      // link:"detail.exterior_interior",
      link: "exterior & interior",
      id: 3,
    },
  ];
  return (
    <div>
      <>
        {/* {loader && <FullPageLoader></FullPageLoader>} */}
        {/* {!loader && ( */}
        <>
          {/* {vehicleDetails?.metaDetails && (
            <MetaDetails metaDetails={vehicleDetails?.metaDetails} />
          )} */}

          <div
            className="bg-primary position-sticky top-0 zIndex-1 tab-outer-container main-nav-detailpage"
            id="scroll-div"
          >
            <div className=".container">
              <div className="row align-items-center">
                <div className="col-5 col-sm-4 col-md-3 col-lg-auto d-lg-flex pr-0">
                  <span
                    className="d-inline-flex align-items-center font-xs text-uppercase text-white cursor-pointer"
                    // onClick={() => history.goBack()}
                  >
                    <i className="icon-arrow-left mr-2 pr-1 font-lg icon-flip-rtl"></i>
                    <span>{title}</span>
                  </span>
                </div>
                <div className="col-7 col-sm-8 col-md-9 col-lg d-flex justify-content-lg-end px-0">
                  <div className="overflow-hidden">
                    {/* <ScrollspyNav
                      scrollTargetIds={scrollIds}
                      offset={-100}
                      activeNavClass="active"
                      scrollDuration="100"
                      // headerBackground="true"
                    > */}
                    <ul className="nav font-sm text-uppercase letter-spacing-sm">
                      {detail_nav_bar?.map((p: any, index: any) => {
                        return (
                          <li
                            className="nav-item px-3 px-md-2 px-xl-4"
                            key={index}
                          >
                            <a
                              className="nav-link p-0 text-white cursor-pointer hover-primary"
                              href={`${p.hash}`}
                            >
                              <span className="py-lg-2 py-2 d-inline-block">
                                {t(`${p.link}`)}
                              </span>
                            </a>
                          </li>
                        );
                      })}
                      {detailItems?.map((p: any, index: any) => {
                        return (
                          <li
                            key={`detail-scroll-item-${index}`}
                            className="nav-item px-3 px-md-2 px-xl-4"
                          >
                            <a
                              className="nav-link p-0 text-white cursor-pointer hover-primary"
                              href={"#" + p.title}
                            >
                              <span className="py-lg-2 py-2 d-inline-block">
                                {p.title}
                              </span>
                            </a>
                          </li>
                        );
                      })}

                      <li className="nav-item px-3 px-md-2 px-xl-4">
                        <a
                          className="nav-link p-0 text-white cursor-pointer hover-primary"
                          href="#gallery"
                        >
                          <span className="py-lg-2 py-2 d-inline-block">
                            {t("common.gallery")}
                          </span>
                        </a>
                      </li>
                    </ul>
                    {/* </ScrollspyNav> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-wrapper">
            {banner && (
              <SliderBanners
                specs={specs ?? []}
                detail={banner ?? []}
                className="detail-page-slider"
                // topSlider={banner ?? []}
              />
            )}
            {(trims?.length ?? 0) > 0 && (
              <TrimSection
                model={ecomModelCode}
                buildLink={buildLink}
                data={trims ?? []}
              />
            )}
            <ExploreColorTab
              externalVariant={colorVariants ?? []}
              internalVariant={interiorColorVariants ?? []}
              model={slug}
              onRequestCallback={onCallbackPopupCancel}
              onDownloadBrochure={onDownloadBrochureCancel}
            ></ExploreColorTab>

            {design && (
              <div id={"exterior-interior"}>
                <Design buildLink={buildLink} designItems={design} />
              </div>
            )}

            {detailItems?.map((p: any, index: any) => {
              return (
                <div className="pt-4" key={index}>
                  <SliderWithDetails
                    buildLink={buildLink}
                    title={p.title}
                    align={index % 2 === 0 ? "right" : "left"}
                    items={p.items}
                  />
                </div>
              );
            })}
            {(gallery?.length ?? 0) > 0 && (
              <GallerySection data={gallery ?? []} />
            )}
            {(convenience?.length ?? 0) > 0 && (
              <Convenience data={convenience ?? []} buildLink={buildLink} />
            )}
          </div>
        </>
        {/* )} */}
        {renderCallbackModal()}
        {renderDownloadBrochureModal()}
      </>
    </div>
  );
}

export const getStaticProps = async ({ locale, locales, params }: any) => {
  const language = locale;
  const slug = params.slug;
  var res = await loadVehicleDetail(language, slug);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      locale,
      locales,
      res: res,
      slug: slug,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = ({ locales, query }: any) => {
  const paths = [];

  // for (const locale of locales) {
  paths.push({ params: { slug: "accord-1" }, locale: "en" });
  paths.push({ params: { slug: "accord-2" }, locale: "ar" });
  //}

  return {
    paths,
    fallback: true,
  };
};
