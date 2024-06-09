'use client'

import { type ChangeEvent, useRef, useState } from 'react'

import debounce from 'debounce'
import { RefreshCw, X } from 'lucide-react'

import { useAccountsTableStore } from 'entities/Accounts/model/state'

import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { TableFilter } from 'shared/ui/Table'
import { cn } from 'shared/utils/cn'

const Filters = () => {
    const updateSearch = useAccountsTableStore((state) => state.updateSearch)
    const [search, setSearch] = useState('')

    const searchDebounceRef = useRef<ReturnType<typeof debounce> | null>(null)
    const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setSearch(value)
        if (searchDebounceRef?.current) {
            searchDebounceRef.current?.clear()
        }
        searchDebounceRef.current = debounce(() => {
            updateSearch(value)
        }, 500)
        searchDebounceRef.current()
    }

    const loading = useAccountsTableStore((state) => state.loading.loading)

    return (
        <div className={cn('mt-4 flex items-center justify-between')}>
            <div className={cn('flex gap-2')}>
                <Input
                    className={'w-[250px]'}
                    inputFieldProps={{
                        name: 'AccountSearch',
                        placeholder: 'Filter accounts...',
                        value: search,
                        onChange: onSearchChange,
                    }}
                />
                <TableFilter
                    name={'source'}
                    text={'Source'}
                    filters={[
                        { name: 'Monobank', value: 'monobank', isActive: true },
                        { name: 'Binance', value: 'binance', isActive: false },
                    ]}
                    onSelect={(value, name) => console.log(value, name)}
                    onClear={() => console.log('clear')}
                />
                <TableFilter
                    name={'currency'}
                    text={'Currency'}
                    filters={[
                        { name: 'UAH', value: 'UAH', isActive: false },
                        { name: 'TRX_USDT', value: 'TRX_USDT', isActive: false },
                    ]}
                    onSelect={(value, name) => console.log(value, name)}
                    onClear={() => console.log('clear')}
                />
                <Button
                    className={'flex-row-reverse'}
                    size={'sm'}
                    variant={'ghost'}
                    icon={X}
                    text={'Reset'}
                    textProps={{ variant: 'bold' }}
                />
            </div>

            <Button
                variant={'ghost'}
                size={'iconSm'}
                icon={RefreshCw}
                iconProps={{ className: loading ? 'animate-spin' : '' }}
            />

            {/*<DropdownMenu>*/}
            {/*    <DropdownMenuTrigger*/}
            {/*        icon={SlidersHorizontal}*/}
            {/*        text={'Settings'}*/}
            {/*        buttonProps={{ size: 'sm', variant: 'outline' }}*/}
            {/*    />*/}
            {/*    <DropdownMenuContent className={'py-1'} align={'end'}>*/}
            {/*TODO: Add ability to download and upload xls files */}
            {/*<DropdownMenuLabel text={'File operations'} />*/}
            {/*<DropdownMenuSeparator />*/}
            {/*<DropdownMenuGroup>*/}
            {/*    <DropdownMenuItem icon={FileUp} text={'Export XLS'} />*/}
            {/*    <DropdownMenuItem icon={FileDown} text={'Import XLS'} />*/}
            {/*</DropdownMenuGroup>*/}
            {/*<DropdownMenuSeparator />*/}
            {/*<DropdownMenuLabel text={'Displayed row(s)'} />*/}
            {/*<DropdownMenuSeparator />*/}
            {/*<DropdownMenuGroup>*/}
            {/*    <DropdownMenuCheckboxItem text={'Head'} checked />*/}
            {/*    <DropdownMenuCheckboxItem text={'Total'} checked />*/}
            {/*</DropdownMenuGroup>*/}
            {/*<DropdownMenuSeparator />*/}
            {/*<DropdownMenuLabel text={'Displayed column(s)'} />*/}
            {/*<DropdownMenuGroup>*/}
            {/*    <DropdownMenuCheckboxItem text={'Source'} checked />*/}
            {/*    <DropdownMenuCheckboxItem text={'Address'} checked />*/}
            {/*    <DropdownMenuCheckboxItem text={'Currency'} checked />*/}
            {/*    <DropdownMenuCheckboxItem text={'Income'} checked />*/}
            {/*    <DropdownMenuCheckboxItem text={'Expense'} checked />*/}
            {/*    <DropdownMenuCheckboxItem text={'Balance'} checked />*/}
            {/*</DropdownMenuGroup>*/}
            {/*TODO: Add ability to change pagination */}
            {/*<PopoverMenuSeparator />*/}
            {/*<DropdownMenuLabel text={'Pagination'} />*/}
            {/*<PopoverMenuSeparator />*/}
            {/*<DropdownMenuRadioGroup value="standard">*/}
            {/*    <DropdownMenuRadioItem text={'Standard'} value="standard" />*/}
            {/*    <DropdownMenuRadioItem text={'Auto'} value="auto" />*/}
            {/*</DropdownMenuRadioGroup>*/}
            {/*TODO: Pagination for full screen */}
            {/*    </DropdownMenuContent>*/}
            {/*</DropdownMenu>*/}
        </div>
    )
}

export default Filters
