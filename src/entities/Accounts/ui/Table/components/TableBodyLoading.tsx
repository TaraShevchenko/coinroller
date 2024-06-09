import { TableBody, TableCell, TableRow } from 'shared/ui/Table'

export const TableBodyLoading = () => {
    return (
        <TableBody>
            {Array.from({ length: 9 }).map((_, index) => (
                <TableRow key={`AccountsTableLoading${index}`} className={'pointer-events-none'}>
                    <TableCell text={'_'} isLoading />
                    <TableCell text={'_'} isLoading />
                    <TableCell text={'_'} isLoading />
                    <TableCell text={'_'} subText={'_'} isLoading />
                    <TableCell text={'_'} subText={'_'} isLoading />
                    <TableCell className={'flex flex-col items-end'} text={'_'} subText={'_'} isLoading />
                </TableRow>
            ))}
        </TableBody>
    )
}
