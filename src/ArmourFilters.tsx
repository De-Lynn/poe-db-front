import { useSelector } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import { useDispatch } from "react-redux";
import { ChangeEvent } from "react";
import { changeArmourFiltersValue, changeArmourFilterVisibility, cleanArmourFilterValues } from "./redux/armourFilterReducer";
import { getArmourFilters, getArmourFiltersValues, getArmourFilterVisibility } from "./redux/armourFilter-selectors";

function ArmourFiltersForm(props: any) {
    let armourFilters = useSelector(getArmourFilters)
    let filterVisibility = useSelector(getArmourFilterVisibility)
    let dispatch = useDispatch()

    return (
        <form onSubmit={props.handleSubmit}>
            {filterVisibility && 
                <div className='filter filter-property full-span'>
                    <span className='filter-body'>
                        {armourFilters.map((af: any) => {
                            return (
                                <div key={af.id}>
                                    <div className='filter-title'>{af.title}</div>
                                    <Field className='form-control minmax' type="number" placeholder='мин' component={'input'}
                                        name={af.minName} maxLength={4} inputMode='numeric'/>
                                    <Field className='form-control minmax' type="number" placeholder='макс' component={'input'} 
                                        name={af.maxName} maxLength={4} inputMode='numeric'/>
                                </div>
                                
                            )
                        })}
                    </span>
                    <button className='btn remove-btn' title='Принять значения фильтра' name="acceptArmourButton">Accept</button>
                </div>
            }
            
        </form>
    )
}

const ArmourFiltersReduxForm = reduxForm({
    form: 'armourFilters'
})(ArmourFiltersForm)

export function ArmourFilters(props: any) {
    let dispatch = useDispatch()
    let filterVisibility = useSelector(getArmourFilterVisibility)

    const setArmourFiltersValue = (formData: any) => {
        dispatch(changeArmourFiltersValue(formData))
    }
    const cleanFiltersValues = () => {
        dispatch(cleanArmourFilterValues())
        dispatch(reset('armourFilters'))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeArmourFilterVisibility(e.currentTarget.checked))
    }
    // let armourFiltersValues = useSelector(getArmourFiltersValues)
    // console.log(armourFiltersValues)

    return (
        <div>
            <div className='filter-group-header'>
                <span className='input-group-btn'>
                    <input type="checkbox" checked={filterVisibility} onChange={onChangeHandler} name="armourCheckbox"/>
                </span>
                <span className='filter-body'>
                    <span className='filter-title filter-title-clickable'>
                        <span>Фильтры защиты</span>
                    </span>
                    <span className='input-group-btn'>
                        <button className='btn remove-btn' title='Очистить группу фильтра' 
                            name="armourButton" onClick={cleanFiltersValues}>X</button>
                    </span>
                </span>
            </div>
            <ArmourFiltersReduxForm 
            //onChange={setArmourFiltersValue} 
            onSubmit={setArmourFiltersValue}/>
        </div>
        
    )           
}