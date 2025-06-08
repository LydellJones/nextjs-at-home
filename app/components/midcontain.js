export default function WhiteContainer({extraClassName, children}) {
	return (
		<div className={"mmcontain "+extraClassName}>
			{children}
		</div>
	)
}
