import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setNameSelectedValue, setNamesPool } from "../../redux/searchPanelReducer";
// import '../../styles/NameDropdown.css';


const NameDropdown = (props: any) => {
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
    axios.get(`http://192.168.1.6:8080/api/names?name=${searchValue}`).then(response => {
      dispatch(setNamesPool(response.data.names))
    })
    // axios.get(`http://192.168.0.44:8080/api/names?name=${searchValue}`).then(response => {
    //   dispatch(setNamesPool(response.data.names))
    // })
  }, [searchValue])

  const handleInputClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowMenu(!showMenu)
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
    dispatch(props.setSearchValue(e.target.value))
  }

  const getOptions = () => {
    if (!searchValue) {
      return props.names
    }
    return props.names.filter((name: any) => name.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)
  }

  const onClickHandler = () => {
    dispatch(setNameSelectedValue(''))
  }

  return (
    <div className='multiselect search-select'>
      <div className="multiselect__select"></div>
      <div className="multiselect__tags" onClick={handleInputClick} ref={inputRef}>
        {props.isSearchable && 
          <input className="multiselect__input"
            onChange={onSearch} value={searchValue} ref={searchRef}
            onClick={handleInputClick} placeholder={getDisplay()}
          />
        }
      </div>
      <span className='input-group-btn'>
        <button className='btn remove-btn' title='Clear Filter Group'
          onClick={onClickHandler} name="itemNameBtn"
          id="itemNameBtn" type="button" />
        <label htmlFor="itemNameBtn"></label>
      </span>
      {showMenu && 
        <div className="multiselect__content-wrapper">
          <ul className="multiselect__content">
            {getOptions().slice(0, 100).map((n: any) => (
              <li className="multiselect__element" 
                onClick={() => onItemClick(n.name)} 
              >
                <span className="multiselect__option ">
                  <span>{n.name}</span>
                  <br />
                </span>
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  )
}

export default NameDropdown