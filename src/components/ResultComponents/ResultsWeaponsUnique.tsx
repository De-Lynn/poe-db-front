const ResultsUniqueWeapons = (props: any) => {
  return (
    <>
      {props.result.subtype &&
        <div className="property">
          <span className="lc">
            <span>{props.result.subtype ? props.result.subtype : props.result.type}</span>
          </span>
        </div>
      }
      
      {props.result.min_damage && 
        <div className="property">
          <span className="lc s">
            <span>Physical damage: </span>
            {props.result.min_damage === props.result.max_min_damage
              ? <span className="colourDefault">
                {props.result.min_damage}-{props.result.max_damage}
                </span>
              : <span className="colourDefault">
                ({props.result.min_damage}-{props.result.max_min_damage}) TO ({props.result.min_max_damage}-{props.result.max_damage})
                </span>
            }
          </span>
        </div>
      }
      {props.result.min_crit && 
        <div className="property">
          <span className="lc s">
            <span>Critical strike chance: </span>
            {props.result.min_crit === props.result.max_crit
              ? <span className="colourDefault">{props.result.min_crit}</span> 
              : <span className="colourDefault">{props.result.min_crit}-{props.result.max_crit}</span>
            }
          </span>
        </div>
      }
      {props.result.min_aps && 
        <div className="property">
          <span className="lc s">
            <span>Attacks per second: </span>
            {props.result.min_aps === props.result.max_aps
              ? <span className="colourDefault">{props.result.min_aps}</span>
              : <span className="colourDefault">{props.result.min_aps}-{props.result.max_aps}</span>
            }
          </span>
        </div>
      }
    </>
  )
}

export default ResultsUniqueWeapons