import styles from "../styles/NavigationMobile.module.scss"
import React, { useState } from "react"

const NavigationMobile = ({ locale, locales }) => {

  const resolvefestivals = {
    en: 'Festivals',
    nl: 'Festivals',
    de: 'Festivals',
  }
  const resolveartists = {
    en: 'Artists',
    nl: 'Artiesten',
    de: 'Artisten',
  }
  const resolveNews = {
    en: 'News',
    nl: 'Nieuws',
    de: 'Nachrichten'
  }
  const resolveMerchandise = {
    en: 'Shop',
    nl: 'Winkel',
    de: "Geschäft"
  }
  function togglenav() {
    setNavstate(result.data.stories);
  }

  const [navstate,setNavstate] = useState(false);
  //setNavstate(true);

  const defaultLocale = locale === 'en' ? '/' : `/${locale}/`
  return (
    <header className={styles.navigationmobilewrapper}>
      <nav className={styles.navigationmobile} role="navigation">

        <div className={styles.navlogo}>
          <a href="/">
            <img
              src="https://a.storyblok.com/f/138109/490x324/695fd5fe50/logofestival.JPG"
              alt="Festival Logo"
              className=""
            />
          </a>
        </div>
        <div className={styles.hamburger} onClick={() => setNavstate(!navstate)}><div className={styles.line}></div><div className={styles.line}></div><div className={styles.line}></div></div>
        {navstate&&<div className={styles.navlinkswrapper}>
          <div className={styles.navlinks}>
            <div className={styles.navlink}>
            <a href={`${defaultLocale}pages/festivals`} className={styles.festival}>{resolvefestivals[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/artists`} className={styles.personality}>{resolveartists[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/news`} className={styles.newsitem}>{resolveNews[locale]}</a>
            </div>
            <div className={styles.navlink}>
              <a href={`${defaultLocale}pages/shop`} className={styles.product}>{resolveMerchandise[locale]}</a>
            </div>
          </div>
          <div className={styles.navlocales}>
            {
              locales.map(loc => {
                return (<div className={styles.navlocale} key={loc}>
                  <a href={`/${loc}`} className={`${locale === loc ? "selected" : ""}`}>{loc}</a>
                </div>)
              })
            }
          </div>
        </div>}

      </nav>
    </header>
  )
}

export default NavigationMobile
