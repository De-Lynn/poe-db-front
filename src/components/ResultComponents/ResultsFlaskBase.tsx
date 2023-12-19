const ResultsBaseFlask = (props: any) => {
  return (
    <>
      {props.result.life_rec && 
        <div className="property">
          <span className="lc s">
            <span>Recovers </span>
            <span className="colourDefault">{props.result.life_rec}</span>
            <span> Life over </span>
            <span className="colourDefault">{props.result.duration}</span>
            <span> Seconds</span>
          </span>
        </div>
      }
      {props.result.mana_rec && 
        <div className="property">
          <span className="lc s">
            <span>Recovers </span>
            <span className="colourDefault">{props.result.mana_rec}</span>
            <span> Mana over </span>
            <span className="colourDefault">{props.result.duration}</span>
            <span> Seconds</span>
          </span>
        </div>
      }
      {props.result.subtype === 'Utility' && 
        <div className="property">
          <span className="lc s">
            <span>Lasts </span>
            <span className="colourDefault">{props.result.duration}</span>
            <span> Seconds</span>
          </span>
        </div>
      }
      <div className="property">
        <span className="lc s">
          <span>Consumes </span>
          <span className="colourDefault">{props.result.charges_used}</span>
          <span> of </span>
          <span className="colourDefault">{props.result.charges_max}</span>
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

export default ResultsBaseFlask