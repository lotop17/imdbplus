import styles from "../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>

        <div className="">
          <img
            src="https://a.storyblok.com/f/138109/490x324/695fd5fe50/logofestival.JPG"
            alt="Festival Min Logo"
            className=""
          />
        </div>
        <p>Website made by Emiel, Jun, Tony, Robbe, Jarne, Louis, Gilles and Rilke</p>
      </div>
    </footer>



  )
}

export default Footer
