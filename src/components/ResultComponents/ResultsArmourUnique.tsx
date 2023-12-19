const ResultsUniqueArmour = (props: any) => {
  return (
    <>
      {props.result.min_block && 
        <div className="property">
          <span className="lc s">
            <span>Chance to Block: </span>
            <span className="colourDefault">
              {props.result.min_block === props.result.max_block
                ? <span>{props.result.min_block}%</span> 
                : <span>{props.result.min_block}%-{props.result.max_block}%</span>
              }
            </span>
          </span>
        </div>
      }
      {props.result.min_armour && 
        <div className="property">
          <span className="lc s">
            <span>Armour: </span>
            <span className="colourDefault">{props.result.min_armour}-{props.result.max_armour}</span>
          </span>
        </div>
      }
      {props.result.min_evasion && 
        <div className="property">
          <span className="lc s">
            <span>Evasion: </span>
            <span className="colourDefault">{props.result.min_evasion}-{props.result.max_evasion}</span> 
          </span>
        </div>
      }
      {props.result.min_es && 
        <div className="property">
          <span className="lc s">
            <span>Energy Shield: </span>
            <span className="colourDefault">{props.result.min_es}-{props.result.max_es}</span>
          </span>
        </div>
      }
    </>
  )
}

export default ResultsUniqueArmour