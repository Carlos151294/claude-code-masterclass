import styles from "./Avatar.module.css"
import { getInitials } from "@/utils/getInitials"

export default function Avatar({ name }: { name: string }) {
  return <div className={styles.avatar}>{getInitials(name)}</div>
}
