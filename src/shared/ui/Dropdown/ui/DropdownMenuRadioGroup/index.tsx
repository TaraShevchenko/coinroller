'use client'

import * as React from 'react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { cn } from 'shared/utils/cn'

export const DropdownMenuRadioGroup = React.forwardRef<
    React.ElementRef<typeof DropdownMenuPrimitive.RadioGroup>,
    React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioGroup>
>(({ className, children, ...props }, ref) => (
    <DropdownMenuPrimitive.RadioGroup ref={ref} className={cn('px-1', className)} {...props}>
        {children}
    </DropdownMenuPrimitive.RadioGroup>
))
DropdownMenuRadioGroup.displayName = DropdownMenuPrimitive.RadioGroup.displayName
