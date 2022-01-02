import React, { useState } from "react"
import styles from "../styles/EmailOptin.module.scss"

const EmailOptin = ({ }) => {
  function toggleformstate() {
    setFormstate(!formstate);
  }
  const [formstate,setFormstate] = useState(false);
  return (
    
    <div className={styles.emailoptin}>
      <div className={styles.optinbutton} onClick={() => toggleformstate()}>Keep me posted through the newsletter</div>
      {formstate&&<iframe width="540" height="900" src="https://b6aa584f.sibforms.com/serve/MUIEAFQYPK_Y-tGAIdpozXT_6m5EPtWvnigxkeBjRzRKmUO4i3zDc0l5DM3FqnN-MbEYGuMTFISmoIqT48wETJtKVu_oTH5BiPCeCSJSwYsQhgxDO6XvJ3vzsSbe0ey2f4LnLQUjhZlR8rlNxtrBYf88YZgwfqJF7kxfXXNsSIpiC0uwnv4MMwjnvTmV_vYM7sAno_s7eapFupCs" frameborder="0" scrolling="auto" allowfullscreen style={{ display: `block`, marginLeft: `auto`, marginRight: `auto`, maxWidth: '100%' }}></iframe>}
    </div>
  );
};

export default EmailOptin;
