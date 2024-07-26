import { useContext, useEffect, useState } from 'react'
import { CONTEXT } from '../App/context.jsx'
import { ADD_INITIAL_VALUE } from '../Core/Types'
import { getAllFiles } from '../Api/getAllFiles'
import { filter as filterBy, toUpper } from 'lodash'
import { downloadFile } from '../Api/downloadFile'

const FilesHook = () => {
     const { state, dispatch } = useContext(CONTEXT)
     const { allFiles, fileTextValue, selectedFileName } = state
     const [filteredList, setFilteredList] = useState(allFiles)

     const handleChange = (e) => {
          if (e === '')
               setTimeout(() => {
                    dispatch({
                         type: ADD_INITIAL_VALUE,
                         value: { fileTextValue: '' }
                    })
               }, 100)
          else
               dispatch({
                    type: ADD_INITIAL_VALUE,
                    value: { fileTextValue: e?.target?.value }
               })
     }

     const saveAllFiles = async () => {
          await getAllFiles().then((res) => {
               dispatch({
                    type: ADD_INITIAL_VALUE,
                    value: { allFiles: res?.data?.files }
               })
          })
     }

     const getSingleFile = async (filename) => {
          await downloadFile(filename).then((res) => {
               dispatch({
                    type: ADD_INITIAL_VALUE,
                    value: { singleFile: res?.data }
               })
          })
     }

     const updateFiltered = (e) => {
          const filters = e ?? ''

          if (filters === null || filters === undefined)
               return

          setFilteredList(
               filterBy(allFiles, (name) => {
                    return toUpper(name)?.indexOf(toUpper(filters)) !== -1
               })
          )
     }

     const handleValueById = (i) => {

          const target = document.getElementsByClassName(`text-value-${i}`)

          target[0]?.textContent && dispatch({
               type: ADD_INITIAL_VALUE,
               value: { selectedFileName: target[0]?.textContent, showModal: true }
          })
     }

     useEffect(() => {
          getSingleFile(selectedFileName)
     }, [selectedFileName])

     useEffect(() => {
          saveAllFiles()
     }, [])

     useEffect(() => {
          updateFiltered(fileTextValue)
     }, [fileTextValue, allFiles])

     return {
          allFiles: state?.allFiles,
          handleChange,
          updateFiltered,
          filteredList,
          handleValueById,
          singleFile: state?.singleFile
     }
}

export default FilesHook
