import { useSelector } from "react-redux";
import { getUniqueWeaponsResults } from "./redux/results-selector";
import './ResultSet.css';

const ResultsUniqueWeapons = (props: any) => {
  const result = useSelector(getUniqueWeaponsResults).filter((f: any) => f.id===props.id)
  {console.log(result[0])}
  
  return (
    <div className="row">
      <div className="middle">
        <div className="itemPopupContainer newItemPopup uniquePopup">
          <div className="itemBoxContent">
            <div className="itemHeader doubleLine">
              <span className="l"></span>
              <div className="itemName">
                <span className="lc">{result[0].name}&nbsp;</span>
              </div>
              <div className="itemName typeLine">
                <span className="lc">{result[0].base}</span>
              </div>
              <span className="r"></span>
            </div>
            <div className="content">
              <div className="property">
                <span className="lc">
                  <span>{result[0].subtype ? result[0].subtype : result[0].type}</span>
                </span>
              </div>
              {result[0].min_damage && 
                <div className="property">
                  <span className="lc s">
                    <span>Physical damage: </span>
                    {result[0].min_damage === result[0].max_min_damage
                      ? <span className="colourDefault">
                        {result[0].min_damage}-{result[0].max_damage}
                        </span>
                      : <span className="colourDefault">
                        ({result[0].min_damage}-{result[0].max_min_damage}) TO ({result[0].min_max_damage}-{result[0].max_damage})
                        </span>
                    }
                  </span>
                </div>
              }
              {result[0].min_crit && 
                <div className="property">
                  <span className="lc s">
                    <span>Critical strike chance: </span>
                    {result[0].min_crit === result[0].max_crit
                      ? <span className="colourDefault">{result[0].min_crit}</span> 
                      : <span className="colourDefault">{result[0].min_crit}-{result[0].max_crit}</span>
                    }
                  </span>
                </div>
              }
              {result[0].min_aps && 
                <div className="property">
                  <span className="lc s">
                    <span>Attacks per second: </span>
                    {result[0].min_aps === result[0].max_aps
                      ? <span className="colourDefault">{result[0].min_aps}</span>
                      : <span className="colourDefault">{result[0].min_aps}-{result[0].max_aps}</span>
                    }
                  </span>
                </div>
              }
              <div className="separator"></div>
              {(result[0].req_lvl || result[0].req_str || result[0].req_dex || result[0].req_int) &&
                <div className="requirements">
                  <span className="lc">
                    Requires&nbsp;
                    {result[0].req_lvl && 
                      <span className="s">
                        <span>Level </span>
                        <span className="colourDefault">{result[0].req_lvl}</span>
                      </span>},&nbsp;
                    {result[0].req_str && 
                      <span className="s">
                        <span className="colourDefault">{result[0].req_str} </span>
                        <span>Str</span>  
                      </span>},&nbsp;
                    {result[0].req_dex && 
                      <span className="s">
                        <span className="colourDefault">{result[0].req_dex} </span>
                        <span>Dex</span>
                      </span>},&nbsp;
                    {result[0].req_int && 
                      <span className="s">
                        <span className="colourDefault">{result[0].req_int} </span>
                        <span>Int</span>    
                      </span>}
                  </span>
                </div>
              }
              {result[0].implicit[0]!==null && <div className="separator"></div>}
              {result[0].implicit[0]!==null && result[0].implicit.map((i: string) => 
                <div className="implicit-mod">
                  <span className="lc l"></span>
                  <span className="lc s">{i}</span>
                  <span className="lc r"></span>
                </div>
              )}
              {result[0].stats[0]!==null && <div className="separator"></div>}
              {result[0].stats[0]!==null && result[0].stats.map((i: string) => 
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
          {result[0].dps &&
            <span className="lc s aug">
              DPS:&nbsp;
              <span className="colourAugmented">
                {result[0].dps}
              </span>
            </span>
          }
        </div>
          {/* <BaseItemName>{r.name}</BaseItemName> */}
          {/* <div>{r.subtype ? r.subtype : r.type}</div> */}
          {/* {r.min_damage && <div>Physical damage: {r.min_damage}-{r.max_damage}</div>} */}
          {/* {r.crit && <div>Critical strike chance: {r.crit}</div>} */}
          {/* {r.aps && <div>Attacks per second: {r.aps}</div>} */}
          {/* {(r.req_lvl || r.req_str || r.req_dex || r.req_int) &&
              <div>
                  Requires 
                  {r.req_lvl && <span> Level {r.req_lvl},</span>}
                  {r.req_str && <span> {r.req_str} Str,</span>}
                  {r.req_dex && <span> {r.req_dex} Dex,</span>}
                  {r.req_int && <span> {r.req_int} Int</span>}
              </div>
          } */}
          {/* {r.implicit && r.implicit.map((i: string) => <div>{i}</div>)} */}
      </div>
    </div>
  )
}

export default ResultsUniqueWeapons

{/* <UniqueItemDiv>
  <UniqueItemName>{r.name} {r.base}</UniqueItemName>
  <div>{r.subtype ? r.subtype : r.type}</div>
  {r.min_damage &&
  <div>Physical damage: {r.min_damage === r.max_min_damage 
                          ? <span>{r.min_damage}-{r.max_damage}</span>
                          : <span>({r.min_damage}-{r.max_min_damage}) TO ({r.min_max_damage}-{r.max_damage})</span>
                          }
  </div>}
  {r.min_crit &&
  <div>Critical strike chance: {r.min_crit === r.max_crit 
                          ? <span>{r.min_crit}</span> 
                          : <span>{r.min_crit}-{r.max_crit}</span>
                          }
  </div>}
  {r.min_aps &&
  <div>Attacks per second: {r.min_aps === r.max_aps
                          ? <span>{r.min_aps}</span>
                          : <span>{r.min_aps}-{r.max_aps}</span>
                          }
  </div>}
  {(r.req_lvl || r.req_str || r.req_dex || r.req_int) && 
  <div>
      Requires 
      {r.req_lvl && <span> Level {r.req_lvl},</span>}
      {r.req_str && <span> {r.req_str} Str,</span>}
      {r.req_dex && <span> {r.req_lvl} Dex,</span>}
      {r.req_int && <span> {r.req_int} Int</span>}
  </div>
  }
  {r.implicit && r.implicit.map((i: string) => <div>{i}</div>)}
  <hr />
  {r.stats && r.stats.map((s: string) => <div>{s}</div>)}
</UniqueItemDiv> */}

// const ItemDiv = styled.div`
//     margin: 4px;
//     padding: 4px;
//     background: #ccc;

// `

// const RareItemDiv = styled.div`
//     margin: 4px;
//     padding: 4px;
//     border: #863 2px solid;

// `

// const RareItemName = styled.div`
//   background: #863;
//   color: #ee4;
//   text-align: center;

// `