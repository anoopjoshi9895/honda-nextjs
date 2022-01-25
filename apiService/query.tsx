const statusCondition = `where:{status:"published"}`;

const metaDetails = `{
    title
    description
    keyword
    ogTitle
  }`;

const localizations = `{
    locale
    id
    slug
  }`;

const relation = ` automobile {
    id
    title
    slug
    locale
    localizations ${localizations}
  }
  motorcycle{
    id
    title
    slug
    locale
    localizations ${localizations}
  }
  marine{
    id
    title
    slug
    locale
    localizations ${localizations}
  }
  power_product{
    id
    title
    slug
    locale
    localizations ${localizations}
  }
  `;
export const bannerItem = ` {
    title
    type
    relativeUrl
    absoluteUrl
    description
    image {
      url
      formats
    }
    button {
      color
      text
      relativeUrl
      absoluteUrl
      ${relation}
    }
  }`;

export const homeSliderItem = `{
    title
    slug
    price
    image {
      url
    }
    spec1
    spec2
   
  }`;

export const homeSliderMarineItem = `{
    title
    type
   
    image {
      url
    }
    
   
  }`;

export const image = `{
    name
    url
  }`;

const imageWithDescription = `{
    id,
    title,
    description
    image{
        url
    }
}`;

export const getLandingScreenQuery = (language: string) => {
  return `query MainLandingScreens {
    mainLandingScreens(locale: "${language}",${statusCondition})  {
      metaDetails ${metaDetails}
      topSlider ${bannerItem}
      automobileSlider ${homeSliderItem}
      motorcycleSlider ${homeSliderItem}
      powerProductSlider ${homeSliderMarineItem}
      marineSlider ${homeSliderMarineItem}
      stayConnected {
        title
        items {
        position
        url
          iconClass
          image ${image}
        }
      }
      offers {
        title
        subTitle
        offers {
          title 
          image${image}
          description
          link
        }
      }
    }
  }
`;
};

export const getNewsQuery = (language: string, limit?: number) => {
  return `query NewsItems {
    newsItems(locale: "${language}",${statusCondition},sort:"date:desc"${limit != null ? ",limit :" + limit : ""
    }) {
      title
      shortDescription
      date
      slug

      image {
          url
        }
      locale
      localizations {
        locale
        id
        slug
      }
    }
}`;
};

export const getFooterQuery = (language: string) => {
  return `query Footers {
    footers(locale: "${language}",${statusCondition}) {
        title
        copyRight
        menuItems {
          title
           items {
            label
            relativeUrl
            absoluteUrl
            action
          }
        }
        socialMedia{
          icon
          url
          title
        }
        serviceLinks {
          title
           items {
            label
            relativeUrl
            absoluteUrl
            action
          }
          isDisable
        }
        connectWithUs {
          title
           items {
            label
            relativeUrl
            absoluteUrl
            action
          }
          isDisable
        }
        extraLinks {
          title
           items {
            label
            relativeUrl
            absoluteUrl
            action
          }
          isDisable
        }
    }
}`;
};

export const getVehicleDetailsQuery = (locale: string, slug: string) => {
  return `query Automobiles {
    automobiles(locale: "${locale}",where:{slug:"${slug}"}) {
      metaDetails ${metaDetails}
      type
      displayImage${image}
      id
      slug
      title
      subTitle
      ecomProductId
      ecomModelCode
      price
      offerPrice
      buildLink
      megaMenuThumb {
        url
      }
      locale
      localizations ${localizations}
      banner ${bannerItem}
      specs {
        label,
        value
     }
      design{
          id,
          title
          items${imageWithDescription}

      }
      detailItems{
        title
        subtitle
        items${imageWithDescription}
      }
    
      gallery${image},
      colorVariants{
        title
        colorIcon${image}
        image${image}
      }
      interiorColorVariants{
        title
        colorIcon${image}
        image${image}
      }
      showInMainMenu
      homePageSliderSpec{
        spec1
        spec2
      }

      trims{
        title
        subTitle
        price
        infoText
        spec{
          spefcItem
        }
        image${image}
      }
      convenience{
        title
        description
        image${image}
      }
    }
  }
    `;
};

const autoMobileLandingCategory = `{
  title
  subTitle
  image {
    url
  }
  link
}`;

export const autoMobileLandingSliderItem = `{
  title
  slug
  price
  image {
    url
  }
  spec1
  spec2
  type
}`;

const autoMobileLandingPage = `{
  metaDetails ${metaDetails}
  banner ${bannerItem}
  categoryList ${autoMobileLandingCategory}
  offer ${autoMobileLandingCategory}
  locateUs ${autoMobileLandingCategory}
  carSlider ${autoMobileLandingSliderItem}
}`;

export const getAutoMobileLandingQuery = (language: string) => {
  return `query AutoMobileLandings {
    autoMobileLandings(locale: "${language}",${statusCondition} )  ${autoMobileLandingPage}
  }
`;
};

const contact = `{
  title
  address
  phone
  email
  link
  fax
  postalCode
  category
  timings
  city
}`;

const conactViewItem = `{
  showRooms ${contact}
  serviceCenters ${contact}
}`;

export const getContactUsScreenQuery = (language: string) => {
  return `query Contactuses {
    contactuses(locale: "${language}",${statusCondition}) {
      title
      banner ${bannerItem}
      autoMobiles ${conactViewItem}
      motorCycles ${conactViewItem}
      powerProduct ${conactViewItem}
      marine ${conactViewItem}
      metaDetails ${metaDetails}
    }
}`;
}
export const getAboutUsPageQuery = (language: string) => {
  return `query Aboutuses {
      aboutuses(locale: "${language}",${statusCondition}) {
        banner ${bannerItem}
        aboutUsItem {
          image ${image}
          content
        }
      metaDetails ${metaDetails}
    }
  }`;
};