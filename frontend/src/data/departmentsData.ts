import ae from "../assets/images/departments/auto.webp";
import bt from "../assets/images/departments/biotech.webp";
import ce from "../assets/images/departments/chemical.webp";
import civil from "../assets/images/departments/civil.webp";
import cs from "../assets/images/departments/cs.webp";
import ece from "../assets/images/departments/ece.webp";
import eee from "../assets/images/departments/eee.webp";
import it from "../assets/images/departments/IT.webp";
import me from "../assets/images/departments/mech.webp";
import club from "../assets/images/departments/csi.webp";
import ieee from "../assets/images/departments/ieee.webp";
// import workshops from "../assets/images/departments/IT.webp";
// import pros from "../assets/images/proshow.webp";

const departmentsData: {
  id: string;
  name: string;
  img: string;
}[] = [
  { id: "auto", name: "Automobile Engineering", img: ae },
  { id: "bio", name: "BioTechnology", img: bt },
  { id: "chem", name: "Chemical Engineering", img: ce },
  { id: "civil", name: "Civil Engineering", img: civil },
  { id: "cse", name: "Computer Science", img: cs },
  { id: "ece", name: "Electric & Communication Engineering", img: ece },
  { id: "eee", name: "Electric & Electronics Engineering", img: eee },
  { id: "int", name: "Information Technology", img: it },
  { id: "mech", name: "Mechanical Engineering", img: me },
  { id: "ieee_club", name: "IEEE Student Chapter", img: ieee },
  { id: "csi_club", name: "CSI Student Chapter", img: club },
  // { id: "workshops", name: "Workshops", img: workshops },
  // { id: "proshows", name: "Proshows", img: pros },
];

export default departmentsData;
