import { FILE_DATA } from '../../Constants/components'
import CustomBox from '../../Styles/customBox'
import RenderText from '../Text'
import FilesHook from '../../Hooks/filesHook'

const FileDataContainer = () => {
     const { singleFile } = FilesHook()

     return (
          <CustomBox {...FILE_DATA.mainTable}>
               <CustomBox {...FILE_DATA.mainTableList}>
                    {singleFile?.lines?.length > 0 ? singleFile?.lines?.map((e, i) => (
                         <CustomBox {...FILE_DATA.gridTable(i)}>
                              <CustomBox  {...FILE_DATA.dataItems[0]}>
                                   <RenderText $text={singleFile.file} />
                              </CustomBox>

                              <CustomBox {...FILE_DATA.dataItems[1]}>
                                   <RenderText $text={e.text} />
                              </CustomBox>

                              <CustomBox {...FILE_DATA.dataItems[2]}>
                                   <RenderText $text={e.number} />
                              </CustomBox>

                              <CustomBox {...FILE_DATA.dataItems[3]}>
                                   <RenderText $text={e.hex} />
                              </CustomBox>
                         </CustomBox>
                    )) :
                         <RenderText $text={'EMPTY'} color={'white'} />
                    }
               </CustomBox >
          </CustomBox>
     )
}
export default FileDataContainer
