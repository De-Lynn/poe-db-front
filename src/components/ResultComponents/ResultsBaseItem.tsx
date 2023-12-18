import { useSelector } from "react-redux";
import { getBaseWeaponsResults, getResults } from "../../redux/results-selector";
import '../../styles/ResultSet.css';
import ResultsBaseWeapons from "./ResultsWeaponsBase";
import ResultsBaseArmour from "./ResultsArmourBase";

const ResultsBaseItem = (props: any) => {
  // const result = useSelector(getBaseWeaponsResults).filter((f: any) => f.id===props.id)
  // const result = useSelector(getResults) //.filter((f: any) => f.id===props.id)
  const result = [props.r]
  // const newResult = result.filter((f: any) => f.id===props.id)
  // console.log('result' + result.map((f: any) => f.name))
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
            
            {/* <div className="content">
              <div className="property">
                <span className="lc">
                  <span>{props.r.subtype ? props.r.subtype : props.r.type}</span>
                </span>
              </div>
              {props.r.min_damage && 
                <div className="property">
                  <span className="lc s">
                    <span>Physical damage: </span>
                    <span className="colourDefault">{props.r.min_damage}-{props.r.max_damage}</span>
                  </span>
                </div>
              }
              {props.r.crit && 
                <div className="property">
                  <span className="lc s">
                    <span>Critical strike chance: </span>
                    <span className="colourDefault">{props.r.crit}</span> 
                  </span>
                </div>
              }
              {props.r.aps && 
                <div className="property">
                  <span className="lc s">
                    <span>Attacks per second: </span>
                    <span className="colourDefault">{props.r.aps}</span>
                  </span>
                </div>
              }
            </div> */}
            
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