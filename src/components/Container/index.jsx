import "../../sass/components/Container.sass"

const Container = ({ children }) => {
    return (
        <main className="container">
            { children }
        </main>
    )
}

export default Container;