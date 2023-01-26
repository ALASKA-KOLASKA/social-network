import s from "./Page.module.css";

const activeColor = ({isActive}) => isActive ? s.active : s.item

export default activeColor