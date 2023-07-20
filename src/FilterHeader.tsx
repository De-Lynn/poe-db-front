
export function FilterHeader(props: any) {
  return (
    <div className='filter-group-header'>
      <div className="filter">
        <span className='input-group-btn'>
          <input className="btn toggle-btn"
            type="checkbox" checked={props.checked} name={props.inputName}
            onChange={props.onChange} id={props.inputId} />
          <label htmlFor={props.inputId}></label>
        </span>
        <span className='filter-body'>
          <span className='filter-title filter-title-clickable'>
            <span>{props.header}</span>
          </span>
          <span className='input-group-btn'>
            <button className='btn remove-btn' title='Clear Filter Group'
              onClick={props.onClick} name={props.btnName}
              id={props.btnId} type="button" />
            <label htmlFor={props.btnId}></label>
          </span>
        </span>
      </div>
    </div>
  );
}
