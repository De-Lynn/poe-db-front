import { useSelector } from "react-redux";
import { getBaseWeaponsResults } from "./redux/results-selector";
import './ResultsBaseWeapons.css';

const ResultsBaseWeapons = (props: any) => {
  // let result = useSelector(getBaseWeaponsResults).filter((f: any) => f.id===props.id)
  const result = useSelector(getBaseWeaponsResults).filter((f: any) => f.id===props.id)
  // console.log(props.id)
  return (
    // <>
    //   {results.length!==0 && results.map( (r: any) => {
    //     return (
          <div className="row">
            <div className="middle">
              <div className="itemPopupContainer newItemPopup normalPopup">
                <div className="itemBoxContent">
                  <div className="itemHeader">
                    <span className="l"></span>
                    <div className="itemName typeLine">
                      <span className="lc">{result[0].name}</span>
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
                            <span className="colourDefault">{result[0].min_damage}-{result[0].max_damage}</span>
                          </span>
                        </div>
                      }
                      {result[0].crit && 
                        <div className="property">
                          <span className="lc s">
                            <span>Critical strike chance: </span>
                            <span className="colourDefault">{result[0].crit}</span> 
                          </span>
                        </div>
                      }
                      {result[0].aps && 
                        <div className="property">
                          <span className="lc s">
                            <span>Attacks per second: </span>
                            <span className="colourDefault">{result[0].aps}</span>
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
                      <div className="separator"></div>
                      {result[0].implicit && result[0].implicit.map((i: string) => 
                        <div className="implicitMod">
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
        // )
    //   })
    // }
    // </>
  )
}

export default ResultsBaseWeapons

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