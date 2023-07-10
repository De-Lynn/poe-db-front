import { useSelector } from "react-redux";
import { getBaseArmourResults } from "./redux/results-selector";
import './ResultSet.css';

const ResultsBaseArmour = (props: any) => {
  const result = useSelector(getBaseArmourResults).filter((f: any) => f.id===props.id)
  
  return (
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
              {/* <div className="property">
                <span className="lc">
                  <span>{result[0].subtype ? result[0].subtype : result[0].type}</span>
                </span>
              </div> */}
              {result[0].min_armour && 
                <div className="property">
                  <span className="lc s">
                    <span>Armour: </span>
                    <span className="colourDefault">{result[0].min_armour}-{result[0].max_armour}</span>
                  </span>
                </div>
              }
              {result[0].min_evasion && 
                <div className="property">
                  <span className="lc s">
                    <span>Evasion: </span>
                    <span className="colourDefault">{result[0].min_evasion}-{result[0].max_evasion}</span> 
                  </span>
                </div>
              }
              {result[0].min_es && 
                <div className="property">
                  <span className="lc s">
                    <span>Energy Shield: </span>
                    <span className="colourDefault">{result[0].min_es}-{result[0].max_es}</span>
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
            </div>
          </div>
        </div>
        {/* <div className="itemPopupAdditional">
          {result[0].dps &&
            <span className="lc s aug">
              DPS:&nbsp;
              <span className="colourAugmented">
                {result[0].dps}
              </span>
            </span>
          }
        </div> */}
      </div>
    </div>
  )
}

export default ResultsBaseArmour

{/* <BaseItemDiv>
    <BaseItemName>{r.name}</BaseItemName>
    {r.min_armour && <div>Armour: {r.min_armour}-{r.max_armour}</div>}
    {r.min_evasion && <div>Evasion: {r.min_evasion}-{r.max_evasion}</div>}
    {r.min_es && <div>Energy Shield: {r.min_es}-{r.max_es}</div>}
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
</BaseItemDiv> */}

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