'use client'

import * as React from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { cn } from 'shared/utils/cn'

export const DropdownMenuGroup = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.Group>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group>
>(({ className, children, ...props }, ref) => (
    <DropdownMenuPrimitive.Group ref={ref} className={cn('px-1', className)} {...props}>
        {children}
    </DropdownMenuPrimitive.Group>
))
DropdownMenuGroup.displayName = DropdownMenuPrimitive.Group.displayName
