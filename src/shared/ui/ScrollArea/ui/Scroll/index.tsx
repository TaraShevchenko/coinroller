import { ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'

import { cn } from 'shared/utils/cn'

import { ScrollArea } from '../ScrollArea'

type ScrollProps = {
    className: string
    getClassNameByHasScroll?: (hasScroll: boolean) => string
    children: ReactNode
}

export const Scroll = ({ className, getClassNameByHasScroll, children }: ScrollProps) => {
    const contentRef = useRef<HTMLElement>(null)
    const [hasScroll, setHasScroll] = useState(false)

    useEffect(() => {
        const checkScroll = () => {
            const content = contentRef.current
            if (content) {
                const hasVerticalScroll = content.scrollHeight > content.clientHeight
                setHasScroll(hasVerticalScroll)
            }
        }

        checkScroll()
    }, [])

    const conditionalClassName = useMemo(
        () => (getClassNameByHasScroll ? getClassNameByHasScroll(hasScroll) : ''),
        [getClassNameByHasScroll, hasScroll],
    )

    return (
        <Slot ref={contentRef} className={cn(className, conditionalClassName)}>
            {hasScroll ? <ScrollArea>{children}</ScrollArea> : <div>{children}</div>}
        </Slot>
    )
}
