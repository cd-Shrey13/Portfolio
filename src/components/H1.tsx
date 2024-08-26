interface headingProps {
    className?: string,
    children: React.ReactNode,
}
export default function H1({className, children}: headingProps){
    return(
        <>
        <h1 className={className}>{children}</h1>
        </>
    )
}