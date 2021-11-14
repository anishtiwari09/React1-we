import styles from './mob.module.css'

function MobList({title}){
    return (
        <li className={styles.li}>{title}</li>
    )
}
export default MobList