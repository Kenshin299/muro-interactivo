import Posts from '../components/Posts'

function MainPage(props) {
    return (
        <div>
            <Posts auth={props.auth}/>
        </div>
    )
}

export default MainPage;