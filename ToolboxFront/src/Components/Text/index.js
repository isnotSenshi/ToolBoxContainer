import CustomText from '../../Styles/customText'

const RenderText = ({
	$text,
	color,
	$hovercolor,
	size,
	align,
	fontWeight,
	className,
	padding,
	$margin,
	onClick,
	$styleString,
	$bgColor,
	id
}) => {

	return (
		<CustomText
			id={id}
			className={className}
			color={color}
			size={size}
			align={align}
			$margin={$margin}
			onClick={onClick}
			fontWeight={fontWeight}
			padding={padding}
			$styleString={$styleString}
			$bgColor={$bgColor}
			$hovercolor={$hovercolor}
		>
			{$text}
		</CustomText>
	)
}

export default RenderText
