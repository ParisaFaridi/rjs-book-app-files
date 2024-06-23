
import styles from "./BookCard.module.css"

function SideCard({data}) {
    console.log(data)
  return (
    <div className={styles.card}>
        <img src={data.image} alt="" />
        <p>{data.title}</p>
    </div>
  )
}

export default SideCard