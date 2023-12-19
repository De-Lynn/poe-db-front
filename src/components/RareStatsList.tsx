import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const RareStatsList = (props: any) => {
  
  const [statDiv, setDivOpen] = useState(false);
  const divRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handler = (e: any) => {
      if (divRef.current && !divRef.current.contains(e.target)) {
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
    <RareItemDiv>
      <RareItemName>
        <span>{props.r.i_type}    </span> 
        {props.r.i_subtype ? props.r.i_subtype : null}
      </RareItemName>
      <div>
        <button onClick={showMoreStats} ref={divRef}>Stats</button> 
        {statDiv && (props.r.stats.map( (stat: Array<string>) => {
          return (
            <div>
              <span>{stat[0]} </span>
              <span>"{stat[1]}"</span>
            </div>
          )
        }))}
      </div>
    </RareItemDiv>
  )
}

export default RareStatsList

const ItemDiv = styled.div`
    margin: 4px;
    padding: 4px;
    background: #ccc;

`

const RareItemDiv = styled.div`
    margin: 4px;
    padding: 4px;
    border: #863 2px solid;

`

const RareItemName = styled.div`
  background: #863;
  color: #ee4;
  text-align: center;

`