const [apiData, setApiData ] = useState('');

  useEffect(( ) => {
  
  var myHeaders = new Headers();
  myHeaders.append("qFonYTRYwNoLrx2R", "gUJoLA27E1C32mrq");

  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
  };

  fetch("https://api.jsonbin.io/v3/b/618336b69548541c29cd57f7", requestOptions)
  .then(response => response.json())
  .then(result => setApiData(result))
  .catch(error => console.log('error', error));
   console.log();
  },[]);
