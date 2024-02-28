import styles from "../styles/components/footer.module.css";
import svce from "../assets/images/svcelogo.png";
import { Link } from "react-router-dom";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoMail,
  IoCall,
  IoLocation,
} from "react-icons/io5";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.foot}></div>
      </div>
        <div className={styles.footer}>
          <div className={styles.svceContainer}>
            <img src={svce} alt="SVCE" className={styles.clgLogo} />
            <h2>A National Level Technical Fest</h2>
            <div>
              <IoCall className={styles.footerLogo} />
              <IoLocation className={styles.footerLogo} />
              <IoLogoFacebook className={styles.footerLogo} />
              <IoLogoInstagram className={styles.footerLogo} />
              <IoMail className={styles.footerLogo} />
            </div>
          </div>
          <div className={styles.menuContactsDiv}>
            <section className={styles.menu}>
              <h2>Menu</h2>
              <br />
              <p>
                <Link style={{ color: "white" }} to={"/"}>
                  Home
                </Link>
              </p>
              <br />
              <p>
                <Link style={{ color: "white" }} to={"/about"}>
                  About
                </Link>
              </p>
              <br />
              <p>
                <Link style={{ color: "white" }} to={"/departments"}>
                  Events
                </Link>
              </p>
              <br />
              <p>
                <Link style={{ color: "white" }} to={"/getPass"}>
                  Get Passes
                </Link>
              </p>
              <br />
              <p>
                <Link style={{ color: "white" }} to={"/sponsors"}>
                  Sponsors
                </Link>
              </p>
              <br />
              <p>
                <Link style={{ color: "white" }} to={"/location"}>
                  Location
                </Link>
              </p>
            </section>
            <section className={styles.contacts}>
              <h2>Contact us</h2>
              <br />
              <p>
                <IoMail className={styles.contactLogo} />
                Mail: xyz.svce.ac.in
              </p>
              <br />
              <p>
                <IoCall className={styles.contactLogo} />
                Number: 99999 99999
              </p>
              <br />
              <p className={styles.addressPara}>
                <IoLocation className={styles.contactLogo} />
                Address: Sri Venkateswara College of Enginnering, Post Bag No.1,
                Pennalur Village Chennai - Bangaluru High Road Sriperumbudur Tk,
                Tamil Nadu 602117
              </p>
              <br />
            </section>
          </div>
        </div>
      
    </div>
  );
};

export default Footer;
