import s from "./Navbar.module.css";

const activeColor = ({isActive}) => isActive ? s.active : s.item

export default activeColor