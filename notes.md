  const API = import.meta.env.VITE_API_URL;
  const [ dataArr, setDataArr ] = useState([])
  
  useEffect(() => {
    fetch(`${API}/stats`).then(res => {
      return res.json();
    })
    .then(res => setDataArr(res));
  },[])

  console.log(dataArr);