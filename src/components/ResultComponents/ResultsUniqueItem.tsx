import ResultsUniqueWeapons from "./ResultsWeaponsUnique";
import ResultsUniqueArmour from "./ResultsArmourUnique";
import ResultsUniqueFlask from "./ResultsFlaskUnique";

const ResultsUniqueItem = (props: any) => {
  return (
    <div className="row">
      <div className="middle">
        <div className="itemPopupContainer newItemPopup uniquePopup">
          <div className="itemBoxContent">
            <div className="itemHeader doubleLine">
              <span className="l"></span>
              <div className="itemName">
                <span className="lc">{props.r.name}&nbsp;</span>
              </div>
              <div className="itemName typeLine">
                <span className="lc">{props.r.base}</span>
              </div>
              <span className="r"></span>
            </div>
            <div className="content">
              {props.r.min_damage && <ResultsUniqueWeapons result={props.r}/>}
              {(props.r.min_armour || props.r.min_evasion || props.r.min_es) &&
                <ResultsUniqueArmour result={props.r}/>
              }
              {props.r.min_usage && <ResultsUniqueFlask result={props.r}/>}
              
              <div className="separator"></div>
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
              {props.r.stats[0]!==null && <div className="separator"></div>}
              {props.r.stats[0]!==null && props.r.stats.map((i: string) => 
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
          {props.r.min_dps &&
            <span className="lc s aug">
              DPS:&nbsp;
              <span className="colourAugmented">
                {props.r.min_dps === props.r.max_dps
                  ? props.r.min_dps
                  : <span>{props.r.min_dps}-{props.r.max_dps}</span>
                }
              </span>
            </span>
          }
        </div>
      </div>
    </div>
  )
}

export default ResultsUniqueItem