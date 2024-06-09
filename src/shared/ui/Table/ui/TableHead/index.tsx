import * as React from 'react'

import { Text, TextProps } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

type TableHead = {
    text: string
    textProps?: Omit<TextProps, 'text'>
}

export const TableHead = React.forwardRef<
    HTMLTableCellElement,
    React.ThHTMLAttributes<HTMLTableCellElement> & TableHead
>(({ className, text, textProps, ...props }, ref) => (
    <th
        ref={ref}
        className={cn(
            'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
            className,
        )}
        {...props}
    >
        <Text text={text} inheritColor {...textProps} />
    </th>
))
TableHead.displayName = 'TableHead'
