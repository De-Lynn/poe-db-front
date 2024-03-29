import ResultsBaseWeapons from "./ResultsWeaponsBase";
import ResultsBaseArmour from "./ResultsArmourBase";
import ResultsBaseFlask from "./ResultsFlaskBase";

const ResultsBaseItem = (props: any) => {
  return (
    <div className="row">
      <div className="middle">
        <div className="itemPopupContainer newItemPopup normalPopup">
          <div className="itemBoxContent">
            <div className="itemHeader">
              <span className="l"></span>
              <div className="itemName typeLine">
                <span className="lc">{props.r.name}</span>
              </div>
              <span className="r"></span>
            </div>
            <div className="content">
              {props.r.dps && <ResultsBaseWeapons result={props.r}/>}
              {(props.r.min_armour || props.r.min_evasion || props.r.min_es) &&
                <ResultsBaseArmour result={props.r}/>
              }
              {props.r.type === 'Flask' && <ResultsBaseFlask result={props.r}/>}

            
              {(props.r.req_lvl || props.r.req_str || props.r.req_dex || props.r.req_int) &&
                <div className="separator"></div>
              }
              {(props.r.req_lvl || props.r.req_str || props.r.req_dex || props.r.req_int) && 
                <div className="requirements">
                  <span className="lc">
                    Requires&nbsp;
                    {props.r.req_lvl && 
                      <span className="s">
                        <span>Level </span>
                        <span className="colourDefault">{props.r.req_lvl}</span>
                      </span>}
                    {((props.r.req_str || props.r.req_dex || props.r.req_int) && props.r.req_lvl) &&
                      <span>,&nbsp;</span>}
                    {props.r.req_str && 
                      <span className="s">
                        <span className="colourDefault">{props.r.req_str} </span>
                        <span>Str</span>  
                      </span>}
                    {((props.r.req_dex || props.r.req_int) && props.r.req_str) &&
                      <span>,&nbsp;</span>}
                    {props.r.req_dex && 
                      <span className="s">
                        <span className="colourDefault">{props.r.req_dex} </span>
                        <span>Dex</span>
                      </span>}
                    {(props.r.req_int && props.r.req_dex) &&
                      <span>,&nbsp;</span>}
                    {props.r.req_int && 
                      <span className="s">
                        <span className="colourDefault">{props.r.req_int} </span>
                        <span>Int</span>    
                      </span>}
                  </span>
                </div>
              }
              {props.r.implicit[0]!==null && <div className="separator"></div>}
              {props.r.implicit[0]!==null && props.r.implicit.map((i: string) => 
                <div className="implicit-mod">
                  <span className="lc l"></span>
                  <span className="lc s">{i}</span>
                  <span className="lc r"></span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="itemPopupAdditional">
          {props.r.dps &&
            <span className="lc s aug">
              DPS:&nbsp;
              <span className="colourAugmented">
                {props.r.dps}
              </span>
            </span>
          }
        </div>
      </div>
    </div>
  )
}

export default ResultsBaseItem