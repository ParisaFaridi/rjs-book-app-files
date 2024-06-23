import { useState } from "react"
import { AiFillHeart } from "react-icons/ai"

import styles from "./BookCard.module.css"

function BookCard({data,handleLikeList}) {
    const [like,setLike]=useState(false);
    const likeHandler = ()=>{
        handleLikeList(data,like)
        setLike((like)=>!like)
    }
  return (
    <div className={styles.card}>
        <img src={data.image}/>
        <div className={styles.info}>
            <h3>{data.title}</h3>
            <p>{data.author}</p>
            <div>
                <span>{data.language} </span>
                <span>  {data.pages} pages</span>
            </div>
            <button><AiFillHeart color={like?"red":"white"} fontSize="1.8rem" onClick={likeHandler}/></button>
        </div>
        
    </div>
  )
}

export default BookCard