import { useSelector } from "react-redux"
import { getNameSortAsc, getResultsCount, getResults} from "../../redux/results-selector"
import styled from "styled-components"
import { useEffect, useRef, useState } from "react"
import RareStatsList from "../RareStatsList"
import { sortResultsByName, changeNameSort } from "../../redux/resultsReducer"
import { useDispatch } from "react-redux"
import ResultsBaseItem from "./ResultsBaseItem"
import ResultsUniqueItem from "./ResultsUniqueItem"
import '../../styles/ResultSet.css';

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
    // console.log(allResults)
  
    useEffect(() => {
        setCurrentPage(1)
        let newResults = allResults.slice(10*currentPage-10, 10*currentPage)
        setResults(newResults)
        setCurrentPage(currentPage+1)
        setFetching(false)
    }, [allResults])

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
                    else if (r.rarity==='unique') return <ResultsUniqueItem r={r}/>
                })}
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