import Festival from "./Festival";
import Nouvelles from "./Nouvelles";
import Social from "./Social";
import './style.scss'

const MultiGrid = () => {
    return (
        <div className={'multigrid'}>
            <Festival/>
            <Nouvelles/>
            <Social/>
        </div>
    )
}

export default MultiGrid;