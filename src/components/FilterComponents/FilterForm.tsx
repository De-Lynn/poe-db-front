import React from "react";
import { Field } from "formik";

export const FilterForm = React.memo((props: any) => {

    return (
        <div className="filter-group-body">
            {props.filterVisibility &&
                props.filters.map((f: any) => {
                    return (
                        <div className='filter filter-property'>
                            <span className='filter-body'>
                                <div className='filter-title'>{f.title}</div>
                                <span className="sep"></span>
                                <Field className='form-control minmax' type="number" placeholder='min' component={'input'}
                                    name={`${f.fieldName}.${f[f.fieldName].minName}`} maxLength={4} inputMode='numeric' />
                                <span className="sep"></span>
                                <Field className='form-control minmax' type="number" placeholder='max' component={'input'}
                                    name={`${f.fieldName}.${f[f.fieldName].maxName}`} maxLength={4} inputMode='numeric' />
                                <span className="sep"></span>
                            </span>
                        </div>
                    );
                })}
        </div>
    );
});
