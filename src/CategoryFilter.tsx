import { useState, ChangeEvent } from "react"
import { changeCategoriesInputValue, changeCategoriesState } from "./redux/categoryFilterReducer"
import { StringLiteralType } from "typescript"

type ContentType = {
  id: string
  option: string
  category: string
  type: string
}

type CategoryFilterPropsType = {
  id: string
  filterTitle: string
  content: Array<ContentType>
  state: boolean
  filterValue: string
  dispatch: (action: any) => void
}

export function CategoryFilter(props: CategoryFilterPropsType) {
    // const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //   setNewInputValue(e.currentTarget.value)
    // }

    const onButtonClickHandler = () => {
      props.dispatch(changeCategoriesState(!props.state, props.id))
    }
  
    return (
      <div className='filter filter-property full-span'>
        <span className='filter-body'>
          <div className='filter-title'>{props.filterTitle}</div>
          <div className='multiselect filter-select'>
            <input className='multiselect_tags' type="text" value={props.filterValue}/>
            {/* <input className='multiselect_tags' type="text" value={newInputValue} 
                  onChange={onInputChangeHandler}/> */}
            <button className='multiselect_select' 
                  onClick={onButtonClickHandler}>Развернуть</button>
            <div className='multiselect_content-wrapper'>
              {
                props.state && <select name="" id="">
                  {
                    props.content.map( (el) => {
                      const onSelectOptionClickHandler = () => {
                        props.dispatch(changeCategoriesInputValue(el.option, props.id, el.category, el.type))
                        props.dispatch(changeCategoriesState(!props.state, props.id))
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