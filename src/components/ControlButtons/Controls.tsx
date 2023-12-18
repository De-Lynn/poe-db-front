import { useDispatch } from "react-redux"
import '../../styles/Controls.css'
import { ControlsRight } from "./ControlsRight"
import { changeFiltersVisibility } from "../../redux/searchPanelReducer"

export function Controls(props: any) {
    let dispatch = useDispatch()

    const onSearchClickHandler = () => {
        dispatch(changeFiltersVisibility(false))
    }
    return (
        <div className='controls'>
            {/* <div className="controls-left"></div> */}
            <div className='controls-center'>
                <button className='btn search-btn' type="submit" onClick={onSearchClickHandler}> 
                    <span>Search</span>
                </button>
            </div>
            <ControlsRight/>
        </div>
    )
}