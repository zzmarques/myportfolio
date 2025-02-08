const Title = ({ children }) => {
    return (
        <div className="container-title">
            <h1>{ children }</h1>

            <div className="linha"></div>
        </div>
    )
}

export default Title;