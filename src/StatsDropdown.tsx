import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setStats } from "./redux/statsFilterReducer";
import './NameDropdown.css'


const StatsDropdown = (props: any) => {
  const [showMenu, setShowMenu] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  const selectedValue = props.selectedValue
  const searchValue = props.searchValue
  
  useEffect(() => {
    const handler = (e: any) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false)
      }
    }
    window.addEventListener("click", handler)
    return () => {
      window.removeEventListener("click", handler)
    }
  })

  useEffect(() => {
    dispatch(props.setSearchValue(''))
    if (showMenu && searchRef.current) {
      searchRef.current.focus()
    }
  }, [showMenu])

  useEffect(() => {
    axios.get(`http://192.168.1.9:8080/api/stats?stat=${searchValue}`).then(response => {
      dispatch(setStats(response.data.stats))
    })
  }, [searchValue])

  const handleInputClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowMenu(!showMenu)
  }
  // const getDisplay = () => {
  //   if (selectedValue) {
  //     return selectedValue
  //   }
  //   return props.placeHolder;
  // }

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
    dispatch(props.setSearchValue(e.target.value))
  }

  const getOptions = () => {
    if (!searchValue) {
      return props.stats
    }
    return props.stats.filter((stat: any) => stat.stat.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)
  }

  return (
    <div className='multiselect filter-select'> {/* filter-select-mutate */}
      <div className="multiselect__select"></div>
      <div className="multiselect__tags" onClick={handleInputClick} ref={inputRef}>
        {props.isSearchable && (
          <input className="multiselect__input"
            onChange={onSearch} value={searchValue} ref={searchRef}
            onClick={handleInputClick} placeholder={props.placeHolder}/> /*placeholder={getDisplay()} */
        )}     
      </div>
      {showMenu && (
        <div className="multiselect__content-wrapper">
          <ul className="multiselect__content">
            {getOptions().slice(0, 100).map((s: any) => (
              <li className="multiselect__element" 
                onClick={() => onItemClick(s.stat, s.stat_order)} key={s.id}>
                  <span className="multiselect__option">
                    <span>{s.type}  </span>
                    <span>"{s.stat}"</span>
                    <br />
                  </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default StatsDropdown