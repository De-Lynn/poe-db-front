import './ControlsRight.css'

export function ControlsRight(props: any) {
    return (
        <div className='controls-right'>
            <button className='btn clear-btn' type='button'>
                <span>Clear</span>
            </button>
            <button className='btn toggle-search-btn' type='button'>
                <span className='chevron'></span>
                <span>Hide Filters</span>
            </button>
        </div>
    )
}