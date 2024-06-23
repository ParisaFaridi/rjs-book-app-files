import {books as bookData} from "../constants/mockData"
import BookCard from "./BookCard"
import SideCard from "./SideCard";
import { useState } from "react";
import styles from "./Books.module.css"
import SearchBar from "./SearchBar";

function Books() {

  const [liked,setLiked]= useState([]);
  const [books,setBooks] = useState(bookData);
 
  const handleLikeList = (book,status)=>{
    console.log(status)
    if(status){
      const newLikedList = liked.filter((i)=> i.id !== book.id);
      
      setLiked(newLikedList)
      console.log(status)
    }else{
      setLiked((liked)=> [...liked,book])
      console.log(status)
    }
  }
  const [search,setSearch]=useState("");
  const searchHandler=()=>{
    if(search){
      setBooks(bookData.filter(book => book.title.toLowerCase().includes(search)))
    }else{
      setBooks(bookData)
    }
    
  }
  return (
    <div>

<SearchBar setSearch={setSearch} search={search} searchHandler={searchHandler}/>
    <div className={styles.container}>
        <div className={styles.card}>
        {books.map((book) => (
            <BookCard key={book.id} data={book} handleLikeList={handleLikeList}/>))
        }
        </div>
    <div > 
        {!!liked.length && <div className={styles.favorite}><h4>Favorite</h4>{liked.map(book => <SideCard data={book} key={book.id}/>)}</div>}
    </div>
        
    </div>
    </div>
  )
}

export default Books