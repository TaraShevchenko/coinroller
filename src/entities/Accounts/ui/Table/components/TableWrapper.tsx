import { type ReactNode } from 'react'

import { Table } from 'shared/ui/Table'

export const COL_SIZES = ['auto', 'auto', 'auto', 'auto', 'auto', '170px']

export const TableWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <Table className={'mt-4'} colSizes={COL_SIZES}>
            {children}
        </Table>
    )
}
