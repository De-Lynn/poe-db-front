import { useSelector } from "react-redux"
import { getBaseWeaponsResults, getUniqueWeaponsResults, getBaseArmourResults, getUniqueArmourResults, 
    getBaseJewelleryResults, getUniqueJewelleryResults, getBaseFlasksResults, getUniqueFlasksResults, getRareWeaponResults, getRareArmourResults, getRareJewelleryResults, getRareFlasksResults} from "./redux/results-selector"
import styled from "styled-components"
import { useEffect, useRef, useState } from "react"
import { v1 } from "uuid"
import RareStatsList from "./RareStatsList"

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

    return (
        <div>
            {(baseWeaponsResults.length!==0 || rareWeaponsResults.length!==0 || uniqueWeaponsResults.length!==0 
            || baseArmourResults.length!==0 || rareArmourResults.length!==0 || uniqueArmourResults.length!==0
            || baseJewelleryResults.length!==0 || rareJewelleryResults.length!==0 || uniqueJewelleryResults.length!==0
            || baseFlasksResults.length!==0 || rareFlasksResults.length!==0 || uniqueFlasksResults.length!==0) && 
                <ResultsDiv>
                    <h1>Results</h1> 
                    {
                        baseWeaponsResults.length!==0 && baseWeaponsResults.map( (r: any) => {
                            return (
                                <BaseItemDiv>
                                    <div>{r.name}</div>
                                    <div>{r.subtype ? r.subtype : r.type}</div>
                                    {r.min_damage && <div>Physical damage: {r.min_damage}-{r.max_damage}</div>}
                                    {r.crit && <div>Critical strike chance: {r.crit}</div>}
                                    {r.aps && <div>Attacks per second: {r.aps}</div>}
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
                    {rareWeaponsResults.length!==0 && rareWeaponsResults.map( (r: any) => <RareStatsList r={r}/>)}
                    {
                        uniqueWeaponsResults.length!==0 && uniqueWeaponsResults.map( (r: any) => {
                            return (
                                <UniqueItemDiv>
                                    <div>{r.name} {r.base}</div>
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
                                    <div>{r.name}</div>
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
                                    <div>{r.name} {r.base}</div>
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
                                    <div>{r.name}</div>
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
                                    <div>{r.name} {r.base}</div>
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
                                    <div>{r.name}</div>
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
                                    <div>{r.name} {r.base}</div>
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
                </ResultsDiv>
            }
        </div>
    )
}

const ResultsDiv = styled.div`
    margin: 4px;
    padding: 4px;
    width: 50%;
`

const BaseItemDiv = styled.div`
    margin: 4px;
    padding: 4px;
    background: #ccc;

`
const UniqueItemDiv = styled.div`
    margin: 4px;
    padding: 4px;
    background: #631;

`