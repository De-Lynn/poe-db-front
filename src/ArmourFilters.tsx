import { useSelector } from "react-redux";
// import { Field, reduxForm, reset } from "redux-form";
import { useDispatch } from "react-redux";
import { ChangeEvent } from "react";
import { changeArmourFiltersValue, changeArmourFilterVisibility, cleanArmourFilterValues } from "./redux/armourFilterReducer";
import { getArmourFilters, getArmourFiltersValues, getArmourFilterVisibility } from "./redux/armourFilter-selectors";
import './FilterGroupHeader.css';
import './FilterGroupBody.css';
import { Form, Formik, Field, useFormikContext} from "formik";
import { FilterHeader } from "./FilterHeader";

// function ArmourFiltersForm(props: any) {
//     let armourFilters = useSelector(getArmourFilters)
//     let filterVisibility = useSelector(getArmourFilterVisibility)

//     return (
//         <form onSubmit={props.handleSubmit} className="filter-group-body">
//             {filterVisibility && 
//                 armourFilters.map((af: any) => {
//                     return (
//                         <div className='filter filter-property'>
//                             <span className='filter-body'>
//                                 <div className='filter-title'>{af.title}</div>
//                                 <span className="sep"></span>
//                                 <Field className='form-control minmax' type="number" placeholder='min' component={'input'}
//                                     name={af.minName} maxLength={4} inputMode='numeric'/>
//                                 <span className="sep"></span>
//                                 <Field className='form-control minmax' type="number" placeholder='max' component={'input'} 
//                                     name={af.maxName} maxLength={4} inputMode='numeric'/>
//                             </span>
//                         </div>
//                     )
//                 })
//             }
//             {filterVisibility &&
//                 <button className='btn accept-btn' title='Принять значения фильтра' name="acceptArmourButton">Accept</button>
//             }
//         </form>
//     )
// }

// const ArmourFiltersReduxForm = reduxForm({
//     form: 'armourFilters'
// })(ArmourFiltersForm)

// export function ArmourFilters(props: any) {
//     let dispatch = useDispatch()
//     let filterVisibility = useSelector(getArmourFilterVisibility)

//     const setArmourFiltersValue = (formData: any) => {
//         dispatch(changeArmourFiltersValue(formData))
//     }
//     const cleanFiltersValues = () => {
//         dispatch(cleanArmourFilterValues())
//         dispatch(reset('armourFilters'))
//     }
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         dispatch(changeArmourFilterVisibility(e.currentTarget.checked))
//     }
//     // let armourFiltersValues = useSelector(getArmourFiltersValues)
//     // console.log(armourFiltersValues)

//     return (
//         <div className="filter-group expanded">
//             <div className='filter-group-header'>
//                 <div className="filter">
//                     <span className='input-group-btn'>
//                         <input className="btn toggle-btn" 
//                             type="checkbox" checked={filterVisibility} onChange={onChangeHandler} 
//                             name="armourCheckbox" id="armourCheckbox"/>
//                         <label htmlFor="armourCheckbox"></label>
//                     </span>
//                     <span className='filter-body'>
//                         <span className='filter-title filter-title-clickable'>
//                             <span>Armour Filters</span>
//                         </span>
//                         <span className='input-group-btn'>
//                             <button className='btn remove-btn' title='Очистить группу фильтра' 
//                                 name="armourButton" onClick={cleanFiltersValues}
//                                 id="armourButton"/>
//                             <label htmlFor="armourButton"></label>
//                         </span>
//                     </span>
//                 </div>
                
//             </div>
//             <ArmourFiltersReduxForm 
//             //onChange={setArmourFiltersValue} 
//             onSubmit={setArmourFiltersValue}/>
//         </div>
        
//     )           
// }

function ArmourFiltersForm(props: any) {
    let armourFilters = useSelector(getArmourFilters)
    let filterVisibility = useSelector(getArmourFilterVisibility)

    return (
        <div className="filter-group-body">
            {filterVisibility && 
                armourFilters.map((af: any) => {
                    return (
                        <div className='filter filter-property'>
                            <span className='filter-body'>
                                <div className='filter-title'>{af.title}</div>
                                <span className="sep"></span>
                                <Field className='form-control minmax' type="number" placeholder='min' component={'input'}
                                    name={`armourValues.${af.minName}`} maxLength={4} inputMode='numeric'/>
                                <span className="sep"></span>
                                <Field className='form-control minmax' type="number" placeholder='max' component={'input'} 
                                    name={`armourValues.${af.maxName}`} maxLength={4} inputMode='numeric'/>
                            </span>
                        </div>
                    )
                })
            }
            {/* {filterVisibility &&
                <button className='btn accept-btn' title='Принять значения фильтра' name="acceptArmourButton">Accept</button>
            } */}
        </div>
    )
}

// const ArmourFiltersReduxForm = reduxForm({
//     form: 'armourFilters'
// })(ArmourFiltersForm)

export function ArmourFilters(props: any) {
    let dispatch = useDispatch()
    let filterVisibility = useSelector(getArmourFilterVisibility)

    const setArmourFiltersValue = (formData: any) => {
        dispatch(changeArmourFiltersValue(formData))
    }
    const cleanFiltersValues = () => {
        //dispatch(cleanArmourFilterValues())
        // dispatch(reset('armourFilters'))
        // dispatch(props.cleanValues('armour'))
        formik.setFieldValue(`armourValues.minArmour`, '')
        formik.setFieldValue(`armourValues.maxArmour`, '')
        formik.setFieldValue(`armourValues.minEvasion`, '')
        formik.setFieldValue(`armourValues.maxEvasion`, '')
        formik.setFieldValue(`armourValues.minEs`, '')
        formik.setFieldValue(`armourValues.maxEs`, '')
        formik.setFieldValue(`armourValues.minBlock`, '')
        formik.setFieldValue(`armourValues.maxBlock`, '')
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeArmourFilterVisibility(e.currentTarget.checked))
    }
    // let armourFiltersValues = useSelector(getArmourFiltersValues)
    // console.log(armourFiltersValues)

    const formik = useFormikContext()
    return (
        <div className="filter-group expanded">
            <FilterHeader header="Armour Filters"
                checked={filterVisibility} inputId="armourCheckbox" inputName="armourCheckbox" onChange={onChangeHandler}
                onClick={cleanFiltersValues} btnName="armourButton" btnId="armourButton"
            />
            {/* <div className='filter-group-header'>
                <div className="filter">
                    <span className='input-group-btn'>
                        <input className="btn toggle-btn" 
                            type="checkbox" checked={filterVisibility} onChange={onChangeHandler} 
                            name="armourCheckbox" id="armourCheckbox"/>
                        <label htmlFor="armourCheckbox"></label>
                    </span>
                    <span className='filter-body'>
                        <span className='filter-title filter-title-clickable'>
                            <span>Armour Filters</span>
                        </span>
                        <span className='input-group-btn'>
                            <button className='btn remove-btn' title='Очистить группу фильтра' 
                                name="armourButton" onClick={cleanFiltersValues} type="button"
                                id="armourButton"/>
                            <label htmlFor="armourButton"></label>
                        </span>
                    </span>
                </div>
                
            </div> */}
            <ArmourFiltersForm />
        </div>
    )           
}