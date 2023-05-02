import { useSelector } from "react-redux"
import { getBaseWeaponsResults, getResults, getUniqueWeaponsResults } from "./redux/results-selector"

export function Results(props:any) {
    let resultsLength = useSelector(getResults).length
    let baseWeaponsResults = useSelector(getBaseWeaponsResults)
    let uniqueWeaponsResults = useSelector(getUniqueWeaponsResults) 
    // if (results.length === 0) {
    //     axios.get('http://localhost:8080/api/weapon').then(response => {
    //         //console.log(response.data.weapons)
    //         //debugger
    //         //response.data.weapons
    //         dispatch(setResults(response.data.weapons))
    //     })
    // }
    
    //dispatch(setResults(response))
    
    //debugger 
    return (
        <div>
            {baseWeaponsResults.length!==0 || uniqueWeaponsResults.length!==0 && 
                <div>
                    <h1>Результаты</h1> 
                    {
                        baseWeaponsResults!==0 && baseWeaponsResults.map( (r: any) => {
                            return (
                                <div>
                                    <div>{r.name}</div>
                                    <div>{r.subtype ? r.subtype : r.type}</div>
                                    <div>Physical damage: {r.damage}</div>
                                    <div>Critical strike chance: {r.crit}</div>
                                    <div>Attacks per second: {r.aps}</div>
                                    {(r.req_lvl || r.req_str || r.req_dex || r.req_int) &&
                                    <div>
                                        Requires 
                                        {r.req_lvl && <span> Level {r.req_lvl},</span>}
                                        {r.req_str && <span> {r.req_str} Str,</span>}
                                        {r.req_dex && <span> {r.req_lvl} Dex,</span>}
                                        {r.req_int && <span> {r.req_int} Int</span>}
                                    </div>
                                    }
                                    {r.implicit && <div>{r.implicit}</div>}
                                    
                                    <br />
                                </div>
                            )
                        })
                    }
                    {
                        uniqueWeaponsResults!==0 && uniqueWeaponsResults.map( (r: any) => {
                            return (
                                <div>
                                    <div>{r.name} {r.base}</div>
                                    <div>{r.subtype ? r.subtype : r.type}</div>
                                    <div>Physical damage: {r.damage}</div>
                                    <div>Critical strike chance: {r.crit}</div>
                                    <div>Attacks per second: {r.aps}</div>
                                    {(r.req_lvl || r.req_str || r.req_dex || r.req_int) &&
                                    <div>
                                        Requires 
                                        {r.req_lvl && <span> Level {r.req_lvl},</span>}
                                        {r.req_str && <span> {r.req_str} Str,</span>}
                                        {r.req_dex && <span> {r.req_lvl} Dex,</span>}
                                        {r.req_int && <span> {r.req_int} Int</span>}
                                    </div>
                                    }
                                    {r.implicit && <div>{r.implicit}</div>}
                                    {r.stats.map((s: string) => {
                                        return (
                                            <div>{s}</div>
                                        )
                                    })}
                                    
                                    <br />
                                </div>
                            )
                        })
                    }
                </div>
            }
            
        </div>
    )
}