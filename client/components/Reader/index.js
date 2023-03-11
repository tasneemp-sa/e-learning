
import React, {useEffect, useState} from 'react'
import { ReactReader } from "react-reader"
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBookData, selectBookData } from '../../reducers/readerSlice';
import './Reader.css'


function Reader(props) {
  const {bookId} = useParams();
  const dispatch = useDispatch();
  const bookData = useSelector(selectBookData);
  console.log('bookData',bookData)

// And your own state logic to persist state
const [location, setLocation] = useState(null)
const locationChanged = (epubcifi) => {
  // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
  setLocation(epubcifi)
}

let cfiString = "";

useEffect(() => {
  async function getBookData () {
    await dispatch(fetchBookData(parseInt(bookId)));
  }
  getBookData();

//   if (window.localStorage.getItem("bookLoc")){
//     cfiString = window.localStorage.getItem("bookLoc");
//     setLocation(cfiString);
// }
}, [dispatch]);



// window.addEventListener("beforeunload", () => {
// console.log('inside beforeunload')
//   location = this.rendition.currentLocation()
//   cfiString = location.start.cfi;
//   window.localStorage.setItem("bookLoc", cfiString);
//   setLocation(cfiString);
// });

// url="/Books/youdontknowjs_es6andbeyond.epub"
return (
  <div style={{ height: "100vh" }}>
    {bookData && bookData.id ? (
      <ReactReader
      location={location}
      locationChanged={locationChanged}
      url={`${bookData.book_data}`}
    />
    ) : "Loading"}
    
  </div>
)
}


export default Reader;
