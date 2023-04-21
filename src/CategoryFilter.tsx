import { useState, ChangeEvent } from "react"
import { CategoryFilterPropsType } from "./SearchPanel"

export function CategoryFilter(props: CategoryFilterPropsType) {
    const [newInputValue, setNewInputValue] = useState('')
  
    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setNewInputValue(e.currentTarget.value)
    }
  
    const onButtonClickHandler = () => {
      props.setState(!props.state, props.id)
    }
  
    return (
      <div className='filter filter-property full-span'>
        <span className='filter-body'>
          <div className='filter-title'>{props.filterTitle}</div>
          <div className='multiselect filter-select'>
            <input className='multiselect_tags' type="text" value={props.filterValue}/>
            <input className='multiselect_tags' type="text" value={newInputValue} 
                  onChange={onInputChangeHandler}/>
            <button className='multiselect_select' 
                  onClick={onButtonClickHandler}>Развернуть</button>
            <div className='multiselect_content-wrapper'>
              {
                props.state && <select name="" id="">
                  {
                    props.content.map( (el) => {
                      const onSelectOptionClickHandler = () => {
                        props.setFilterValue(el.option, props.id)
                        props.setState(!props.state, props.id)
                      }
                      return (
                        <option className='multiselect_element' 
                                onClick={onSelectOptionClickHandler} key={el.id}>
                          <span className='multiselect_option'>
                            <span>{el.option}</span>
                          </span>
                        </option>
                      )
                    })
                  }
               </select>
              } 
            </div>
          </div>
        </span>
      </div>
    )
}