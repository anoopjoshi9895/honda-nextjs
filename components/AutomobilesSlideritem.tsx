import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CustomProps {
  slug: string;
  name: string;
  image: any;
  price: string;
  seats: string;
  year: string;
}

const AutomobilesSlideritem: React.FunctionComponent<CustomProps> = (
  props: CustomProps
) => {
  return (
    <div className="w-slide">
      <div className="px-lg-5 px-3 d-flex flex-column">
        <figure className="car">
          {/* <img
            src={props.image}
            width="888"
            height="339"
            className="img-fluid"
          /> */}
          <Image
            src={`${props.image}`}
            width={888}
            height={339}
            className="img-fluid"
            alt={'car'}
          />
        </figure>
        <div className="row justify-content-md-between align-items-md-center w-content">
          <div className="col-12">
            <div className="row align-items-center justify-content-between">
              <div className="col col-xl-auto pr-xl-5">
                <span className="font-normal text-muted">{props.year}</span>

                <Link
                  href={"/automobiles/" + props.slug}
                  // {`/${lang}${RouteKeys.AutoMobiles.replace(
                  //   ':model',
                  //   props?.slug
                  // )}`}
                  // className="h2 d-flex align-items-center m-0 p-0"
                >
                  <a className="h2 d-flex align-items-center m-0 p-0">
                    {props.name}
                    <i className="icon-chevron-right font-md font-weight-bold mx-2"></i>
                  </a>
                </Link>
                <span className="font-normal text-muted">{props.seats} </span>
              </div>
              <div className="col-auto col-xl">
                <span className="font-normal text-muted">
                  {/* {t('common.starting_at')} */} starting at
                </span>
                <h6 className="text-primary">{props.price}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomobilesSlideritem;
