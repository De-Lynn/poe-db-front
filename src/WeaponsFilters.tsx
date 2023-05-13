import { useSelector } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import { getWeaponsFilters, getWeaponsFiltersValues, getWeaponsFilterVisibility } from "./redux/weaponsFilter-selectors";
import { useDispatch } from "react-redux";
import { changeWeaponsFiltersValue, cleanWeaponsFilterValues, changeWeaponsFilterVisibility } from "./redux/weaponsFilterReducer";
import { ChangeEvent } from "react";

function WeaponsFiltersForm(props: any) {
    let weaponsFilters = useSelector(getWeaponsFilters)
    let filterVisibility = useSelector(getWeaponsFilterVisibility)
    let dispatch = useDispatch()

    return (
        <form onSubmit={props.handleSubmit}>
            {filterVisibility && 
                <div className='filter filter-property full-span'>
                    <span className='filter-body'>
                        {weaponsFilters.map((wf: any) => {
                            return (
                                <div key={wf.id}>
                                    <div className='filter-title'>{wf.title}</div>
                                    <Field className='form-control minmax' type="number" placeholder='мин' component={'input'}
                                        name={wf.minName} maxLength={4} inputMode='numeric'/>
                                    <Field className='form-control minmax' type="number" placeholder='макс' component={'input'} 
                                        name={wf.maxName} maxLength={4} inputMode='numeric'/>
                                </div>
                                
                            )
                        })}
                    </span>
                    <button className='btn remove-btn' title='Принять значения фильтра' name="acceptWeaponsButton">Accept</button>
                </div>
            }
            
        </form>
    )
}

const WeaponsFiltersReduxForm = reduxForm({
    form: 'weaponsFilters'
})(WeaponsFiltersForm)

export function WeaponsFilters(props: any) {
    let dispatch = useDispatch()
    let filterVisibility = useSelector(getWeaponsFilterVisibility)
    // let weaponsFiltersValues = useSelector(getWeaponsFiltersValues)
    // console.log(weaponsFiltersValues)
    // const onMinBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     props.dispatch(changeRangeMinValue(e.currentTarget.value, props.id))
    //   }
    //   const onMaxBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     props.dispatch(changeRangeMaxValue(e.currentTarget.value, props.id))
    //   }
    const setWeaponsFiltersValue = (formData: any) => {
        dispatch(changeWeaponsFiltersValue(formData))
    }
    const cleanFiltersValues = () => {
        dispatch(cleanWeaponsFilterValues())
        dispatch(reset('weaponsFilters'))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        //debugger
        dispatch(changeWeaponsFilterVisibility(e.currentTarget.checked))
    }

    return (
        <div>
            <div className='filter-group-header'>
                <span className='input-group-btn'>
                    <input type="checkbox" checked={filterVisibility} onChange={onChangeHandler} name="weaponsCheckbox"/>
                </span>
                <span className='filter-body'>
                    <span className='filter-title filter-title-clickable'>
                        {/* <span>{props.filterTitle}</span> */}
                        <span>Weapon Filters</span>
                    </span>
                    <span className='input-group-btn'>
                        <button className='btn remove-btn' title='Очистить группу фильтра' 
                            name="weaponsButton" onClick={cleanFiltersValues}>X</button>
                    </span>
                </span>
            </div>
            <WeaponsFiltersReduxForm onSubmit={setWeaponsFiltersValue}/>
        </div>
        
    )           
}