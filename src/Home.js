function Home(props){
    var a=parseInt(props.n1);
    var b=parseInt(props.n2);
    return(
        <>
            {props.children}<br/>
            A value is {a}<br/>
            B value is {b}<br/>
            Sum is {a+b}
        </>
    )
}
Home.defaultProps={
    n1: 0
}

export default Home;