import { NextPage } from "next"
import styles from '../styles/Landing.module.css'
const Landing : NextPage =()=>{
   return (
    <div className=
    {styles.bodyBg}>
    <h1 className={styles.heading}>HONEST REVIEWS</h1>
    <h4 className={styles.subtext}>Review your favourite movies on chain and earn exciting award.
    <br />
    Lets Get Started !!!!</h4>
 <button className={styles.btn}>Review!!</button>
    </div>
   )
}
export default Landing;