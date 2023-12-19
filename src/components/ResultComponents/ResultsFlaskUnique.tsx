const ResultsUniqueFlask = (props: any) => {
  return (
    <>
      {props.result.min_life_rec && 
        <div className="property">
          <span className="lc s">
            <span>Recovers </span>
            <span className="colourDefault">
              {props.result.min_life_rec === props.result.max_life_rec
                ? props.result.min_life_rec
                : <span>{props.result.min_life_rec}-{props.result.max_life_rec}</span>
              }
            </span>
            <span> Life over </span>
            <span className="colourDefault">
              {props.result.min_duration === props.result.max_duration
                ? props.result.min_duration
                : <span>{props.result.min_duration}-{props.result.max_duration}</span>
              }
            </span>
            <span> Seconds</span>
          </span>
        </div>
      }
      {props.result.min_mana_rec && 
        <div className="property">
          <span className="lc s">
            <span>Recovers </span>
            <span className="colourDefault">
              {props.result.min_mana_rec === props.result.max_mana_rec
                ? props.result.min_mana_rec
                : <span>{props.result.min_mana_rec}-{props.result.max_mana_rec}</span>
              }
            </span>
            <span> Mana over </span>
            <span className="colourDefault">
              {props.result.min_duration === props.result.max_duration
                ? props.result.min_duration
                : <span>{props.result.min_duration}-{props.result.max_duration}</span>
              }
            </span>
            <span> Seconds</span>
          </span>
        </div>
      }
      {props.result.subtype === 'Utility' && 
        <div className="property">
          <span className="lc s">
            <span>Lasts </span>
            <span className="colourDefault">
              {props.result.min_duration === props.result.max_duration
                ? props.result.min_duration
                : <span>{props.result.min_duration}-{props.result.max_duration}</span>
              }
            </span>
            <span> Seconds</span>
          </span>
        </div>
      }
      <div className="property">
        <span className="lc s">
          <span>Consumes </span>
          <span className="colourDefault">
            {props.result.min_usage === props.result.max_usage
              ? props.result.min_usage
              : <span>{props.result.min_usage}-{props.result.max_usage}</span>
            }
          </span>
          <span> of </span>
          <span className="colourDefault">
            {props.result.min_capacity === props.result.max_capacity
              ? props.result.min_capacity
              : <span>{props.result.min_capacity}-{props.result.max_capacity}</span>
            }
          </span>
          <span> Charges on use</span>
        </span>
      </div>

      {props.result.buffs[0] !== null && props.result.buffs.map((b: string) =>
        <div className="utilityMod">
          <span className="lc">{b}</span>
        </div>
      )}
    </>
  )
}

export default ResultsUniqueFlask