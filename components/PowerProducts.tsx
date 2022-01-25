import React from "react";
import Link from "next/link";
import { IHomepageSlider } from "../models/models";
import Image from "next/image";
import { useTranslation } from "next-i18next";

import Slider from "react-slick";

const sliderSettings: any = {
  key: "w-slider",
  className: "w-slider",
  lazyLoad: true,
  centerMode: true,
  centerPadding: "20%",
  slidesToShow: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        // arrows: false,
        centerMode: true,
        centerPadding: "15%",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1023,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 991,
      settings: {
        // arrows: false,
        centerMode: true,
        centerPadding: "15%",
        autoplay: true,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 780,
      settings: {
        centerMode: true,
        centerPadding: "10%",
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        infinite: false,
        // autoplay: true,
        slidesToShow: 1.15,
        slidesToMove: 1,
      },
    },
  ],
};

const PowerProducts = (props: { powerProductSlider: IHomepageSlider[] }) => {
  const powerProductSlider = props.powerProductSlider;
  const { t } = useTranslation('common')

  let experianceSliderRef: any = React.useRef<any>();
  const nextExperianceProduct = () => {
    experianceSliderRef.slickNext();
  };
  const prevExperianceProduct = () => {
    experianceSliderRef.slickPrev();
  };

  // const createLink = (slug: string) => {
  //   return `/${lang}${RouteKeys.PowerProductDetail.replace(':model', slug)}`;
  // };
  return (
    <div
      // key={'power-product-key' + currentVehicles?.length ?? '0'}
      key={"power-product-key0"}
      className="tab w-slider-tab power-product-tab"
    >
      <Slider
        ref={(slider) => (experianceSliderRef = slider)}
        {...sliderSettings}
      >
        {powerProductSlider?.map((p, index) => {
          return (
            <div key={"slider-power-product-item" + index} className="w-slide">
              <div className="px-lg-5 px-3 d-flex flex-column">
                <figure className="marine">
                  {/* <img
                    src={p?.image.url}
                    width="888"
                    height="339"
                    className="img-fluid w-auto mx-auto"
                  /> */}
                  <Image
                    src={`${p?.image?.url}`}
                    width={296}
                    height={249}
                    className="img-fluid w-auto mx-auto"
                    alt={'powerproducts'}

                  />
                </figure>

                <div className="align-items-center col-12 justify-content-center mx-auto row w-content">
                  <div className="col-auto col-lg pr-xl-5">
                    {/* <span className="font-normal text-muted">2020</span> */}
                    <Link href={"/"} ><a
                      // to={
                      //   p.type != null
                      //     ? `/${lang}${RouteKeys.PowerProductListing.replace(
                      //         ':model',
                      //         p.type
                      //       )}`
                      //     : ''
                      // }
                      className="h2 d-flex align-items-center m-0 p-0"

                    >
                      {t(`header.${p?.title.toLowerCase()}`)}
                      <i className="icon-chevron-right font-md font-weight-bold mx-2"></i>
                    </a></Link>
                    {p?.spec1 && (
                      <span className="font-normal text-muted">{p?.spec1}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>


    </div>
  );
};

export default PowerProducts;
