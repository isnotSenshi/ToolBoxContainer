
import RenderText from '../Text'
import { useContext } from 'react'
import { MAIN } from '../../Constants/components'
import FilesHook from '../../Hooks/filesHook'
import Input from '../../Styles/input'
import CustomBox from '../../Styles/customBox'
import { CONTEXT } from '../../App/context';

const FilesTable = () => {

     const { state } = useContext(CONTEXT)
     const { fileTextValue } = state
     const { handleChange, filteredList, handleValueById } = FilesHook()

     return (
          <CustomBox>
               <RenderText {...MAIN.titleFiles} />

               <CustomBox $styleString={`display: flex; justify-content: center;`}>
                    <Input
                         {...MAIN.inputFiles}
                         onChange={e => handleChange(e)}
                         value={fileTextValue ?? ''}
                         onBlur={() => handleChange('')}
                    />
               </CustomBox>
               <CustomBox {...MAIN.mainTable}>
                    {filteredList?.length > 0 ? filteredList?.map((e, i) => (
                         <CustomBox {...MAIN.mainListData(i + 1)} onClick={() => handleValueById(i)} key={'list-container-' + i} >
                              <RenderText $text={e} className={`text-value-${i}`} />
                         </CustomBox>
                    ))
                         : <CustomBox {...MAIN.mainListData(0)}>
                              <RenderText $text={'No results'} />
                         </CustomBox>}
               </CustomBox >
          </CustomBox>
     )
}
export default FilesTable
