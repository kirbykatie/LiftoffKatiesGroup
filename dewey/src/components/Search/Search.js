//text input box 
//verify then save isbn number with use state oustide of use effect
//"+ state variable isbn"
//create raw data variable for isn input 

import { useState } from "react";

function Search () {
  const [rawInputData, setInputData] = useState ('');
  const [apiData, setApiData ] = useState('');
  const [inputedIsbn, setInputedIsbn] = useState('');
  useEffect(( ) => {
  
  if (inputedIsbn != '' ) {
    var myHeaders = new Headers();
  myHeaders.append("qFonYTRYwNoLrx2R", "gUJoLA27E1C32mrq");

  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
  };

  fetch('https://openlibrary.org/isbn/'+'')
   .then(res => res.json())
   .then(data => {
        fetch('https://covers.openlibrary.org/b/isbn/-S.jpg')
        .then(res => res.json())
        .then(finalData => {console.log(finalData)})
    })
  }
  
  }, [inputedIsbn])

}

export default Search;
