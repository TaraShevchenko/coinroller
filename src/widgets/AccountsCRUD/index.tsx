'use client'

import { Plus } from 'lucide-react'

import { Filters, Table, useGetAccounts } from 'entities/Accounts'

import { Button } from 'shared/ui/Button'
import { Container } from 'shared/ui/Container'
import { Text } from 'shared/ui/Text'
import { cn } from 'shared/utils/cn'

export const AccountsCRUD = () => {
    useGetAccounts()
    return (
        <Container className={cn('mt-10 pb-8')}>
            <div className={cn('flex items-center justify-between')}>
                <div className={cn('flex flex-col gap-1')}>
                    <Text variant={'title'} text={'Accounts'} />
                    <Text variant={'subtitle'} text={'Review and manage your Billing Accounts!'} />
                </div>
                <Button icon={Plus} text={'Add new'} />
            </div>
            <Filters />
            <Table />
        </Container>
    )
}
