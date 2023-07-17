import { useSelector } from "react-redux";
// import { Field, reduxForm, reset } from "redux-form";
import { getWeaponsFilters, getWeaponsFiltersValues, getWeaponsFilterVisibility } from "./redux/weaponsFilter-selectors";
import { useDispatch } from "react-redux";
import { changeWeaponsFiltersValue, cleanWeaponsFilterValues, changeWeaponsFilterVisibility } from "./redux/weaponsFilterReducer";
import { ChangeEvent } from "react";
import styled from "styled-components";
import './FilterGroupHeader.css';
import './FilterGroupBody.css'
import { Form, Formik, Field, useFormikContext} from "formik";

// function WeaponsFiltersForm(props: any) {
//     let weaponsFilters = useSelector(getWeaponsFilters)
//     let filterVisibility = useSelector(getWeaponsFilterVisibility)
//     let dispatch = useDispatch()

//     return (
//         <form onSubmit={props.handleSubmit} className="filter-group-body">
//             {filterVisibility && 
//                 weaponsFilters.map((wf: any) => {
//                     return (
//                         <div className='filter filter-property'>
//                             <span className='filter-body'>
//                                 <div className='filter-title'>{wf.title}</div>
//                                 <span className="sep"></span>
//                                 <Field className='form-control minmax' type="number" placeholder='min' component={'input'}
//                                     name={wf.minName} maxLength={4} inputMode='numeric'/>
//                                 <span className="sep"></span>
//                                 <Field className='form-control minmax' type="number" placeholder='max' component={'input'} 
//                                     name={wf.maxName} maxLength={4} inputMode='numeric'/>
//                             </span>
//                         </div>
//                     )
//                 }) 
//             }
//             {filterVisibility &&
//                 <button className='btn accept-btn' title='Принять значения фильтра' name="acceptWeaponsButton">Accept</button>
//             }
//         </form>
//     )
// }

// const WeaponsFiltersReduxForm = reduxForm({
//     form: 'weaponsFilters'
// })(WeaponsFiltersForm)

// const weaponsFiltersFormValidate = (values: any) => {
//     const errors = {}
//     return errors
// }

// export function WeaponsFilters(props: any) {
//     let dispatch = useDispatch()
//     let filterVisibility = useSelector(getWeaponsFilterVisibility)
//     // let weaponsFiltersValues = useSelector(getWeaponsFiltersValues)
//     // console.log(weaponsFiltersValues)
//     // const onMinBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     //     props.dispatch(changeRangeMinValue(e.currentTarget.value, props.id))
//     //   }
//     //   const onMaxBlurHandler = (e: ChangeEvent<HTMLInputElement>) => {
//     //     props.dispatch(changeRangeMaxValue(e.currentTarget.value, props.id))
//     //   }
//     const setWeaponsFiltersValue = (formData: any) => {
//         dispatch(changeWeaponsFiltersValue(formData))
//     }
//     const cleanFiltersValues = () => {
//         dispatch(cleanWeaponsFilterValues())
//         dispatch(reset('weaponsFilters'))
//     }
//     const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         //debugger
//         dispatch(changeWeaponsFilterVisibility(e.currentTarget.checked))
//     }

//     const submit = (values: any, {setSubmitting}:any) => {
//         setTimeout(() => {
//             alert(JSON.stringify(values, null, 2))
//             setSubmitting(false)
//         }, 400)
//     }

//     return (
//         <div className="filter-group expanded">
//             <div className='filter-group-header'>
//                 <div className="filter">
//                     <span className='input-group-btn'>
//                         <input className="btn toggle-btn"
//                             type="checkbox" checked={filterVisibility} onChange={onChangeHandler} 
//                             name="weaponsCheckbox" id="weaponsCheckbox"/>
//                         <label htmlFor="weaponsCheckbox"></label>
//                     </span>
//                     <span className='filter-body'>
//                         <span className='filter-title filter-title-clickable'>
//                             {/* <span>{props.filterTitle}</span> */}
//                             <span>Weapon Filters</span>
//                         </span>
//                         <span className='input-group-btn'>
//                             <button className='btn remove-btn' title='Очистить группу фильтра' 
//                                 name="weaponsButton" onClick={cleanFiltersValues}
//                                 id="weaponsButton"/>
//                             <label htmlFor="weaponsButton"></label>
//                         </span>
//                     </span>
//                 </div>
                
//             </div>
//             <WeaponsFiltersReduxForm onSubmit={setWeaponsFiltersValue}/>
//             {/* <Formik
//                 initialValues={{damageMinValue: '', damageMaxValue: ''}}
//                 validate={weaponsFiltersFormValidate}  
//                 onSubmit={submit}  
//             >
//                 {({isSubmitting}) => (
//                     <div className="filter-group-body">
//                         <Form>
//                             <div className='filter filter-property'>
//                                 <span className='filter-body'>
//                                     <div className='filter-title'>Damage</div>
//                                     <span className="sep"></span>
//                                     <Field className='form-control minmax' type='number' name='damageMinValue' component='input'/>
//                                     <span className="sep"></span>
//                                     <Field className='form-control minmax' type='number' name='damageMaxValue' component='input'/>
//                                  </span>
//                             </div>
//                             <button className='btn accept-btn' type="submit" disabled={isSubmitting}>
//                                 Accept
//                             </button>
//                         </Form>
//                     </div>
                    
//                 )}
//             </Formik> */}
//         </div>
        
//     )           
// }

// const FilterTitle = styled.span`
//     height: 16px
// `

// const FirstInputField = styled.span`
//     position: absolute;
//     left: 160px;
//     width: px;
// `

// const SecondInputField = styled.span`
//     position: absolute;
//     left: 320px;
// `

function WeaponsFiltersForm(props: any) {
    let weaponsFilters = useSelector(getWeaponsFilters)
    let filterVisibility = useSelector(getWeaponsFilterVisibility)
    let dispatch = useDispatch()

    return (
        <div className="filter-group-body">
            {filterVisibility && 
                weaponsFilters.map((wf: any) => {
                    return (
                        <div className='filter filter-property'>
                            <span className='filter-body'>
                                <div className='filter-title'>{wf.title}</div>
                                <span className="sep"></span>
                                <Field className='form-control minmax' type="number" placeholder='min' component={'input'}
                                    name={`weaponValues.${wf.minName}`} maxLength={4} inputMode='numeric'/>
                                <span className="sep"></span>
                                <Field className='form-control minmax' type="number" placeholder='max' component={'input'} 
                                    name={`weaponValues.${wf.maxName}`} maxLength={4} inputMode='numeric'/>
                            </span>
                        </div>
                    )
                }) 
            }
            {/* {filterVisibility &&
                <button className='btn accept-btn' title='Принять значения фильтра' name="acceptWeaponsButton">Accept</button>
            } */}
        </div>
    )
}

// const WeaponsFiltersReduxForm = reduxForm({
//     form: 'weaponsFilters'
// })(WeaponsFiltersForm)

const weaponsFiltersFormValidate = (values: any) => {
    const errors = {}
    return errors
}

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
        //dispatch(cleanWeaponsFilterValues())
        // dispatch(reset('weaponsFilters'))
        // dispatch(props.cleanValues('weapon'))
        
        formik.setFieldValue(`weaponValues.minDamage`, '')
        formik.setFieldValue(`weaponValues.maxDamage`, '')
        formik.setFieldValue(`weaponValues.minAps`, '')
        formik.setFieldValue(`weaponValues.maxAps`, '')
        formik.setFieldValue(`weaponValues.minDps`, '')
        formik.setFieldValue(`weaponValues.maxDps`, '')
        formik.setFieldValue(`weaponValues.minCrit`, '')
        formik.setFieldValue(`weaponValues.maxCrit`, '')
        

    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        //debugger
        dispatch(changeWeaponsFilterVisibility(e.currentTarget.checked))
    }

    const submit = (values: any, {setSubmitting}:any) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
        }, 400)
    }
    const formik = useFormikContext();

    return (
        <div className="filter-group expanded">
            <div className='filter-group-header'>
                <div className="filter">
                    <span className='input-group-btn'>
                        <input className="btn toggle-btn"
                            type="checkbox" checked={filterVisibility} onChange={onChangeHandler} 
                            name="weaponsCheckbox" id="weaponsCheckbox"/>
                        <label htmlFor="weaponsCheckbox"></label>
                    </span>
                    <span className='filter-body'>
                        <span className='filter-title filter-title-clickable'>
                            {/* <span>{props.filterTitle}</span> */}
                            <span>Weapon Filters</span>
                        </span>
                        <span className='input-group-btn'>
                            <button className='btn remove-btn' title='Очистить группу фильтра' 
                                name="weaponsButton" //onClick={cleanFiltersValues}
                                id="weaponsButton" type="button" onClick={cleanFiltersValues}
                                />
                            <label htmlFor="weaponsButton"></label>
                        </span>
                    </span>
                </div>
                
            </div>
            <WeaponsFiltersForm/>
            {/* <Formik
                initialValues={{damageMinValue: '', damageMaxValue: ''}}
                validate={weaponsFiltersFormValidate}  
                onSubmit={submit}  
            >
                {({isSubmitting}) => (
                    <div className="filter-group-body">
                        <Form>
                            <div className='filter filter-property'>
                                <span className='filter-body'>
                                    <div className='filter-title'>Damage</div>
                                    <span className="sep"></span>
                                    <Field className='form-control minmax' type='number' name='damageMinValue' component='input'/>
                                    <span className="sep"></span>
                                    <Field className='form-control minmax' type='number' name='damageMaxValue' component='input'/>
                                 </span>
                            </div>
                            <button className='btn accept-btn' type="submit" disabled={isSubmitting}>
                                Accept
                            </button>
                        </Form>
                    </div>
                    
                )}
            </Formik> */}
        </div>
        
    )           
}