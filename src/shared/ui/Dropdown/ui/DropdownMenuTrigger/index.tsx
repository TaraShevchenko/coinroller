'use client'

import * as React from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { Button, type ButtonProps } from 'shared/ui/Button'

export const DropdownMenuTrigger = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Trigger>,
    Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Trigger>, 'children'> & {
        buttonProps?: Omit<ButtonProps, 'text' | 'icon'>
    } & Pick<ButtonProps, 'text'> &
        Pick<ButtonProps, 'icon'>
>(({ text, icon, buttonProps, ...props }, ref) => (
    <DropdownMenuPrimitive.Trigger ref={ref} asChild {...props}>
        <Button text={text} icon={icon} variant="outline" {...buttonProps} />
    </DropdownMenuPrimitive.Trigger>
))
DropdownMenuTrigger.displayName = DropdownMenuPrimitive.Trigger.displayName
