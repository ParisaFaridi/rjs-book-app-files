import { IoSearchSharp } from "react-icons/io5"
import styles from "./SearchBar.module.css"

function SearchBar({search,setSearch,searchHandler}) {

  return (
    <div className={styles.search}>
        <input type="text" placeholder="Search here..." value={search} onChange={e=>setSearch(e.target.value.toLowerCase().trim())}/>
        <button onClick={searchHandler}><IoSearchSharp/></button>
    </div>
  )
}

export default SearchBar