import { useDispatch } from "react-redux";
import React, { ChangeEvent, useCallback } from "react";
import '../../styles/FilterGroupHeader.css';
import '../../styles/FilterGroupBody.css'
import { useFormikContext} from "formik";
import { FilterHeader } from "./FilterHeader";
import { FilterForm } from "./FilterForm";

const Filter = React.memo((props: any) => {
    let dispatch = useDispatch()

    const formik = useFormikContext();
    const cleanFiltersValues = useCallback(() => {
        props.filters.map((f: any) => {
            formik.setFieldValue(`${f.fieldName}.${f[f.fieldName].minName}`, '')
            formik.setFieldValue(`${f.fieldName}.${f[f.fieldName].maxName}`, '')
        })
    }, [])

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget)
        console.log(e.currentTarget.checked)
        dispatch(props.changeFilterVisibility(e.currentTarget.checked))
    }, [])

    return (
        <div className="filter-group expanded">
            <FilterHeader header={props.header} checked={props.filterVisibility} inputId={`${props.keyWord}Checkbox`} 
                inputName={`${props.keyWord}Checkbox`} onChange={onChangeHandler} onClick={cleanFiltersValues} 
                btnName={`${props.keyWord}Button`} btnId={`${props.keyWord}Button`}
            />
            <FilterForm filters={props.filters} filterVisibility={props.filterVisibility}/>
        </div>
    )           
})

export default Filter