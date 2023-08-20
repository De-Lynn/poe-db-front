import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ChangeEvent } from "react";
import { changeArmourFilterVisibility, } from "../redux/armourFilterReducer";
import { getArmourFilters, getArmourFilterVisibility } from "../redux/armourFilter-selectors";
import '../styles/FilterGroupHeader.css';
import '../styles/FilterGroupBody.css';
import { Field, useFormikContext} from "formik";
import { FilterHeader } from "./FilterHeader";

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
        </div>
    )
}

export function ArmourFilters(props: any) {
    let dispatch = useDispatch()
    let filterVisibility = useSelector(getArmourFilterVisibility)

    const cleanFiltersValues = () => {
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
    const formik = useFormikContext()

    return (
        <div className="filter-group expanded">
            <FilterHeader header="Armour Filters"
                checked={filterVisibility} inputId="armourCheckbox" inputName="armourCheckbox" onChange={onChangeHandler}
                onClick={cleanFiltersValues} btnName="armourButton" btnId="armourButton"
            />
            <ArmourFiltersForm />
        </div>
    )           
}