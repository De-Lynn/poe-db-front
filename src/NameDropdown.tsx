import { useSelector } from "react-redux";
//import { getSearchValue, getSelectedValue, getShowMenu } from "./redux/dropdown-selectors";
import { useEffect, useRef } from "react";
//import { setSearchValue, setSelectedValue, setShowMenu } from "./redux/dropdownReducer";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setNamesPool } from "./redux/searchPanelReducer";
//import { getShowMenu } from "./redux/categoryFilter-selectors";


const NameDropdown = (props: any) => {
  // const showMenu = useSelector(getShowMenu)
  // const selectedValue = useSelector(getSelectedValue)
  // const searchValue = useSelector(getSearchValue)
  const searchRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  // const showMenu = props.getShowMenu(props.id)
  const showMenu = props.showMenu
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
        dispatch(props.setShowMenu(false))
      }
    }
    window.addEventListener("click", handler)
    return () => {
      window.removeEventListener("click", handler)
    }
  })

  useEffect(() => {
    // dispatch(setSearchValue(''))
    dispatch(props.setSearchValue(''))
    if (showMenu && searchRef.current) {
      searchRef.current.focus()
    }
  }, [showMenu])

  useEffect(() => {
    axios.get(`http://localhost:8080/api/names?name=${searchValue}`).then(response => {
      // dispatch(setResults(response.data.baseWeapons))
      dispatch(setNamesPool(response.data.names))
    })
  }, [searchValue])

  const handleInputClick = (e: React.MouseEvent<HTMLDivElement>) => {
    //e.stopPropagation()
    // dispatch(setShowMenu(!showMenu))
    dispatch(props.setShowMenu(!showMenu))
  }
  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue
    }
    return props.placeHolder;
  }

  const onItemClick = (name: string) => {
    dispatch(props.setSelectedValue(name))
  }

  const isSelected = (name: string) => {
    if (!selectedValue) {
      return false
    }
    return selectedValue === name
  }

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(setSearchValue(e.target.value))
    dispatch(props.setSearchValue(e.target.value))
  }

  const getOptions = () => {
    if (!searchValue) {
      return props.names
    }
    return props.names.filter((name: any) => name.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)
  }

  return (
    <>
      <div className="dropdown-input"
        onClick={handleInputClick} ref={inputRef}>
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool"></div>
        </div>
      </div>
      {showMenu && (
        <div className="dropdown-menu">
          {props.isSearchable && (
            <div className="search-box">
              <input onChange={onSearch} value={searchValue} ref={searchRef}/>
            </div>
          )}
          {getOptions().slice(0, 100).map((n: any) => (
            <div onClick={() => onItemClick(n.name)} 
              //key={n.id} 
              className={`dropdown-item ${isSelected(n.name) && "selected"}`}>
              {n.name}
            </div>
          ))}
        </div>
      )}
      
    </>
  )
}

export default NameDropdown