import { useSelector } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";
import { useDispatch } from "react-redux";
import { ChangeEvent } from "react";
import { getRequirementFilterVisibility, getRequirementFilters, getRequirementFiltersValues } from "./redux/requirementFilter-selectors";
import { changeRequirementFilterVisibility, changeRequirementFiltersValue, cleanRequirementFilterValues } from "./redux/requirementFilterReducer";
//import './FilterGroupHeader.css';
//import './FilterGroupBody.css';

function RequirementFiltersForm(props: any) {
    let requirementFilters = useSelector(getRequirementFilters)
    let filterVisibility = useSelector(getRequirementFilterVisibility)
    let dispatch = useDispatch()

    return (
        <form onSubmit={props.handleSubmit}>
            {filterVisibility && 
                <div className='filter filter-property'>
                    <span className='filter-body'>
                        {requirementFilters.map((rf: any) => {
                            return (
                                <div key={rf.id}>
                                    <div className='filter-title'>{rf.title}</div>
                                    <Field className='form-control minmax' type="number" placeholder='min' component={'input'}
                                        name={rf.minName} maxLength={4} inputMode='numeric'/>
                                    <span className="sep"></span>
                                    <Field className='form-control minmax' type="number" placeholder='max' component={'input'} 
                                        name={rf.maxName} maxLength={4} inputMode='numeric'/>
                                    <span className="sep"></span>
                                </div>
                                
                            )
                        })}
                    </span>
                    <button className='btn remove-btn' title='Принять значения фильтра' name="acceptRequirementButton">Accept</button>
                </div>
            }
            
        </form>
    )
}

const RequirementFiltersReduxForm = reduxForm({
    form: 'requirementFilters'
})(RequirementFiltersForm)

export function RequirementFilters(props: any) {
    let dispatch = useDispatch()
    let filterVisibility = useSelector(getRequirementFilterVisibility)
    // let requirementFilterValues = useSelector(getRequirementFiltersValues)
    // console.log(requirementFilterValues)
    const setRequirementFiltersValue = (formData: any) => {
        dispatch(changeRequirementFiltersValue(formData))
    }
    const cleanFiltersValues = () => {
        dispatch(cleanRequirementFilterValues())
        dispatch(reset('requirementFilters'))
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeRequirementFilterVisibility(e.currentTarget.checked))
    }

    return (
        <div className="filter-group expanded">
            <div className='filter-group-header'>
                <div className="filter">
                    <span className='input-group-btn'>
                        <input className="btn toggle-btn"
                            type="checkbox" checked={filterVisibility} onChange={onChangeHandler} name="requirementCheckbox"/>
                    </span>
                    <span className='filter-body'>
                        <span className='filter-title filter-title-clickable'>
                            <span>Requirements</span>
                        </span>
                        <span className='input-group-btn'>
                            <button className='btn remove-btn' title='Очистить группу фильтра' 
                            name="requirementButton" onClick={cleanFiltersValues}>X</button>
                        </span>
                    </span>
                </div>
                
            </div>
            <RequirementFiltersReduxForm onSubmit={setRequirementFiltersValue}/>
        </div>
        
    )           
}