import styles from "./mob.module.css"
function ListHeader({title})
{
    return (
        <h3 className={styles.h3}>{title}</h3>
    )
}
export default ListHeader