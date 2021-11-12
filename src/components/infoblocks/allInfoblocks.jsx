import style from "./infoblocks.module.css"
import BlocksOfInfoblocksContainer from "./blocksOfInfoblocks-Container";
import store from "../../redux/redux-store";

const AllInfoblocks = (props) => {
   
    return (
        <div id="menu" className={style.wrapper}>
            <BlocksOfInfoblocksContainer store={store} state={props.state}/>
        </div>
    )
}

export default AllInfoblocks