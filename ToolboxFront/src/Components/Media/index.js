import { useState } from 'react'
import Media from '../../Styles/media'

const RenderMedia = ({
	name,
	src,
	hoverSrc,
	width,
	height,
	$hovercolor,
	$styleString,
	padding,
	$margin,
	center,
	$bgColor,
	$pointer,
	id,
	onClick
}) => {
	const [handledSrc, setHandledSrc] = useState(false)

	return (
		<Media
			padding={padding}
			$hovercolor={$hovercolor}
			$margin={$margin}
			src={handledSrc ? hoverSrc : src}
			alt={name}
			width={width}
			height={height}
			center={center}
			$bgColor={$bgColor}
			$pointer={$pointer}
			id={id}
			$styleString={$styleString}
			onClick={onClick}
		/>
	)
}

export default RenderMedia
