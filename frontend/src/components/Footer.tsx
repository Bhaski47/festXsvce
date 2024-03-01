import styles from "../styles/components/footer.module.css";
import svce from "../assets/images/svcelogo.png";
import { NavLink } from "react-router-dom";
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
              <NavLink className={({isActive})=>isActive ? styles.active : styles.inactive} to={"/"}>
                Home
              </NavLink>
            </p>
            <br />
            <p>
              <NavLink className={({isActive})=>isActive ? styles.active : styles.inactive} to={"/about"}>
                About
              </NavLink>
            </p>
            <br />
            <p>
              <NavLink className={({isActive})=>isActive ? styles.active : styles.inactive} to={"/departments"}>
                Events
              </NavLink>
            </p>
            <br />
            <p>
              <NavLink className={({isActive})=>isActive ? styles.active : styles.inactive} to={"/getPass"}>
                Get Passes
              </NavLink>
            </p>
            <br />
            <p>
              <NavLink className={({isActive})=>isActive ? styles.active : styles.inactive} to={"/sponsors"}>
                Sponsors
              </NavLink>
            </p>
            <br />
            <p>
              <NavLink className={({isActive})=>isActive ? styles.active : styles.inactive} to={"/location"}>
                Location
              </NavLink>
            </p>
          </section>
          <section className={styles.contacts}>
            <h2>Contact us</h2>
            <br />
            <p>
              <IoMail className={styles.contactLogo} />
              Mail: <a href="mailto:technoways.svce.ac.in" style={{textDecoration:'none',color:'white'}}>technoways.svce.ac.in</a>
            </p>
            <br />
            <p>
              <IoCall className={styles.contactLogo} />
              Number: <a href="tel:+91 95514 49859" style={{textDecoration:'none',color:'white'}}>95514 49859</a>
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
