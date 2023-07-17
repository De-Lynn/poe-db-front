import { useSelector } from "react-redux";
// import { Field, reduxForm, reset } from "redux-form";
import { useDispatch } from "react-redux";
import { ChangeEvent } from "react";
import { getRequirementFilterVisibility, getRequirementFilters, getRequirementFiltersValues } from "./redux/requirementFilter-selectors";
import { changeRequirementFilterVisibility, changeRequirementFiltersValue, cleanRequirementFilterValues } from "./redux/requirementFilterReducer";
import './FilterGroupHeader.css';
import './FilterGroupBody.css';
import { Form, Formik, Field, useFormikContext} from "formik";

// function RequirementFiltersForm(props: any) {
//     let requirementFilters = useSelector(getRequirementFilters)
//     let filterVisibility = useSelector(getRequirementFilterVisibility)

//     return (
//         <form onSubmit={props.handleSubmit} className="filter-group-body">
//             {filterVisibility && 
//                 requirementFilters.map((rf: any) => {
//                     return (
//                         <div className='filter filter-property'>
//                             <span className='filter-body'>
//                                 <div className='filter-title'>{rf.title}</div>
//                                 <span className="sep"></span>
//                                 <Field className='form-control minmax' type="number" placeholder='min' component={'input'}
//                                     name={rf.minName} maxLength={4} inputMode='numeric'/>
//                                 <span className="sep"></span>
//                                 <Field className='form-control minmax' type="number" placeholder='max' component={'input'} 
//                                     name={rf.maxName} maxLength={4} inputMode='numeric'/>
//                             </span>
//                         </div>
//                     )
//                 })
//             }
//             {filterVisibility &&
//                 <button className='btn accept-btn' title='Принять значения фильтра' name="acceptRequirementButton">Accept</button>
//             }
//         </form>
//     )
// }

// const RequirementFiltersReduxForm = reduxForm({
//     form: 'requirementFilters'
// })(RequirementFiltersForm)

// export function RequirementFilters(props: any) {
//     let dispatch = useDispatch()
//     let filterVisibility = useSelector(getRequirementFilterVisibility)
//     // let requirementFilterValues = useSelector(getRequirementFiltersValues)
//     // console.log(requirementFilterValues)
//     const setRequirementFiltersValue = (formData: any) => {
//         dispatch(changeRequirementFiltersValue(formData))
//     }
//     const cleanFiltersValues = () => {
//         dispatch(cleanRequirementFilterValues())
//         dispatch(reset('requirementFilters'))
//     }
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         dispatch(changeRequirementFilterVisibility(e.currentTarget.checked))
//     }

//     return (
//         <div className="filter-group expanded">
//             <div className='filter-group-header'>
//                 <div className="filter">
//                     <span className='input-group-btn'>
//                         <input className="btn toggle-btn"
//                             type="checkbox" checked={filterVisibility} onChange={onChangeHandler} 
//                             name="requirementCheckbox" id="requirementCheckbox"/>
//                         <label htmlFor="requirementCheckbox"></label>
//                     </span>
//                     <span className='filter-body'>
//                         <span className='filter-title filter-title-clickable'>
//                             <span>Requirements</span>
//                         </span>
//                         <span className='input-group-btn'>
//                             <button className='btn remove-btn' title='Очистить группу фильтра' 
//                                 name="requirementButton" onClick={cleanFiltersValues}
//                                 id="reqButton"/>
//                             <label htmlFor="reqButton"></label>
//                         </span>
//                     </span>
//                 </div>
                
//             </div>
//             <RequirementFiltersReduxForm onSubmit={setRequirementFiltersValue}/>
//         </div>
//     )           
// }

function RequirementFiltersForm(props: any) {
    let requirementFilters = useSelector(getRequirementFilters)
    let filterVisibility = useSelector(getRequirementFilterVisibility)

    return (
        <div className="filter-group-body">
            {filterVisibility && 
                requirementFilters.map((rf: any) => {
                    return (
                        <div className='filter filter-property'>
                            <span className='filter-body'>
                                <div className='filter-title'>{rf.title}</div>
                                <span className="sep"></span>
                                <Field className='form-control minmax' type="number" placeholder='min' component={'input'}
                                    name={`reqValues.${rf.minName}`} maxLength={4} inputMode='numeric'/>
                                <span className="sep"></span>
                                <Field className='form-control minmax' type="number" placeholder='max' component={'input'} 
                                    name={`reqValues.${rf.maxName}`} maxLength={4} inputMode='numeric'/>
                            </span>
                        </div>
                    )
                })
            }
            {/* {filterVisibility &&
                <button className='btn accept-btn' title='Принять значения фильтра' name="acceptRequirementButton">Accept</button>
            } */}
        </div>
    )
}

// const RequirementFiltersReduxForm = reduxForm({
//     form: 'requirementFilters'
// })(RequirementFiltersForm)

export function RequirementFilters(props: any) {
    let dispatch = useDispatch()
    let filterVisibility = useSelector(getRequirementFilterVisibility)
    // let requirementFilterValues = useSelector(getRequirementFiltersValues)
    // console.log(requirementFilterValues)
    const setRequirementFiltersValue = (formData: any) => {
        dispatch(changeRequirementFiltersValue(formData))
    }
    const cleanFiltersValues = () => {
        // dispatch(cleanRequirementFilterValues())
        // dispatch(reset('requirementFilters'))
        formik.setFieldValue(`reqValues.minLvl`, '')
        formik.setFieldValue(`reqValues.maxLvl`, '')
        formik.setFieldValue(`reqValues.minStr`, '')
        formik.setFieldValue(`reqValues.maxStr`, '')
        formik.setFieldValue(`reqValues.minDex`, '')
        formik.setFieldValue(`reqValues.maxDex`, '')
        formik.setFieldValue(`reqValues.minInt`, '')
        formik.setFieldValue(`reqValues.maxInt`, '')
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeRequirementFilterVisibility(e.currentTarget.checked))
    }

    const formik = useFormikContext()
    return (
        <div className="filter-group expanded">
            <div className='filter-group-header'>
                <div className="filter">
                    <span className='input-group-btn'>
                        <input className="btn toggle-btn"
                            type="checkbox" checked={filterVisibility} onChange={onChangeHandler} 
                            name="requirementCheckbox" id="requirementCheckbox"/>
                        <label htmlFor="requirementCheckbox"></label>
                    </span>
                    <span className='filter-body'>
                        <span className='filter-title filter-title-clickable'>
                            <span>Requirements</span>
                        </span>
                        <span className='input-group-btn'>
                            <button className='btn remove-btn' title='Очистить группу фильтра' 
                                name="requirementButton" onClick={cleanFiltersValues} type="button"
                                id="reqButton"/>
                            <label htmlFor="reqButton"></label>
                        </span>
                    </span>
                </div>
                
            </div>
            <RequirementFiltersForm/>
        </div>
    )           
}