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
import { FilterHeader } from "./FilterHeader";

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
        </div>
    )
}

const weaponsFiltersFormValidate = (values: any) => {
    const errors = {}
    return errors
}

export function WeaponsFilters(props: any) {
    let dispatch = useDispatch()
    let filterVisibility = useSelector(getWeaponsFilterVisibility)

    const setWeaponsFiltersValue = (formData: any) => {
        dispatch(changeWeaponsFiltersValue(formData))
    }

    const cleanFiltersValues = () => {
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
            <FilterHeader header="Weapon Filters"
                checked={filterVisibility} inputId="weaponsCheckbox" inputName="weaponsCheckbox" onChange={onChangeHandler}
                onClick={cleanFiltersValues} btnName="weaponsButton" btnId="weaponsButton"
            />
            <WeaponsFiltersForm/>
        </div>
    )           
}