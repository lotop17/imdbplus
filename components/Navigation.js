import styles from "../styles/Navigation.module.scss"
import Image from "next/image"

const Navigation = ({ locale, locales }) => {
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
    de: 'Nachrichten',
  }
  const resolveMerchandise = {
    en: 'Shop',
    nl: 'Winkel',
    de: 'Geschäft',
  }
  let homeurl = "/";
  if (locale != 'default') {
    homeurl = "/" + locale;
  }

  const defaultLocale = locale === 'en' ? '/' : `/${locale}/`
  return (
    <header className={styles.navigationwrapper}>
      <nav className={styles.navigation} role="navigation">

        <div className={styles.navlogo}>
          <a href={homeurl}>
            <img
              src="https://a.storyblok.com/f/138109/490x324/695fd5fe50/logofestival.JPG"
              alt="Festival Logo"
              className=""
            /> 
           
          </a>
        </div>
        <div className={styles.navlinkswrapper}>
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
        </div>

      </nav>
    </header>
  )
}

export default Navigation
