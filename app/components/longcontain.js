export default function LongContainer({extraClassName, children}) {
	return (
		<div className={"lgcontain flex flex-row "+extraClassName}>
			{children}
		</div>
	)
}
