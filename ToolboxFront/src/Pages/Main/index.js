
import Main from './../../Components/MainBox';
import { MAIN } from '../../Constants/components'
import CustomBox from '../../Styles/customBox';

const MainPage = () => {
     return (
          <CustomBox>
               <CustomBox {...MAIN.mainBox}>
                    <Main />
               </CustomBox>
          </CustomBox>
     )
}
export default MainPage
