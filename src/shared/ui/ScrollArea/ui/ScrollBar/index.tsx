import * as React from 'react'

import { ScrollAreaScrollbar, ScrollAreaThumb } from '@radix-ui/react-scroll-area'

import { cn } from 'shared/utils/cn'

export const ScrollBar = React.forwardRef<
    React.ElementRef<typeof ScrollAreaScrollbar>,
    React.ComponentPropsWithoutRef<typeof ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
    <ScrollAreaScrollbar
        ref={ref}
        orientation={orientation}
        className={cn(
            'flex touch-none select-none bg-primary-foreground transition-colors',
            orientation === 'vertical' && 'h-full w-2 border-l border-l-transparent p-[1px]',
            orientation === 'horizontal' && 'h-2 flex-col border-t border-t-transparent p-[1px]',
            className,
        )}
        {...props}
    >
        <ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
    </ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaScrollbar.displayName
