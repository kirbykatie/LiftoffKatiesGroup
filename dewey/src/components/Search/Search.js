//text input box 
//verify then save isbn number with use state oustide of use effect
//"+ state variable isbn"
//create raw data variable for isn input 

import { useState } from "react";
import { useEffect } from "react";
 





function Search () {
  const [rawInputData, setRawInputData] = useState ('');
  const [inputedIsbn, setInputedIsbn] = useState('');
  
  function VerifyIsbn () {
    if (rawInputData.length === 10 || 13) {
      setInputedIsbn = rawInputData
      return true;
    } 
  } 
  
  function ClickHandler () {
    if (VerifyIsbn === true) {
      setRawInputData = this.state
    }
  }
  
  
  useEffect(( ) => {
  
  if (inputedIsbn !== '' ) {
    var myHeaders = new Headers();
  myHeaders.append("qFonYTRYwNoLrx2R", "gUJoLA27E1C32mrq");

  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
  };

  fetch('https://openlibrary.org/isbn/+{inputedIsbn}')
   .then(res => res.json())
   .then(data => {
        fetch('https://covers.openlibrary.org/b/isbn/{inputedIbsn}-S.jpg')
        .then(res => res.json())
        .then(finalData => {console.log(finalData)})
    })
  }
  
  }, [inputedIsbn]);
return (
  <form>
  <label>
    Enter ISBN:
    <input type="text" name="isbn"
    value={rawInputData}
    onChange={(e) => setRawInputData(e.target.value)}
     />
  </label>
  <input type="submit" value="Submit" />
</form>
)
}

export default Search;
