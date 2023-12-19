const ResultsBaseWeapons = (props: any) => {
  return (
    <>
      <div className="property">
        <span className="lc">
          <span>{props.result.subtype ? props.result.subtype : props.result.type}</span>
        </span>
      </div>
      {props.result.min_damage && 
        <div className="property">
          <span className="lc s">
            <span>Physical damage: </span>
            <span className="colourDefault">{props.result.min_damage}-{props.result.max_damage}</span>
          </span>
        </div>
      }
      {props.result.crit && 
        <div className="property">
          <span className="lc s">
            <span>Critical strike chance: </span>
            <span className="colourDefault">{props.result.crit}</span> 
          </span>
        </div>
      }
      {props.result.aps && 
        <div className="property">
          <span className="lc s">
            <span>Attacks per second: </span>
            <span className="colourDefault">{props.result.aps}</span>
          </span>
        </div>
      }
    </>
  )
}

export default ResultsBaseWeapons