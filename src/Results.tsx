import { useSelector } from "react-redux"
import { getBaseWeaponsResults, getUniqueWeaponsResults, getBaseArmourResults, getUniqueArmourResults, 
    getBaseJewelleryResults, getUniqueJewelleryResults, getBaseFlasksResults, getUniqueFlasksResults} from "./redux/results-selector"
import styled from "styled-components"

export function Results(props:any) {
    let baseWeaponsResults = useSelector(getBaseWeaponsResults)
    let uniqueWeaponsResults = useSelector(getUniqueWeaponsResults) 
    let baseArmourResults = useSelector(getBaseArmourResults)
    let uniqueArmourResults = useSelector(getUniqueArmourResults) 
    let baseJewelleryResults = useSelector(getBaseJewelleryResults)
    let uniqueJewelleryResults = useSelector(getUniqueJewelleryResults) 
    let baseFlasksResults = useSelector(getBaseFlasksResults)
    let uniqueFlasksResults = useSelector(getUniqueFlasksResults) 

    return (
        <div>
            {(baseWeaponsResults.length!==0 || uniqueWeaponsResults.length!==0 
            || baseArmourResults.length!==0 || uniqueArmourResults.length!==0
            || baseJewelleryResults.length!==0 || uniqueJewelleryResults.length!==0
            || baseFlasksResults.length!==0 || uniqueFlasksResults.length!==0) && 
                <div>
                    <h1>Результаты</h1> 
                    {
                        baseWeaponsResults.length!==0 && baseWeaponsResults.map( (r: any) => {
                            return (
                                <ItemDiv>
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
                                </ItemDiv>
                            )
                        })
                    }
                    {
                        uniqueWeaponsResults.length!==0 && uniqueWeaponsResults.map( (r: any) => {
                            return (
                                <ItemDiv>
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
                                </ItemDiv>
                            )
                        })
                    }
                    {
                        baseArmourResults.length!==0 && baseArmourResults.map( (r: any) => {
                            return (
                                <ItemDiv>
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
                                </ItemDiv>
                            )
                        })
                    }
                    {
                        uniqueArmourResults.length!==0 && uniqueArmourResults.map( (r: any) => {
                            return (
                                <ItemDiv>
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
                                </ItemDiv>
                            )
                        })
                    }
                    {
                        baseJewelleryResults.length!==0 && baseJewelleryResults.map( (r: any) => {
                            return (
                                <ItemDiv>
                                    <div>{r.name}</div>
                                    {r.req_lvl && <div>Requires {r.req_lvl && <span> Level {r.req_lvl}</span>}</div>}
                                    {r.implicit && <div>{r.implicit.map((i: string) => <div>{i}</div>)}</div>}
                                </ItemDiv>
                            )
                        })
                    }
                    {
                        uniqueJewelleryResults.length!==0 && uniqueJewelleryResults.map( (r: any) => {
                            return (
                                <ItemDiv>
                                    <div>{r.name} {r.base}</div>
                                    {r.req_lvl && <div>Requires {r.req_lvl && <span> Level {r.req_lvl}</span>}</div>}
                                    {r.implicit && <div>{r.implicit.map((i: string) => <div>{i}</div>)}</div>}
                                    <hr />
                                    {r.stats && r.stats.map((s: string) => <div>{s}</div>)}
                                </ItemDiv>
                            )
                        })
                    }
                    {
                        baseFlasksResults.length!==0 && baseFlasksResults.map( (r: any) => {
                            return (
                                <ItemDiv>
                                    <div>{r.name}</div>
                                    {r.subtype==='Utility' && <div>Lasts {r.duration} Seconds</div>}
                                    {r.mana_rec && <div>Recovers {r.mana_rec} Mana over {r.duration} Seconds</div>}
                                    {r.life_rec && <div>Recovers {r.life_rec} Life over {r.duration} Seconds</div>}
                                    <div>Consumes {r.charges_used} of {r.charges_max} Charges on use</div>
                                    <div>{r.buffs && r.buffs.map((b: string) => <div>{b}</div>)}</div>
                                    {r.req_lvl && <div> Requires {r.req_lvl && <span> Level {r.req_lvl}</span>}</div>}
                                    {r.implicit && <div>{r.implicit.map((i: string) => <div>{i}</div>)}</div>}
                                </ItemDiv>
                            )
                        })
                    }
                    {
                        uniqueFlasksResults.length!==0 && uniqueFlasksResults.map( (r: any) => {
                            return (
                                <ItemDiv>
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
                                </ItemDiv>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

const ItemDiv = styled.div`
    margin: 4px;
    padding: 4px;
    background: #ccc;

`