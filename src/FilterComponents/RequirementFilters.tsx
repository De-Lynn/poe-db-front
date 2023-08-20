import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ChangeEvent } from "react";
import { getRequirementFilterVisibility, getRequirementFilters, } from "../redux/requirementFilter-selectors";
import { changeRequirementFilterVisibility, changeRequirementFiltersValue, } from "../redux/requirementFilterReducer";
import '../styles/FilterGroupHeader.css';
import '../styles/FilterGroupBody.css';
import { Field, useFormikContext} from "formik";
import { FilterHeader } from "./FilterHeader";

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
        </div>
    )
}

export function RequirementFilters(props: any) {
    let dispatch = useDispatch()
    let filterVisibility = useSelector(getRequirementFilterVisibility)
    const setRequirementFiltersValue = (formData: any) => {
        dispatch(changeRequirementFiltersValue(formData))
    }
    const cleanFiltersValues = () => {
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
            <FilterHeader header="Requirements"
                checked={filterVisibility} inputId="requirementCheckbox" inputName="requirementCheckbox" onChange={onChangeHandler}
                onClick={cleanFiltersValues} btnName="requirementButton" btnId="reqButton"
            />
            <RequirementFiltersForm/>
        </div>
    )           
}