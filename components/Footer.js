import styles from "../styles/Footer.module.scss"
import { FacebookShareButton, FacebookIcon } from "next-share"


const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      <div className="sharebar">
           Share this website on facebook -> <FacebookShareButton url={'https://imdbplus-teal.vercel.app/'}
            quote={'Bring the festivals back to life/live'}
            hastag={'#festivals'}><FacebookIcon size={40} round /></FacebookShareButton>
          </div>
      <div className={styles.footer}>


        <div className="">
        <h>Website made by Emiel, Jun, Tony, Robbe, Jarne, Louis, Gilles and Rilke</h>
          <p><img
            src="https://a.storyblok.com/f/138109/490x324/695fd5fe50/logofestival.JPG"
            alt="Festival Min Logo"
            className=""

          /></p>
        </div>
      </div>
    
    </footer>



  )
}

export default Footer
