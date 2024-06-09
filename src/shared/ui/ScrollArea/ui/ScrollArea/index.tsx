import * as React from 'react'

import { Corner, Root, Viewport } from '@radix-ui/react-scroll-area'

import { cn } from 'shared/utils/cn'

import { ScrollBar } from '../ScrollBar'

export const ScrollArea = React.forwardRef<React.ElementRef<typeof Root>, React.ComponentPropsWithoutRef<typeof Root>>(
    ({ className, children, ...props }, ref) => (
        <Root ref={ref} className={'relative overflow-hidden'} type={'always'} {...props}>
            <Viewport className={cn('h-full w-full rounded-[inherit]', className)}>{children}</Viewport>
            <ScrollBar />
            <Corner />
        </Root>
    ),
)
ScrollArea.displayName = Root.displayName
