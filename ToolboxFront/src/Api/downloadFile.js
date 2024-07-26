import axios from 'axios'

export const downloadFile = async (fileName) => {
     const response = await axios.get(`http://localhost:3001/files/downloadFiles/${fileName}`)
          .then((response) => { return response })
          .catch(() => { return null })

     return response

}
