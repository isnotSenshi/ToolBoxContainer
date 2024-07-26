const downloadFilesService = require('../services/donwloadFiles.js')
const getFilesService = require('../services/getFilesService.js')

const getFiles = async (req, res) => {

	const files = await getFilesService()

	return res.status(200).json({ files })
}

const donwloadFiles = async (req, res) => {

	const { filename } = req.params

	if (!filename)
		return res.status(404).json({ files: null })

	const files = await downloadFilesService(filename)

	let filesFormatted = []

	const splitFiles = () => {
		try {
			return files.split('\n')
		} catch {
			return files
		}
	}

	const arrayFiles = splitFiles()

	const formatArrayFiles = () => {
		arrayFiles?.forEach((array) => {
			const dummy = array?.split(',')
			filesFormatted?.push({
				text: dummy?.[1] ?? null,
				number: dummy?.[2] ?? null,
				hex: dummy?.[3] ?? null,
			})
		})
	}

	formatArrayFiles()

	return res.status(200).json({ file: filename, lines: filesFormatted })
}


module.exports = { getFiles, donwloadFiles }