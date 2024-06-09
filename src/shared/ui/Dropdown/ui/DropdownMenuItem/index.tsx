'use client'

import * as React from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { LucideIcon } from 'lucide-react'

import { Text, TextProps } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

export const DropdownMenuItem = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Item>,
    Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>, 'children'> & {
        inset?: boolean
        icon?: LucideIcon
        text: string
        textProps?: Omit<TextProps, 'text'>
        shortcut?: string
        shortcutProps?: Omit<TextProps, 'text'>
    }
>(({ className, inset, icon: Icon, text, textProps, shortcut, shortcutProps, ...props }, ref) => (
    <DropdownMenuPrimitive.Item
        ref={ref}
        className={cn(
            'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2.5 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
            inset && 'pl-8',
            className,
        )}
        {...props}
    >
        {!!Icon && <Icon className="h-4 w-4" />}
        <Text text={text} {...textProps} />
        {!!shortcut && (
            <Text
                className={cn('ml-auto tracking-widest opacity-60', shortcutProps?.className)}
                variant={'sm'}
                text={shortcut}
                {...textProps}
            />
        )}
    </DropdownMenuPrimitive.Item>
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName
