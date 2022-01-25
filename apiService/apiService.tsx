import getConfig from "next/config";
// const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
// const cmsDomain = process.env.REACT_APP_CMS_DOMAIN;
// const cmsDomain = publicRuntimeConfig.backendUrl
const cmsDomain = `https://qa-cms-oorjit.hondaalghanim.com/`;

import {
  getLandingScreenQuery,
  getNewsQuery,
  getFooterQuery,
  getVehicleDetailsQuery,
  getAutoMobileLandingQuery,
  getContactUsScreenQuery,
  getAboutUsPageQuery,
} from "./query";
import {
  ILandingScreenData,
  INewsItem,
  IOfferPageResponse,
  IProductDetails,
  IAutoMobileLandingPage,
  IContactUs,
} from "../models/models";
import { post } from "../services/http";

export async function loadLandingPage(
  language: string
): Promise<ILandingScreenData> {
  const query = getLandingScreenQuery(language);
  const url = `${cmsDomain}graphql`;
  const response = await post(url, {
    operationName: "MainLandingScreens",
    query,
  });
  return (response?.data?.data as any)?.mainLandingScreens?.[0];
}

export async function loadNewsItems(
  language: string,
  count?: number
): Promise<INewsItem[]> {
  const query = getNewsQuery(language, count);
  const url = `${cmsDomain}graphql`;
  const response = await post(url, {
    operationName: "NewsItems",
    query,
  });
  return (response?.data?.data as any)?.newsItems;
}

export async function loadFooterData(
  language: string
): Promise<IOfferPageResponse> {
  try {
    const query = getFooterQuery(language);
    const url = `${cmsDomain}graphql`;
    const response = await post(url, {
      operationName: "Footers",
      query,
    });
    return (response?.data?.data as any)?.footers?.[0];
  } catch (err) {
    return {} as any;
  }
}

export async function loadAboutUsData(
  language: string
): Promise<IOfferPageResponse> {
  try {
    const query = getAboutUsPageQuery(language);
    const url = `${cmsDomain}graphql`;
    const response = await post(url, {
      operationName: "Aboutuses",
      query,
    });
    return (response?.data?.data as any)?.aboutuses?.[0];
  } catch (err) {
    return {} as any;
  }
}
export async function loadVehicleDetail(
  language: string,
  slug: string
): Promise<IProductDetails> {
  const query = getVehicleDetailsQuery(language, slug);
  const url = `${cmsDomain}graphql`;
  const response = await post(url, {
    operationName: "Automobiles",
    query,
  });
  return (response?.data?.data as any)?.automobiles?.[0];
}

export async function loadAutoMobileLandingPage(
  language: string
): Promise<IAutoMobileLandingPage> {
  const query = getAutoMobileLandingQuery(language);
  const url = `${cmsDomain}graphql`;
  const response = await post(url, {
    operationName: "AutoMobileLandings",
    query,
  });
  return (response?.data?.data as any)?.autoMobileLandings?.[0];
}

export async function loadContactUsPage(language: string): Promise<IContactUs> {
  const query = getContactUsScreenQuery(language);
  const url = `${cmsDomain}graphql`;
  const response = await post(url, {
    operationName: "Contactuses",
    query,
  });
  return (response?.data?.data as any)?.contactuses?.[0];
}
