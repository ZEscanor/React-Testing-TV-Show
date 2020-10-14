import axios from 'axios';



// export const female = (url) => {
//     return axios.get(url)
//       .then((res) => res) 
//       .catch((err)=>(console.log(err)))
//   }


export const female = (setShow, setSeasons) => {
    return axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then((res) => res)
      .catch((err) => console.log("axios error:", err));
  };