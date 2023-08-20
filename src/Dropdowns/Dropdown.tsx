import { memo, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import '../styles/NameDropdown.css';
import '../styles/Dropdown.css';

const Dropdown = memo((props: any) => {
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
    dispatch(props.setSearchValue('', props.id))
    if (showMenu && searchRef.current) {
      searchRef.current.focus()
    }
  }, [showMenu])

  const handleInputClick = (e: React.MouseEvent<HTMLDivElement>) => {
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
      <div className="multiselect__select"></div>
      <div className="multiselect__tags" onClick={handleInputClick} ref={inputRef}>
        {props.isSearchable && (
          <input className="multiselect__input"
            onChange={onSearch} value={searchValue} ref={searchRef}
            placeholder={getDisplay()} onClick={handleInputClick}/>
        )}
      </div>
      {showMenu && (
        <div className="multiselect__content-wrapper">
          <ul className="multiselect__content">
            {getOptions().map((op: any) => (
              <li className="multiselect__element" onClick={() => onItemClick(op.option, op.type, op.category)} 
                key={op.id}>
                  <span className="multiselect__option">
                    <span>{op.option}</span>
                    <br />
                  </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
})

export default Dropdown