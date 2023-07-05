import { useSelector } from "react-redux";
//import { getSearchValue, getSelectedValue, getShowMenu } from "./redux/dropdown-selectors";
import { useEffect, useRef } from "react";
//import { setSearchValue, setSelectedValue, setShowMenu } from "./redux/dropdownReducer";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setStats } from "./redux/statsFilterReducer";
//import { getShowMenu } from "./redux/categoryFilter-selectors";


const StatsDropdown = (props: any) => {
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
    axios.get(`http://localhost:8080/api/stats?stat=${searchValue}`).then(response => {
      // dispatch(setResults(response.data.baseWeapons))
      dispatch(setStats(response.data.stats))
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

  const onItemClick = (stat: string, statOrder: number) => {
    dispatch(props.setSelectedValue(stat, statOrder))
  }

  const isSelected = (stat: string) => {
    if (!selectedValue) {
      return false
    }
    return selectedValue === stat
  }

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    // dispatch(setSearchValue(e.target.value))
    dispatch(props.setSearchValue(e.target.value))
  }

  const getOptions = () => {
    if (!searchValue) {
      return props.stats
    }
    return props.stats.filter((stat: any) => stat.stat.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)
  }

  return (
    <div className='multiselect filter-select filter-select-mutate'>
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
            // <div className="search-box">
            <div className="multiselect__tags">
              <input className="multiselect__input"
                onChange={onSearch} value={searchValue} ref={searchRef}/>
            </div>
          )}
          <div className="multiselect__content-wrapper">
            <ul className="multiselect__content">
             {getOptions().slice(0, 100).map((s: any) => (
                <li className="multiselect__element" 
                  onClick={() => onItemClick(s.stat, s.stat_order)} key={s.id}>
                    <span>{s.type}  </span>
                    <span>"{s.stat}"</span>
                  
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      )}
      
    </div>
  )
}

export default StatsDropdown