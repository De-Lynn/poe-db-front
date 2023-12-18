import { useSelector } from "react-redux"
import { getNameSortAsc, getResultsCount, getResults} from "../../redux/results-selector"
import styled from "styled-components"
import { useEffect, useRef, useState } from "react"
import RareStatsList from "../RareStatsList"
import { sortResultsByName, changeNameSort } from "../../redux/resultsReducer"
import { useDispatch } from "react-redux"
import ResultsUniqueWeapons from "./ResultsWeaponsUnique"
import ResultsBaseItem from "./ResultsBaseItem"

export function Results(props:any) {
    const allResults = useSelector(getResults)
    let nameSortAsc = useSelector(getNameSortAsc)
    let resultsCount = useSelector(getResultsCount)
    const dispatch = useDispatch()

    // const [statDiv, setDivOpen] = useState(false);
    // const divRef = useRef<HTMLButtonElement>(null)

    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [onPageResults, setResults] = useState<any[]>([])

    const scrollHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 &&
        onPageResults.length < resultsCount) {
            setFetching(true)
        }
    }
  
    useEffect(() => {
        if (fetching) {
            let newResults = allResults.slice(10*currentPage-10, 10*currentPage)
            setResults([...onPageResults, ...newResults])
            setCurrentPage(currentPage+1)
            setFetching(false)
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
  
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    // useEffect(() => {
    //     const handler = (e: any) => {
    //       if (divRef.current && !divRef.current.contains(e.target)) {
    //         setDivOpen(false)
    //       }
    //     }
    //     window.addEventListener("click", handler)
    //     return () => {
    //       window.removeEventListener("click", handler)
    //     }
    // })

    // const showMoreStats = () => {
    //     setDivOpen(!statDiv)
    // }

    const reverseNameSort = () => {
        dispatch(changeNameSort())
        dispatch(sortResultsByName())
    }
    // console.log('All '+allResults)
    // console.log('On page '+onPageResults)
    return (
        <div className="results">
            <div className="row row-total">
                <h3>{resultsCount} results matched</h3>
            </div> 
            {/* <span><button onClick={reverseNameSort}>By Name</button></span> */}
            <div className="resultset">
                {onPageResults.map((r: any) => {
                    // console.log(r)
                    if (r.rarity==='normal') return <ResultsBaseItem r={r}/>
                    else if (r.rarity==='rare') return <RareStatsList r={r}/>
                    else if (r.rarity==='unique') return <ResultsUniqueWeapons id={r.id}/>
                })}
                {/* {baseWeaponsResults.length!==0 && baseWeaponsResults.map( (r: any) =>
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
                }  */}
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