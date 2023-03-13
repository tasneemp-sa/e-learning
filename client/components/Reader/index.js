
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

// And your own state logic to persist state
const [location, setLocation] = useState(null)
const locationChanged = (epubcifi) => {
  // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
  // epubcifi = "/1/1[titlepage]!/1/1/1[pgepubid00003]/3:0"
  setLocation(epubcifi)
}

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

      getRendition={(rendition) => {
        rendition.themes.register('custom', {
          body: {
            color: "black"
          },
          img: {
            border: '1px solid red'
          },
          p: {
            color: "black"
          }
        })
        rendition.themes.select('custom')
      }}
    />
    ) : "Loading"}
    
  </div>
)
}


export default Reader;
