import style from "./infoblocks.module.css"
import CreateInfoblocks from "./infoblocks";
import CreateNewBlocks from "./newBlocks";
import { Legalblocks } from "./legalTech";
import Er from "./er";

const AllInfoblocks = (props) => {
    
    return (
        <div id="menu" className={style.wrapper}>
            <CreateInfoblocks state={props.state} dispatch={props.dispatch} />
            <Er state={props.state} dispatch={props.dispatch} />
            <Legalblocks state={props.state} dispatch={props.dispatch} />
            <CreateNewBlocks state={props.state} dispatch={props.dispatch} />

        </div>
    )
}

export default AllInfoblocks