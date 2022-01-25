import { AnyNaptrRecord } from 'dns';
import React from 'react';
import Link from 'next/link'
import { FooterMenu } from './footer-menu'
import { ExtraLink } from './extra-link'
import { IFooterMenu, ISocialMedia, IFooter } from '../models/models'
import { useTranslation } from "next-i18next";
import { RouteKeys } from "../utils/route-keys";
import { useRouter } from "next/router";
// import ReactModal from 'react-modal';


// // import { matchPath } from 'react-router';
// export const customStylesPopup: ReactModal.Styles = {
//   content: {
//     position: 'relative',
//     top: 'auto',
//     left: 'auto',
//     right: 'auto',
//     bottom: 'auto',
//     height: 'auto',
//     maxWidth: '1140px',
//     width: '100%',
//     border: '0',
//     boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.08)',
//     padding: '0',
//     margin: '20px auto',
//   },
//   overlay: {
//     zIndex: 100000,
//     backgroundColor: 'rgba(0, 0, 0, 0.6)',
//     overflow: 'auto',
//   },
// };

interface CustomProps {
  servicePopupOpen: boolean;
  bookTestDrivePopupOpen: boolean;
  // toggleServicePopUp: typeof commonActions.toggleServicePopUp;
  // toggleBookTestDrive: typeof commonActions.toggleBookTestDrive;
  // vehicleModels: AllVehicleStateModel;
  // showroomsList: ShowRoomDetailsModel[];
  // getVehicleModelsList: typeof allVehicleModelActions.getVehicleModelsList;
  // getShowRoomList: typeof showRoomListActions.getShowRoomList;
  // toggleFinancePopUp: typeof commonActions.toggleFinancePopUp;
  financePopupOpen: boolean;

  connectWithUs: any
  extraLinks: any
  menuItems: any
  serviceLinks: any
  socialMedia: any
  copyRight: any
}

const Footer = (props: IFooter) => {

  const { t } = useTranslation('common')


  const { connectWithUs,
    extraLinks,
    menuItems,
    serviceLinks,
    socialMedia,
    copyRight } = props

  const [hideFooter, setHideFooter] = React.useState<boolean>(true);

  const onServicePopupCancel = () => {
    // props.toggleServicePopUp();
  };
  const onServicePopupClick = () => {
    // props.toggleServicePopUp();
  };

  const onTestDrivePopupCancel = () => {
    // props.toggleBookTestDrive();
  };
  const onTestDrivePopupClick = () => {
    // props.toggleBookTestDrive();
  };
  const onFinancePopupCancel = () => {
    // props.toggleFinancePopUp();
  };
  const onFinancePopupClick = () => {
    // props.toggleFinancePopUp();
  };

  // React.useEffect(() => {
  //   loadFooter();
  //   if (
  //     props.vehicleModels?.modelsList === undefined ||
  //     props.vehicleModels?.modelsList?.length === 0
  //   ) {
  //     props.getVehicleModelsList();
  //   }
  //   if (
  //     props.showroomsList === undefined ||
  //     props.showroomsList?.length === 0
  //   ) {
  //     props.getShowRoomList();
  //   }
  // }, []);
  // React.useEffect(() => {
  //   if (
  //     pathname.indexOf('/powerproduct/') > -1 ||
  //     pathname.indexOf('/powerproducts/') > -1 ||
  //     pathname.indexOf('/marines/') > -1 ||
  //     pathname.indexOf('/marine/') > -1 ||
  //     pathname.indexOf('/motorcycle/') > -1 ||
  //     pathname.indexOf('/marine') > -1 ||
  //     pathname.indexOf('/motorcycle') > -1 ||
  //     pathname.indexOf('/powerproduct') > -1
  //   ) {
  //     setHideFooter(false);
  //   } else {
  //     setHideFooter(true);
  //   }
  // }, [pathname]);
  // let vehType = '';

  // if (
  //   pathname.indexOf('/powerproduct/') > -1 ||
  //   pathname.indexOf('/powerproducts/') > -1
  // ) {
  //   vehType = productTypes.powerproduct;
  // } else if (
  //   pathname.indexOf('/marines/') > -1 ||
  //   pathname.indexOf('/marine/') > -1
  // ) {
  //   vehType = productTypes.marine;
  // } else if (
  //   pathname.indexOf('/motorcycle/') > -1 ||
  //   pathname.indexOf('/motorcycles/') > -1
  // ) {
  //   vehType = productTypes.motorcycle;
  // } else if (pathname.indexOf('/automobiles/') > -1) {
  //   vehType = productTypes.automobiles;
  // }
  // let contactPath = `/${lang}${RouteKeys.Contact}`;
  // if (vehType !== '') {
  //   contactPath = `/${lang}${RouteKeys.Contact}?type=${vehType}`;
  // }
  const router = useRouter();
  const lang = router.locale;


  return (
    <>
      <div className="footer-top border-top position-relative bg-light">
        <div className="container">
          <div className="row justify-content-center">

            {hideFooter && (
              <>
                <div
                  className="col-lg-3 col-sm-6 col-12 item border-bottom cursor-pointer"
                  onClick={() => onFinancePopupClick()}
                >
                  <div className="py-4 item-in">
                    <div className="row gutter-5 py-md-3">
                      <div className="col-sm-12 col-auto">
                        <i className="icon-calculator"></i>
                      </div>
                      <div className="col-sm-12 col mt-sm-3 pt-sm-1">
                        <div className="font-sm text-uppercase font-weight-semibold d-block">
                          {t('footer.financial_calculator')}
                        </div>
                        <p className="font-xs m-0">
                          {t('footer.financial_calculator_caption')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-sm-6 col-12 item border-bottom cursor-pointer"
                  onClick={() => onTestDrivePopupClick()}
                >
                  <div className="py-4 item-in">
                    <div className="row gutter-5 py-md-3">
                      <div className="col-sm-12 col-auto">
                        <i className="icon-test-drive"></i>
                      </div>
                      <div className="col-sm-12 col mt-sm-3 pt-sm-1">
                        <div className="font-sm text-uppercase font-weight-semibold d-block">
                          {t('common.test_drive')}
                        </div>
                        <p className="font-xs m-0">
                          {t('footer.test_drive_caption')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            <div
              className="col-lg-3 col-sm-6 col-12 item border-bottom cursor-pointer"
              onClick={() => onServicePopupClick()}
            >
              <div className="py-4 item-in">
                <div className="row gutter-5 py-md-3">
                  <div className="col-sm-12 col-auto">
                    <i className="icon-book-service"></i>
                  </div>
                  <div className="col-sm-12 col mt-sm-3 pt-sm-1">
                    <span className="font-sm text-uppercase font-weight-semibold d-block">
                      {t('footer.book_service_appointment')}
                    </span>
                    <p className="font-xs m-0">
                      {t('footer.book_service_appointment_caption')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href={`/${lang}${RouteKeys.Contact}`}

            // className="col-lg-3 col-sm-6 col-12 item border-bottom"
            ><div className="col-lg-3 col-sm-6 col-12 item border-bottom"
            >
                <div className="py-4 item-in">
                  <div className="row gutter-5 py-md-3">
                    <div className="col-sm-12 col-auto">
                      <i className="icon-location"></i>
                    </div>
                    <div className="col-sm-12 col mt-sm-3 pt-sm-1">
                      <a
                        href=""
                        className="font-sm text-uppercase font-weight-semibold d-block"
                      >
                        {t('footer.locate_us')}
                      </a>
                      <p className="font-xs m-0">
                        {t('footer.locate_us_caption')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-middle pt-4 pb-md-4">
          <div className="container pt-3">
            <div className="row">
              <div className="col-lg col-12">
                <div className="row">
                  {menuItems?.map((p, index) => {
                    return (
                      <FooterMenu
                        menu={p}
                        key={'footer-menu-' + index}
                        type="footer-menu-item"
                      ></FooterMenu>
                    );
                  })}
                  {serviceLinks?.map((p, index) => {
                    if (p?.isDisable !== true) {
                      return (
                        <FooterMenu
                          menu={p}
                          key={'footer-service-' + index}
                          type="footer-service-item"
                        ></FooterMenu>
                      );
                    }
                  })}
                  {connectWithUs?.map((p, index) => {
                    if (p?.isDisable !== true) {
                      return (
                        <FooterMenu
                          menu={p}
                          key={'connectWithUs-' + index}
                          type="connectWithUs-item"
                        ></FooterMenu>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="col-lg-auto col-12 order-first order-lg-last last-column">
                <div>
                  <h6 className="font-normal font-weight-bold text-uppercase pb-3 ">
                    {t('footer.Follow us')}
                  </h6>
                  <ul className="list-unstyled p-0 font-normal social-share row gutter-8 mb-4 mb-lg-0">
                    {socialMedia?.map((p, index) => {
                      return (
                        <li
                          className="col-auto col-lg-12 mb-3"
                          key={'footer-social-media' + index}
                        >
                          <a
                            href={p.url}
                            target="blank"
                            className="d-inline-flex align-items-center py-1"
                          >
                            <i
                              className={
                                'font-base mr-lg-3 mr-2 pr-lg-1 icon-' +
                                p?.icon?.replace('_', '-')
                              }
                            ></i>
                            {p?.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom border-top py-3">
          <div className="container">
            <div className="row gutter-10 align-items-center">
              <div className="col-md col-12 font-sm mb-md-0 mb-3">
                <div className="row align-items-center">
                  <div className="col-md col-12">
                    <p className="m-0 text-capitalize text-muted">
                      &copy; {copyRight}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-auto col-12 text-capitalize font-sm text-muted mb-md-0 mb-3">
                {t('footer.Roadside assistance')}
                <a
                  href={
                    `tel: ${t('footer.Roadside assistance No')}`
                  }
                  className="px-2 link"
                >
                  {t('footer.Roadside assistance No')}
                </a>
              </div>
              <div className="col-md-auto col-12">
                {extraLinks?.map((p, index) => {
                  if (p?.isDisable !== true) {
                    return (
                      <ExtraLink
                        menu={p}
                        key={'ExtraLink-' + index}
                        type="ExtraLink-item"
                      ></ExtraLink>
                    );
                  }
                })}

              </div>
            </div>
          </div>
        </div>
      </footer>


      {/* <AllPopUp /> */}
    </>
  );
};


export default Footer;
