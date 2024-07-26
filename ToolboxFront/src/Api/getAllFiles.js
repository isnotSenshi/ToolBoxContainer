import axios from 'axios'

export const getAllFiles = async () => {
     const response = await axios.get('http://localhost:3001/files/getFiles')
          .then((response) => { return response })
          .catch(() => { return null })

     return response

}
