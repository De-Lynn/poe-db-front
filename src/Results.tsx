import { useSelector } from "react-redux"
import { getResults } from "./redux/results-selector"
import { setResults } from "./redux/resultsReducer"
import { useDispatch } from "react-redux"
import axios from "axios"

export function Results(props:any) {
    const dispatch = useDispatch()
    let results = useSelector(getResults) 
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
            <h1>Результаты</h1> 
            {
                results.map( (r: any) => {
                    return (
                        <div>
                            <div>{r.name}</div>
                            <div>{r.type}</div>
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
                            {r.stat && <div>{r.stat}</div>}
                            
                            <br />
                        </div>
                    )
                })
            }
        </div>
    )
}