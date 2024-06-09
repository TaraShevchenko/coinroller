'use client'

import { useAccountsTableStore } from 'entities/Accounts/model/state'

import { TableBody, TableCell, TableRow } from 'shared/ui/Table'
import { TableLoader } from 'shared/ui/Table'
import { num } from 'shared/utils/num'

import { TableBodyLoading } from './components/TableBodyLoading'
import { TableHeader } from './components/TableHeader'
import { COL_SIZES, TableWrapper } from './components/TableWrapper'

const Table = () => {
    const isTableLoading = useAccountsTableStore((state) => state.loading.tableLoader)
    const isTableSkeletonLoading = useAccountsTableStore((state) => state.loading.tableSkeleton)
    const accounts = useAccountsTableStore((state) => state.accounts)

    return (
        <>
            <TableWrapper>
                <TableHeader />
                {isTableSkeletonLoading ? (
                    <TableBodyLoading />
                ) : (
                    <TableBody>
                        {/*<TableRow className={'bg-muted/50'}>*/}
                        {/*    <TableCell*/}
                        {/*        colSpan={3}*/}
                        {/*        className={cn('pr-0')}*/}
                        {/*        text={'Total:'}*/}
                        {/*        textProps={{ variant: 'bold' }}*/}
                        {/*    />*/}
                        {/*    <TableCell className={'text-green-300'} text={'20, 000.72 UAH'} subText={'263.15 USD'} />*/}
                        {/*    <TableCell className={'text-red-300'} text={'20, 000.72 UAH'} subText={'263.15 USD'} />*/}
                        {/*    <TableCell text={'20, 000.72 UAH'} subText={'523.30 USD'} />*/}
                        {/*</TableRow>*/}
                        {!!accounts?.length &&
                            accounts.map(({ id, address, source, currency, balance }) => (
                                <TableRow key={id}>
                                    <TableCell text={address} />
                                    <TableCell text={source} />
                                    <TableCell text={currency} />
                                    <TableCell
                                        className={'text-green-300'}
                                        text={`${num(0)} ${currency}`}
                                        subText={`${num(263.15)} USD`}
                                    />
                                    <TableCell
                                        className={'text-red-300'}
                                        text={`${num(0)} ${currency}`}
                                        subText={`${num(263.15)} USD`}
                                    />
                                    <TableCell text={`${num(balance / 100)} ${currency}`} subText={'263.15 USD'} />
                                </TableRow>
                            ))}
                        {isTableLoading && <TableLoader colCount={COL_SIZES.length} />}
                    </TableBody>
                )}
            </TableWrapper>
        </>
    )
}

export default Table
