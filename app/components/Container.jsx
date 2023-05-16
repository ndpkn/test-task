import styled from 'styled-components'

const Layout = styled.div`
    padding: 0.5rem 2rem;
    display: flex;
    max-width: 50rem;
    margin: 0 auto;
    flex-direction: column;
    `
const Container = ({ children }) => {
    return (
        <Layout>
            {children}
        </Layout>
    )
}

export default Container