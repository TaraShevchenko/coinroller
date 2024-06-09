'use client'

import * as React from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { LucideIcon } from 'lucide-react'

import { Text, TextProps } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

export const DropdownMenuLabel = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Label>,
    Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>, 'children'> & {
        text: string
        icon?: LucideIcon
        inset?: boolean
        textProps?: Omit<TextProps, 'text'>
    }
>(({ className, inset, icon: Icon, text, textProps, ...props }, ref) => (
    <DropdownMenuPrimitive.Label
        ref={ref}
        className={cn('px-2.5 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
        {...props}
    >
        <Text text={text} variant={'bold'} {...textProps} />
    </DropdownMenuPrimitive.Label>
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName
