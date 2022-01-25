import React from "react";
import Link from "next/link";
import { IHomepageSlider } from "../models/models";
import Image from "next/image";

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

const Motorcycles = (props:{motorcycleSlider:IHomepageSlider[]}) => {
  const motorcycleSlider  = props.motorcycleSlider;
  let experianceSliderRef: any = React.useRef<any>();

  // const createLink = (slug: string) => {
  //   return `/${lang}${RouteKeys.MotorCycle.replace(':model', slug)}`;
  // };
  return (
    <div
      key={"motorcycle-key" + motorcycleSlider?.length ?? "0"}
      className="tab w-slider-tab"
    >
      <Slider
        ref={(slider) => (experianceSliderRef = slider)}
        {...sliderSettings}
      >
        {motorcycleSlider?.map((p, index) => {
          return (
            <div key={"slider-car-item" + index} className="w-slide">
              <div className="px-lg-5 px-3 d-flex flex-column">
                <figure className="motorcycle">
                  {/* <img
                    src={p?.image?.url}
                    width="888"
                    height="339"
                    className="img-fluid"
                  /> */}
                    <Image
                      src={`${p?.image?.url}`}
                      width={747}
                      height={385}
                      className="img-fluid"
                      alt={'motorcycles'}
                     
                    />
                </figure>
                <div className="row justify-content-md-between align-items-md-center w-content">
                  <div className="col-12">
                    <div className="row align-items-center justify-content-between">
                      <div className="col col-xl-auto pr-xl-5">
                        <span className="font-normal text-muted">
                          {p?.spec1 ?? ""}
                        </span>
                        <Link  href={"/"}><a
                          // to={createLink(p.slug)}
                          className="h2 d-flex align-items-center m-0 p-0"
                        >
                          {p?.title}
                          <i className="icon-chevron-right font-md font-weight-bold mx-2"></i>
                          </a></Link>
                        <span className="font-normal text-muted">
                          {p?.spec2 ?? ""}
                        </span>
                      </div>
                      <div className="col-auto col-xl">
                        <span className="font-normal text-muted">
                          {/* {t('common.starting_at')} */}starting at
                        </span>
                        <h6 className="text-primary">{p?.price ?? ""}</h6>
                      </div>
                    </div>
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

export default Motorcycles;
