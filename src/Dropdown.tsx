import React, { Children, PropsWithChildren, ReactNode, cloneElement, isValidElement, useEffect, useMemo, useRef, useState } from "react"
import styled from "styled-components"
import { MenuItem } from "./MenuItem"
type Props<TItem = any> = {
  label: ReactNode
  onChange(item: TItem): void
  // children: any
}

export const Dropdown = <T extends unknown>(props: PropsWithChildren<Props<T>>) => {
  const {
    label,
    children,
  } = props

  const [isOpen, setOpen] = useState(false);
  const [highlightedIndex, setHighltghtedIndex] = useState(-1)
  const elements = useRef<Record<number, HTMLDivElement>>({})
  const items = useMemo(() => Children.toArray(children), [children])

  const indexes = useMemo(() => (
    items.reduce<Array<number>>((result, item, index) => {
      if (React.isValidElement(item)) {
        if (!item.props.disabled && item.type === MenuItem) {
          result.push(index)
        }
      }
      return result
    }, [])
  ), [items])
  
  const handleOpen = () => setOpen(true);

  const handleChange = (item: any) => {
    props.onChange(item)
    setOpen(false)
  }

  const length = Children.count(children)

  const handleKeyDown = async (ev: KeyboardEvent) => {
    switch (ev.code) {
      case 'ArrowDown':
        ev.preventDefault()
        ev.stopPropagation()
        setHighltghtedIndex(highlightedIndex => {
          const index = highlightedIndex === indexes.length - 1 ? 0 : highlightedIndex + 1
          return index
        })
        break
      case 'ArrowUp': {
        ev.preventDefault()
        ev.stopPropagation()
        setHighltghtedIndex(highlightedIndex => {
          const index = highlightedIndex === 0 ? indexes.length - 1 : highlightedIndex - 1
          return index
        })
        break
      }
      case 'Enter': {
        ev.preventDefault();
        ev.stopPropagation();
        const item = items[indexes[highlightedIndex]];
        if (highlightedIndex !== -1 && isValidElement(item)) {
          handleChange(item.props.value);
        }
        break;
      }
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown, true)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true)
    }
  }, [isOpen])

  return (
    <Root>
      <Control onClick={handleOpen} type='button'>{label}</Control>
      {
        isOpen && (
          <Menu>
            {/* {
              Children.map(children, (child, index) => {
                if (isValidElement(child)) {
                  return cloneElement(child, {
                    active: index === indexes[highlightedIndex],
                    onMouseEnter: () => setHighltghtedIndex(indexes.indexOf(index)),
                    onClick: (ev: MouseEvent) => {
                      ev.stopPropagation()
                      handleChange(child.props.value)
                    },
                    ref: (node: HTMLDivElement) => {
                      elements.current[index] = node
                    }
                  })
                }
              })
            } */}
          </Menu>       
        )
      }
    </Root>
  )
}

const Root = styled.div``

const Control = styled.button`
  width: 100%;
  margin: 0;
  padding: 0;
`
const Menu = styled.menu`
  margin: 1px 0 0;
  padding: 0;
  border: 1px solid #bebebe;
  max-height: 100px;
  overflow-y: auto;
`;