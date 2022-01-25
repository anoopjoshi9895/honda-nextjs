import React, { lazy, useEffect } from "react";
import classnames from "classnames";
import Link from "next/link";
import Image from "next/image";
import LocaleSwitcher from "./locale-switcher";
import { useTranslation } from "next-i18next";
import { RouteKeys } from "../utils/route-keys";
import { useRouter } from "next/router";

// import { api } from "alg-ecom-frontend-core";
import {
  api,
  AppSettingsHtmlDirectionAction,
  AppSettingsLanguageAction,
  AppSettingsStateViewModel,
  commonActions,
  ShowRoomDetailsModel,
} from "alg-ecom-frontend-core";


enum menus {
  automobiles = "automobiles",
  motorcycles = "motorcycles",
  powerproducts = "powerproducts",
  marine = "marine",
  buyreserve = "buyreserve",
  serviceMaintenance = "serviceMaintenance",
}

enum subMenus {
  automobiles = "automobiles",
  motorcycles = "motorcycles",
}
interface CustomProps {
  //   appSettingsState: AppSettingsStateViewModel;
  //   toggleMenu: typeof commonActions.toggleMenu;
  //   toggleRequestCallback: typeof commonActions.toggleRequestCallback;
  //   toggleBookTestDrive: typeof commonActions.toggleBookTestDrive;
  //   toggleDownloadBrochure: typeof commonActions.toggleDownloadBrochure;
  //   toggleRequestQuote: typeof commonActions.toggleRequestQuote;
  //   toggleSheduleShowroomVisit: typeof commonActions.toggleSheduleShowroomVisit;
  //   toggleFinancePopUp: typeof commonActions.toggleFinancePopUp;
  //   toggleServicePopUp: typeof commonActions.toggleServicePopUp;
  //   bookTestDrivePopupOpen: boolean;
  //   showroomsList: ShowRoomDetailsModel[];
  isMenuOpen: boolean;
  requestQuotePopupOpen: boolean;
  downloadBrochurePopupOpen: boolean;
  financePopupOpen: boolean;
}
const Header: React.FunctionComponent<any> = (props: any) => {
  const [activeMenu, setActiveMenu] = React.useState<menus | undefined>(
    undefined
  );
  const [activeSubMenu, setActiveSubMenu] = React.useState<subMenus>(
    subMenus.automobiles
  );
  useEffect(() => {
    test();
  }, []);
  const test = async () => {
    // const { api } = await import("alg-ecom-frontend-core");
    api.setToken("123");
    let response = api.appSettings;
  };

  const router = useRouter();
  const lang = router.locale;


  const menuRef = React.useRef<HTMLUListElement>(null);
  const handleLanguage = async (lng: string) => {
    // if (
    //   props?.appSettingsState?.data &&
    //   props?.appSettingsState?.data?.languagesList?.length > 0
    // ) {
    //   const data = props?.appSettingsState?.data?.languagesList.find(
    //     (item) => item.languageLcidstring === lng
    //   );
    //   if (data) {
    //     await api.setLanguageID(data.languageID);
    //     await dispatch(AppSettingsLanguageAction(data.languageID));
    //     await dispatch(
    //       AppSettingsHtmlDirectionAction(lng === 'en' ? 'ltr' : 'rtl')
    //     );
    //     // if(lng)
    //     const urlSplit = url.split('/');
    //     if (urlSplit.length > 0 && urlSplit[1] === lang) {
    //       let slug;
    //       if (lng === 'ar' && slugDetails?.arabicSlug) {
    //         slug = slugDetails?.arabicSlug;
    //       } else if (lng === 'en' && slugDetails?.englishSlug) {
    //         slug = slugDetails?.englishSlug;
    //       }
    //       if (
    //         slug != null &&
    //         (urlSplit[2] === 'automobiles' ||
    //           urlSplit[2] === 'motorcycle' ||
    //           urlSplit[2] === 'marine' ||
    //           urlSplit[2] === 'powerproduct')
    //       ) {
    //         urlSplit[3] = slug;
    //       }
    //       urlSplit[1] = lng;
    //       history.replace({
    //         pathname: urlSplit.join('/'),
    //       });
    //       window.location.reload();
    //     }
    //   }
    // }
  };

  const onTestDrivePopupClick = () => {
    // props.toggleBookTestDrive();
    // // props.toggleMenu();
    // setActiveMenu(undefined);
  };

  const onVisitPopupClick = () => {
    // props.toggleSheduleShowroomVisit();
    // props.toggleMenu();
  };

  const onCallbackPopupClick = () => {
    // props.toggleRequestCallback();
    // props.toggleMenu();
  };

  const onDownloadBrochureClick = () => {
    // props.toggleDownloadBrochure();
    // // props.toggleMenu();
    // setActiveMenu(undefined);
  };

  const onRequestQuoteClick = () => {
    // props.toggleRequestQuote();
    // // props.toggleMenu();
    // setActiveMenu(undefined);
  };

  const onFinancePopupClick = () => {
    // props.toggleFinancePopUp();
    // setActiveMenu(undefined);
  };

  const onMenuItemClick = (menu: menus) => {
    if (!activeMenu) {
      if (activeMenu === menu) {
        setActiveMenu(undefined);
      } else {
        setActiveMenu(menu);
      }
    } else {
      if (activeMenu === menu) {
        setActiveMenu(undefined);
      } else {
        setActiveMenu(menu);
      }
    }
  };

  const onBackToMainMenu = () => {
    // setActiveMenu(undefined);
  };

  const onItemClick = () => {
    // if (props.isMenuOpen) {
    //   props.toggleMenu();
    // }
    // setActiveMenu(undefined);
  };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       loadMenu();
  //     }, 100);
  //   }, []);

  //   React.useEffect(() => {
  //     document.addEventListener('click', handleClickOutside, false);

  //     return () => {
  //       document.removeEventListener('click', handleClickOutside, false);
  //     };
  //   }, []);

  const handleClickOutside = (event: { target: any }) => {
    // if (menuRef && menuRef.current && !menuRef.current.contains(event.target)) {
    //   setActiveMenu(undefined);
    // }
  };

  const { t } = useTranslation('common')


  return (
    <>
      <header
        className={classnames({
          "border-bottom bg-white zIndex-9 d-flex flex-column": true,
          active: props.isMenuOpen,
        })}
      >
        <div className="header-top bg-gray font-xs py-lg-2 d-none d-lg-block">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-end text-dark flex-lg-row flex-column px-lg-3 px-0">
                <div className="d-lg-inline-block d-block p-lg-0 p-3 header-top-items">
                  <div className="d-lg-inline-block d-none p-lg-0 p-3 header-top-items">
                    <ul className="list-unstyled quicklink d-flex m-0">
                      <li className="px-2">
                        <Link
                          href={`/${lang}${RouteKeys.AboutUs}`}
                        >
                          <a>{t('header.About us')}</a>
                        </Link>
                      </li>

                      <li className="px-2">
                        <Link
                          href={`/${lang}${RouteKeys.Contact}`}

                        >
                          {t('header.Contact us')}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="d-lg-inline-block d-block p-lg-0 p-3 header-top-items">
                    <span className="mx-1 pr-2">|</span>

                    <LocaleSwitcher />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom position-relative">
          <div className="container">
            <div className="justify-content-between row">
              <div className="col-auto d-flex align-items-center py-2 logo-block">
                <a
                  href=""
                  className="d-lg-none icon-menu  burger-menu"
                //   onClick={() => props.toggleMenu()}
                ></a>
                <Link
                  href={`/${lang}${RouteKeys.Home}`}
                >
                  <a>

                    <Image
                      src={`/logo.png`}
                      width={136}
                      height={44}
                      className="logo py-1"
                      alt="Homda"
                    />
                  </a>
                </Link>
              </div>
              <div className="col-lg col-12 d-flex flex-wrap justify-content-end px-0 main-menu-outer position-lg-static">
                <div className="col-12 px-0 d-lg-flex justify-content-end position-lg-static">
                  <div className="d-lg-none">
                    <div className="row mx-0 align-items-center justify-content-end border-bottom py-3">
                      <div className="col-auto menu-close py-1">
                        <i
                          className="icon-close text-gray-600 cursor-pointer"
                        //   onClick={() => props.toggleMenu()}
                        ></i>
                      </div>
                    </div>
                    <div className="quick-links py-3 d-flex text-nowrap overflow-auto border-bottom">
                      <div className="col-auto col-md-2 text-center">
                        <a onClick={() => onCallbackPopupClick()}>
                          <div className="quick-link-icon text-primary rounded-circle font-lg d-inline-flex justify-content-center align-items-center mb-1">
                            <i className="icon-callback"></i>
                          </div>
                          <p className="mb-0 font-xs">
                            {t('header.Request a')}
                            <br />
                            {t('header.Callback')}
                          </p>
                        </a>
                      </div>
                      <div className="col-auto col-md-2 text-center">
                        <a onClick={() => onTestDrivePopupClick()}>
                          <div className="quick-link-icon text-primary rounded-circle font-lg d-inline-flex justify-content-center align-items-center mb-1">
                            <i className="icon-test-drive"></i>
                          </div>
                          <p className="mb-0 font-xs">
                            {t('header.Book a')}Book a
                            <br />
                            {t('header.Test Drive')}
                          </p>
                        </a>
                      </div>
                      <div className="col-auto col-md-2 text-center">
                        <a onClick={() => onDownloadBrochureClick()}>
                          <div className="quick-link-icon text-primary rounded-circle font-lg d-inline-flex justify-content-center align-items-center mb-1">
                            <i className="icon-download"></i>
                          </div>
                          <p className="mb-0 font-xs">
                            {t('header.Download')}
                            <br />
                            {t('header.Brochure')}
                          </p>
                        </a>
                      </div>
                      <div className="col-auto col-md-2 text-center">
                        <a onClick={() => onRequestQuoteClick()}>
                          <div className="quick-link-icon text-primary rounded-circle font-lg d-inline-flex justify-content-center align-items-center mb-1">
                            <i className="icon-quote"></i>
                          </div>
                          <p className="mb-0 font-xs">
                            {t('header.Request a')}
                            <br />
                            {t('header.Quote')}
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="row mx-0 align-items-center py-3 border-bottom font-md border-top">
                      <div className="col text-muted">Language</div>
                      <div className="col-auto px-0">
                        {/* {i18n.languages[0] !== 'ar' && (
                          <span
                            className="px-3 font-weight-bold text-dark py-1"
                            onClick={() => handleLanguage('ar')}
                          >
                            عربى
                          </span>
                        )} */}
                        {/* {i18n.languages[0] !== 'en' && ( */}
                        <span
                          className="px-3 font-weight-bold text-dark py-1"
                          onClick={() => handleLanguage("en")}
                        >
                          English
                        </span>
                        {/* )} */}
                      </div>
                    </div>
                  </div>
                  <ul
                    className="bg-white d-flex d-lg-inline-flex flex-column flex-lg-row h-100 list-unstyled main-menu mb-0 py-3 py-lg-0 top-0 zIndex-9"
                    ref={menuRef}
                  >
                    <li
                      className={classnames({
                        active: activeMenu === menus.automobiles,
                      })}
                    >
                      <Link
                        href={`/automobile-landing`}
                      // className="h-100 d-flex align-items-center justify-content-between cursor-pointer"
                      // onClick={() => onItemClick()}
                      >
                        <a className="h-100 d-flex align-items-center justify-content-between cursor-pointer">
                          {t('common.automobiles')}
                        </a>
                      </Link>
                    </li>
                    <li
                      className={classnames({
                        active: activeMenu === menus.motorcycles,
                      })}
                    >
                      <Link
                        href={`/${lang}${RouteKeys.MotorcycleMenuLanding}`}
                      // onClick={() => onItemClick()}
                      // className="h-100 d-flex align-items-center justify-content-between cursor-pointer"
                      >
                        <a className="h-100 d-flex align-items-center justify-content-between cursor-pointer">
                          {t('common.motorcycles')}
                        </a>
                      </Link>
                    </li>

                    <li
                      className={classnames({
                        active: activeMenu === menus.powerproducts,
                      })}
                    >
                      <Link
                        href={`/${lang}${RouteKeys.PowerProductMenuLanding}`}
                      // onClick={() => onItemClick()}
                      // // onClick={() => onMenuItemClick(menus.powerproducts)}
                      // className="h-100 d-flex align-items-center justify-content-between cursor-pointer text-nowrap"
                      >
                        <a className="h-100 d-flex align-items-center justify-content-between cursor-pointer text-nowrap">
                          {t('common.power_product')}
                        </a>
                      </Link>
                    </li>

                    <li
                      className={classnames({
                        active: activeMenu === menus.marine,
                      })}
                    >
                      <Link
                        href={`/${lang}${RouteKeys.MarineLanding}`}
                      // onClick={() => onItemClick()}
                      // // onClick={() => onMenuItemClick(menus.marine)}
                      // className="h-100 d-flex align-items-center justify-content-between cursor-pointer"
                      >
                        <a className="h-100 d-flex align-items-center justify-content-between cursor-pointer">
                          {t('common.marine')}
                        </a>
                      </Link>
                    </li>

                    <li
                      className={classnames({
                        "pl-lg-2 position-relative": true,
                        active: activeMenu === menus.serviceMaintenance,
                      })}
                    >
                      <a
                        onClick={() =>
                          onMenuItemClick(menus.serviceMaintenance)
                        }
                        className="align-items-center bordered-anchor sub d-flex"
                      >
                        <span className="align-items-center d-flex justify-content-between w-100">
                          {t('header.Service & Maintenance')}
                          <i className="icon-chevron-down ml-2 d-lg-inline-block d-none"></i>
                          <i className="icon-chevron-right icon-flip-rtl font-xxxs font-weight-bold d-lg-none d-inline-flex"></i>
                        </span>
                      </a>
                      <div className="mega-menu mega-menu-service bg-white">
                        <div className="row m-0 align-items-center justify-content-between py-4 border-bottom d-lg-none position-sticky back-menu bg-white">
                          <div
                            className="col-auto back-menu font-base bg-white"
                            onClick={() => onBackToMainMenu()}
                          >
                            <div className="d-flex align-items-center cursor-pointer">
                              <i className="icon-chevron-left icon-flip-rtl mr-3"></i>
                              {t('header.Back to Main Menu')}
                            </div>
                          </div>
                          <div className="col-auto menu-close font-base d-flex">
                            <i
                              className="icon-close text-gray-600 cursor-pointer"
                            //   onClick={() => props.toggleMenu()}
                            ></i>
                          </div>
                        </div>
                        <div className="main">
                          <h5 className="pt-3 d-lg-none px-lg-0 px-3">
                            {t('header.Service & Maintenance')}
                          </h5>

                          <ul className="list-unstyled p-0 m-0 font-md font-weight-semibold">
                            <li className="p-1 border-bottom">
                              <Link
                                href={`/${lang}${RouteKeys.CarService}`}
                              // onClick={() => onItemClick()}
                              // className="align-content-center d-flex justify-content-between p-3"
                              >
                                <a className="align-content-center d-flex justify-content-between p-3">
                                  {t('header.Book Your Service Appointment')}
                                </a>
                              </Link>
                            </li>
                            <li className="p-1 border-bottom">
                              <Link
                                href={`/${lang}${RouteKeys.Owners}`}
                              // onClick={() => onItemClick()}
                              // className="align-content-center d-flex justify-content-between p-3"
                              >
                                <a className="align-content-center d-flex justify-content-between p-3">
                                  {t('header.Owners')}
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-12 d-lg-none mt-auto">
                  <div className="row align-items-center justify-content-center font-xl py-4 social-media">
                    <a href="#" className="col-auto">
                      <i className="icon-facebook"></i>
                    </a>
                    <a href="#" className="col-auto">
                      <i className="icon-instagram"></i>
                    </a>
                    <a href="#" className="col-auto">
                      <i className="icon-twitter"></i>
                    </a>
                    <a href="#" className="col-auto">
                      <i className="icon-linkedin"></i>
                    </a>
                    <a href="#" className="col-auto">
                      <i className="icon-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
