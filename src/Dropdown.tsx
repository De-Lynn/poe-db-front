import { useSelector } from "react-redux";
//import { getSearchValue, getSelectedValue, getShowMenu } from "./redux/dropdown-selectors";
import { useEffect, useRef, useState } from "react";
//import { setSearchValue, setSelectedValue, setShowMenu } from "./redux/dropdownReducer";
import { useDispatch } from "react-redux";
//import { getShowMenu } from "./redux/categoryFilter-selectors";
import './NameDropdown';
import './Dropdown.css';

const Dropdown = (props: any) => {
  // const showMenu = useSelector(getShowMenu)
  // const selectedValue = useSelector(getSelectedValue)
  // const searchValue = useSelector(getSearchValue)
  const [showMenu, setShowMenu] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  // const showMenu = props.getShowMenu(props.id)
  //const showMenu = props.showMenu
  //const showMenu = useSelector(state => props.getShowMenu(state, props.id))
  // const selectedValue = props.getSelectedValue(props.id)
  const selectedValue = props.selectedValue
  //const selectedValue = useSelector(state => props.getSelectedValue(state, props.id))
  // const searchValue = props.getSearchValue(props.id)
  const searchValue = props.searchValue
  //const searchValue = useSelector(state => props.getSearchValue(state, props.id))

  // const showMenu = props.showMenu
  // const selectedValue = props.selecterValue
  // const searchValue = props.searchValue

  useEffect(() => {
    // const handler = () => setShowMenu(false)
    const handler = (e: any) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        //dispatch(props.setShowMenu(false, props.id))
        setShowMenu(false)
      }
    }
    // const handler = (e: MouseEvent): void => {
    //   if (e.target instanceof HTMLElement && inputRef.current && 
    //     !inputRef.current.contains(e.target)) {
    //     //dispatch(props.setShowMenu(false, props.id))
    //     setShowMenu(false)
    //   }
    // }
    window.addEventListener("click", handler)
    return () => {
      window.removeEventListener("click", handler)
    }
  })

  useEffect(() => {
    // dispatch(setSearchValue(''))
    dispatch(props.setSearchValue('', props.id))
    if (showMenu && searchRef.current) {
      searchRef.current.focus()
    }
  }, [showMenu])

  const handleInputClick = (e: React.MouseEvent<HTMLDivElement>) => {
    //e.stopPropagation()
    // dispatch(setShowMenu(!showMenu))
    //dispatch(props.setShowMenu(!showMenu, props.id))
    setShowMenu(!showMenu)
  }
  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue
    }
    return props.placeHolder;
  }

  const onItemClick = (option: string, type: string, category: string) => {
    dispatch(props.setSelectedValue(option, props.id, type, category))
  }

  const isSelected = (option: string) => {
    if (!selectedValue) {
      return false
    }
    return selectedValue === option
  }

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(setSearchValue(e.target.value))
    dispatch(props.setSearchValue(e.target.value, props.id))
  }

  const getOptions = () => {
    if (!searchValue) {
      return props.options
    }
    return props.options.filter((option: any) => option.option.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)
  }

  return (
    <div className='multiselect filter-select modified'> {/*multiselect--above */}
      {/* <div className="dropdown-input"
        onClick={handleInputClick} ref={inputRef}>
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool"></div>
        </div>
      </div> */}
      <div className="multiselect__select"></div>
      <div className="multiselect__tags">
        {props.isSearchable && (
          // <div className="search-box">
          // <div className="multiselect__tags">
          // <div>
            // <div className="dropdown-input"
            //   onClick={handleInputClick} ref={inputRef}>
            //   <div className="dropdown-selected-value">{getDisplay()}</div>
            //   <div className="dropdown-tools">
            //     <div className="dropdown-tool"></div>
            //   </div>
            // </div>
            // <div className="multiselect__spinner"></div>
            <input className="multiselect__input"
              onChange={onSearch} value={searchValue} ref={searchRef}
              placeholder={getDisplay()} onClick={handleInputClick}/>
          // </div>
          // </div>
          // </div>
        )}
      </div>
      {showMenu && (
        <div className="multiselect__content-wrapper">
          {/* {props.isSearchable && (
            // <div className="search-box">
            // <div className="multiselect__tags">
            <div>
              {/* <div className="multiselect__spinner"></div> }
              <input className="multiselect__input"
                onChange={onSearch} value={searchValue} ref={searchRef}/>
            </div>
              
            // </div>
              
            // </div>
          )} */}
          {/* {showMenu && ( */}
            <ul className="multiselect__content">
              {getOptions().map((op: any) => (
                // <div onClick={() => onItemClick(op.option, op.type, op.category)} 
                //   key={op.id} className={`dropdown-item ${isSelected(op.option) && "selected"}`}>
                //   {op.option}
                // </div>
                <li className="multiselect__element" onClick={() => onItemClick(op.option, op.type, op.category)} 
                  key={op.id}>
                    <span className="multiselect__option">
                      <span>{op.option}</span>
                      <br />
                    </span>
                </li>
              ))}
            </ul>
          {/* )} */}
        </div>
      )}
      
    </div>
  )
}

export default Dropdown