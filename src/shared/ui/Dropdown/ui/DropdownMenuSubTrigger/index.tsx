'use client'

import * as React from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { ChevronRight, LucideIcon } from 'lucide-react'

import { Text, TextProps } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

export const DropdownMenuSubTrigger = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
        inset?: boolean
        icon?: LucideIcon
        textProps?: Omit<TextProps, 'text'>
    } & Pick<TextProps, 'text'>
>(({ className, inset, icon: Icon, text, textProps, children, ...props }, ref) => (
    <DropdownMenuPrimitive.SubTrigger
        ref={ref}
        className={cn(
            'flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
            inset && 'pl-8',
            className,
        )}
        {...props}
    >
        {!!Icon && <Icon className="h-4 w-4" />}
        <Text text={text} {...textProps} />
        <ChevronRight className="ml-auto h-4 w-4" />
    </DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName
