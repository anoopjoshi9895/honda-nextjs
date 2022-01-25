import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import { ITopBanner, IKeyValue } from "../models/models";

interface CustomProps {
  detail: ITopBanner[];
  specs?: IKeyValue[];
  landing?: boolean;
  className?: string;
}

const SliderBanners = (props: CustomProps) => {
  //   if (!data) {
  //     return <FullPageLoader />;
  //   }
  const topSlider = props.detail;

  return (
    <>
      {topSlider?.length > 0 && (
        <div
          className={`home-slider-outer ${
            props.className ? props.className : ""
          }`}
        >
          <Slider
            key={"banner-slider"}
            dots={true}
            // draggable
            lazyLoad="ondemand"
            infinite={false}
            //   speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay
            autoplaySpeed={8000}
            arrows={false}
            className="home-slider"
          >
            {topSlider.map((banner: any, index: number) => {
              return (
                <div
                  className="slide"
                  key={"banner-" + index + banner.bannerID}
                >
                  <div className="position-relative">
                    {banner.image ? (
                      <Image
                        src={`${banner.image.url}`}
                        alt="Picture of the author"
                        width={130}
                        height={52}
                        layout="responsive"
                        priority
                      />
                    ) : null}
                  </div>
                </div>
              );
            })}
          </Slider>
          {/* <div className="position-relative">
          <div className="specification-block d-flex w-100">
            <div className="row m-0 w-100">
              {props?.specs?.map((p, index) => {
                return (
                  <div
                    key={'specs-' + index}
                    className="col-sm col-auto p-sm-3 p-2 d-flex align-items-center justify-content-center item"
                  >
                    <div className="d-inline-block text-left">
                      <span className="font-xs">{p.label}</span>
                      <h4 className="m-0 mt-1 text-white">{p.value}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div> */}
        </div>
      )}
    </>
  );
};

export default SliderBanners;
