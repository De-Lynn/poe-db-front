import { useSelector } from "react-redux"
import { getBaseWeaponsResults, getUniqueWeaponsResults, getBaseArmourResults, getUniqueArmourResults, 
    getBaseJewelleryResults, getUniqueJewelleryResults, getBaseFlasksResults, getUniqueFlasksResults, getRareWeaponResults, getRareArmourResults, getRareJewelleryResults, getRareFlasksResults, getNameSortAsc} from "./redux/results-selector"
import styled from "styled-components"
import { useEffect, useRef, useState } from "react"
import { v1 } from "uuid"
import RareStatsList from "./RareStatsList"
import { sortResultsByName, changeNameSort } from "./redux/resultsReducer"
import { useDispatch } from "react-redux"
import ResultsBaseWeapons from "./ResultsBaseWeapons"

export function Results(props:any) {
    let baseWeaponsResults = useSelector(getBaseWeaponsResults)
    let rareWeaponsResults = useSelector(getRareWeaponResults)
    let uniqueWeaponsResults = useSelector(getUniqueWeaponsResults) 
    let baseArmourResults = useSelector(getBaseArmourResults)
    let rareArmourResults = useSelector(getRareArmourResults)
    let uniqueArmourResults = useSelector(getUniqueArmourResults) 
    let baseJewelleryResults = useSelector(getBaseJewelleryResults)
    let rareJewelleryResults = useSelector(getRareJewelleryResults)
    let uniqueJewelleryResults = useSelector(getUniqueJewelleryResults) 
    let baseFlasksResults = useSelector(getBaseFlasksResults)
    let rareFlasksResults = useSelector(getRareFlasksResults)
    let uniqueFlasksResults = useSelector(getUniqueFlasksResults) 
    let nameSortAsc = useSelector(getNameSortAsc)
    const dispatch = useDispatch()

    const [statDiv, setDivOpen] = useState(false);
    const divRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const handler = (e: any) => {
          if (divRef.current && !divRef.current.contains(e.target)) {
            //dispatch(props.setShowMenu(false, props.id))
            setDivOpen(false)
          }
        }
        window.addEventListener("click", handler)
        return () => {
          window.removeEventListener("click", handler)
        }
    })

    const showMoreStats = () => {
        setDivOpen(!statDiv)
    }

    const reverseNameSort = () => {
        dispatch(changeNameSort())
        dispatch(sortResultsByName())
    }
    return (
        // <div>
        //     {(baseWeaponsResults.length!==0 || rareWeaponsResults.length!==0 || uniqueWeaponsResults.length!==0 
        //     || baseArmourResults.length!==0 || rareArmourResults.length!==0 || uniqueArmourResults.length!==0
        //     || baseJewelleryResults.length!==0 || rareJewelleryResults.length!==0 || uniqueJewelleryResults.length!==0
        //     || baseFlasksResults.length!==0 || rareFlasksResults.length!==0 || uniqueFlasksResults.length!==0) && 
                <div className="results">
                    {/* <ResultsHeader>Results       </ResultsHeader> */}
                    <div className="row row-total">
                        <h3>Showing ... results (... matched)</h3>
                    </div>
                    {/* <span><button onClick={reverseNameSort}>By Name</button></span> */}
                    <div className="resultset">
                        {baseWeaponsResults.length!==0 && baseWeaponsResults.map( (r: any) => {
                            // console.log(r)
                            return (
                                
                                <ResultsBaseWeapons id={r.id}/>
                            )
                        })}
                        {/* {
                            baseWeaponsResults.length!==0 && baseWeaponsResults.map( (r: any) => {
                                return (
                                    <BaseItemDiv>
                                        <div className="middle">
                                            <div className="itemPopupContainer newItemPopup normalPopup">
                                                <div className="itemBoxContent">
                                                    <div className="itemHeader">
                                                        <span className="l"></span>
                                                        <div className="itemName typeLine">
                                                            <span className="lc">{r.name}</span>
                                                        </div>
                                                        <span className="r"></span>
                                                    </div>
                                                    <div className="content">
                                                        <div className="property">
                                                            <span className="lc">
                                                                <span>{r.subtype ? r.subtype : r.type}</span>
                                                            </span>
                                                        </div>
                                                        {r.min_damage && 
                                                            <div className="property">
                                                                <span className="lc s">
                                                                    <span>Physical damage: </span>
                                                                    <span className="colourDefault">{r.min_damage}-{r.max_damage}</span>
                                                                </span>
                                                            </div>
                                                        }
                                                        {r.crit && 
                                                            <div className="property">
                                                                <span className="lc s">
                                                                    <span>Critical strike chance: </span>
                                                                    <span className="colourDefault">{r.crit}</span> 
                                                                </span>
                                                            </div>
                                                        }
                                                        {r.aps && 
                                                            <div className="property">
                                                                <span className="lc s">
                                                                    <span>Attacks per second: </span>
                                                                    <span className="colourDefault">{r.aps}</span>
                                                                </span>
                                                            </div>
                                                        }
                                                        <div className="separator"></div>
                                                        {(r.req_lvl || r.req_str || r.req_dex || r.req_int) &&
                                                            <div className="requirements">
                                                                <span className="lc">
                                                                    Requires&nbsp;
                                                                    {r.req_lvl && 
                                                                        <span className="s">
                                                                            <span>Level </span>
                                                                            <span className="colourDefault">{r.req_lvl}</span>
                                                                        </span>},&nbsp;
                                                                    {r.req_str && 
                                                                        <span className="s">
                                                                            <span className="colourDefault">{r.req_str} </span>
                                                                            <span>Str</span>  
                                                                        </span>},&nbsp;
                                                                    {r.req_dex && 
                                                                        <span className="s">
                                                                            <span className="colourDefault">{r.req_dex} </span>
                                                                            <span>Dex</span>
                                                                        </span>},&nbsp;
                                                                    {r.req_int && 
                                                                        <span className="s">
                                                                            <span className="colourDefault">{r.req_int} </span>
                                                                            <span>Int</span>    
                                                                        </span>}
                                                                </span>
                                                            </div>
                                                        }
                                                        <div className="separator"></div>
                                                        {r.implicit && r.implicit.map((i: string) => 
                                                            <div className="implicitMod">
                                                                <span className="lc l"></span>
                                                                <span className="lc s">
                                                                    {i}
                                                                </span>
                                                                <span className="lc r"></span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="itemPopupAdditional">
                                                <span className="lc s aug">
                                                    DPS:&nbsp;
                                                    <span className="colourAugmented">
                                                        {r.dps}
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </BaseItemDiv>
                                )
                            })
                        } */}
                        {rareWeaponsResults.length!==0 && rareWeaponsResults.map( (r: any) => <RareStatsList r={r}/>)}
                        {
                            uniqueWeaponsResults.length!==0 && uniqueWeaponsResults.map( (r: any) => {
                                return (
                                    <UniqueItemDiv>
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
                                    </UniqueItemDiv>
                                )
                            })
                        }
                        {
                            baseArmourResults.length!==0 && baseArmourResults.map( (r: any) => {
                                return (
                                    <BaseItemDiv>
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
                                    </BaseItemDiv>
                                )
                            })
                        }
                        {rareArmourResults.length!==0 && rareArmourResults.map( (r: any) => <RareStatsList r={r}/>)}
                        {
                            uniqueArmourResults.length!==0 && uniqueArmourResults.map( (r: any) => {
                                return (
                                    <UniqueItemDiv>
                                        <UniqueItemName>{r.name} {r.base}</UniqueItemName>
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
                                        <hr />
                                        {r.stats && r.stats.map((s: string) => <div>{s}</div>)}
                                    </UniqueItemDiv>
                                )
                            })
                        }
                        {
                            baseJewelleryResults.length!==0 && baseJewelleryResults.map( (r: any) => {
                                return (
                                    <BaseItemDiv>
                                        <BaseItemName>{r.name}</BaseItemName>
                                        {r.req_lvl && <div>Requires {r.req_lvl && <span> Level {r.req_lvl}</span>}</div>}
                                        {r.implicit && <div>{r.implicit.map((i: string) => <div>{i}</div>)}</div>}
                                    </BaseItemDiv>
                                )
                            })
                        }
                        {rareJewelleryResults.length!==0 && rareJewelleryResults.map( (r: any) => <RareStatsList r={r}/>)}
                        {
                            uniqueJewelleryResults.length!==0 && uniqueJewelleryResults.map( (r: any) => {
                                return (
                                    <UniqueItemDiv>
                                        <UniqueItemName>{r.name} {r.base}</UniqueItemName>
                                        {r.req_lvl && <div>Requires {r.req_lvl && <span> Level {r.req_lvl}</span>}</div>}
                                        {r.implicit && <div>{r.implicit.map((i: string) => <div>{i}</div>)}</div>}
                                        <hr />
                                        {r.stats && r.stats.map((s: string) => <div>{s}</div>)}
                                    </UniqueItemDiv>
                                )
                            })
                        }
                        {
                            baseFlasksResults.length!==0 && baseFlasksResults.map( (r: any) => {
                                return (
                                    <BaseItemDiv>
                                        <BaseItemName>{r.name}</BaseItemName>
                                        {r.subtype==='Utility' && <div>Lasts {r.duration} Seconds</div>}
                                        {r.mana_rec && <div>Recovers {r.mana_rec} Mana over {r.duration} Seconds</div>}
                                        {r.life_rec && <div>Recovers {r.life_rec} Life over {r.duration} Seconds</div>}
                                        <div>Consumes {r.charges_used} of {r.charges_max} Charges on use</div>
                                        <div>{r.buffs && r.buffs.map((b: string) => <div>{b}</div>)}</div>
                                        {r.req_lvl && <div> Requires {r.req_lvl && <span> Level {r.req_lvl}</span>}</div>}
                                        {r.implicit && <div>{r.implicit.map((i: string) => <div>{i}</div>)}</div>}
                                    </BaseItemDiv>
                                )
                            })
                        }
                        {rareFlasksResults.length!==0 && rareFlasksResults.map( (r: any) => <RareStatsList r={r}/>)}
                        {
                            uniqueFlasksResults.length!==0 && uniqueFlasksResults.map( (r: any) => {
                                return (
                                    <UniqueItemDiv>
                                        <UniqueItemName>{r.name} {r.base}</UniqueItemName>
                                        {r.subtype==='Utility' && <div>Lasts 
                                            {r.min_duration===r.max_duration 
                                            ? <span> {r.min_duration}</span>
                                            : <span> ({r.min_duration}-{r.max_duration})</span>} Seconds</div>}
                                        {r.min_mana_rec && <div>Recovers 
                                            {r.min_mana_rec===r.max_mana_rec
                                            ? <span> {r.min_mana_rec}</span>
                                            : <span> ({r.min_mana_rec}-{r.max_mana_rec})</span>} Mana over 
                                            {r.min_duration===r.max_duration 
                                            ? <span> {r.min_duration}</span>
                                            : <span> ({r.min_duration}-{r.max_duration})</span>} Seconds</div>}
                                        {r.min_life_rec && <div>Recovers 
                                            {r.min_life_rec===r.max_life_rec
                                            ? <span> {r.min_life_rec}</span>
                                            : <span> ({r.min_life_rec}-{r.max_life_rec})</span>} Life over 
                                            {r.min_duration===r.max_duration 
                                            ? <span> {r.min_duration}</span>
                                            : <span> ({r.min_duration}-{r.max_duration})</span>} Seconds</div>}
                                        <div>Consumes 
                                            {r.min_usage===r.max_usage
                                            ? <span> {r.min_usage}</span>
                                            :<span> ({r.min_usage}-{r.max_usage})</span>} of 
                                            {r.min_capacity===r.max_capacity
                                            ? <span> {r.min_capacity}</span>
                                            : <span> ({r.min_capacity}-{r.max_capacity})</span>} Charges on use</div>
                                        <div>{r.buffs && r.buffs.map((b: string) => <div>{b}</div>)}</div>
                                        {r.req_lvl && <div>Requires {r.req_lvl && <span> Level {r.req_lvl}</span>}</div>}
                                        {r.implicit && <div>{r.implicit.map((i: string) => <div>{i}</div>)}</div>}
                                        <hr />
                                        {r.stats && r.stats.map((s: string) => <div>{s}</div>)}
                                    </UniqueItemDiv>
                                )
                            })
                        } 
                    </div>
                </div>
        //     }
        // </div>
    )
}

const ResultsHeader = styled.span`
    font-size: 28px;
    font-weight: bold;
`
const ResultsDiv = styled.div`
    margin: 4px;
    padding: 4px;
    width: 35%;
`

const BaseItemDiv = styled.div`
    margin: 4px;
    padding: 4px;
    border: 2px #aaa solid;
`

const BaseItemName = styled.div`
    background: #aaa;
    color: #fff;
    text-align: center;
`
// background: #ccc;
const UniqueItemDiv = styled.div`
    margin: 4px;
    padding: 4px;
    border: 2px #421 solid
`
const UniqueItemName = styled.div`
    background: #421;
    color: #b61;
    text-align: center;
`
// background: #631;