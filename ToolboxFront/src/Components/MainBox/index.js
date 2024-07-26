import CustomBox from '../../Styles/customBox'
import { MAIN } from '../../Constants/components'
import { FILE_DATA } from '../../Constants/components'
import RenderMedia from '../Media'
import FilesTable from '../AllFilesTable/index.js'
import { useContext } from 'react'
import FileDataContainer from '../../Components/FileDataContaine'
import { ADD_INITIAL_VALUE } from '../../Core/Types'
import { ICONS } from '../../Constants/icons'
import { CONTEXT } from '../../App/context.jsx';

const Main = () => {

     const { state, dispatch } = useContext(CONTEXT)
     const { selectedFileName, showModal } = state
     const fileCheck = selectedFileName && showModal

     const resetData = () => {
          dispatch({
               type: ADD_INITIAL_VALUE,
               value: { selectedFileName: '', showModal: false }
          })
     }

     return (<CustomBox {...MAIN.mainLayout}>
          <CustomBox onClick={() => resetData()} $styleString={'cursor: pointer;'}>
               <RenderMedia {...MAIN.mainIcon} src={fileCheck ? ICONS.BACK : ICONS.LOGO} />
          </CustomBox>

          {fileCheck ?
               <CustomBox {...FILE_DATA.tableBox}>
                    <FileDataContainer state={state} />
               </CustomBox>
               :

               <CustomBox {...MAIN.tableBox}>
                    <FilesTable />
               </CustomBox>
          }
     </CustomBox>)

}
export default Main
