import { useSelector } from "react-redux"
import { getBaseWeaponsResults, getUniqueWeaponsResults, getBaseArmourResults, getUniqueArmourResults, 
    getBaseJewelleryResults, getUniqueJewelleryResults, getBaseFlasksResults, getUniqueFlasksResults, getRareWeaponResults, getRareArmourResults, getRareJewelleryResults, getRareFlasksResults, getNameSortAsc, getResultsCount} from "./redux/results-selector"
import styled from "styled-components"
import { useEffect, useRef, useState } from "react"
import { v1 } from "uuid"
import RareStatsList from "./RareStatsList"
import { sortResultsByName, changeNameSort } from "./redux/resultsReducer"
import { useDispatch } from "react-redux"
import ResultsBaseWeapons from "./ResultsWeaponsBase"
import ResultsUniqueWeapons from "./ResultsWeaponsUnique"
import ResultsBaseArmour from "./ResultsArmourBase"
import ResultsUniqueArmour from "./ResultsArmourUnique"

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
    let resultsCount = useSelector(getResultsCount)
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
        <div className="results">
            <div className="row row-total">
                <h3>Showing ... results ({resultsCount} matched)</h3>
            </div>
            {/* <span><button onClick={reverseNameSort}>By Name</button></span> */}
            <div className="resultset">
                {baseWeaponsResults.length!==0 && baseWeaponsResults.map( (r: any) =>
                    <ResultsBaseWeapons id={r.id}/>
                )}
                {rareWeaponsResults.length!==0 && rareWeaponsResults.map( (r: any) => <RareStatsList r={r}/>)}
                {uniqueWeaponsResults.length!==0 && uniqueWeaponsResults.map( (r: any) => 
                    <ResultsUniqueWeapons id={r.id}/>
                )}
                {baseArmourResults.length!==0 && baseArmourResults.map( (r: any) => 
                    <ResultsBaseArmour id={r.id}/>
                )}
                {rareArmourResults.length!==0 && rareArmourResults.map( (r: any) => <RareStatsList r={r}/>)}
                {uniqueArmourResults.length!==0 && uniqueArmourResults.map( (r: any) => 
                    <ResultsUniqueArmour id={r.id}/>
                )}
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