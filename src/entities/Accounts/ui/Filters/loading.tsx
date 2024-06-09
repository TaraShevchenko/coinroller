import { Input } from 'shared/ui/Input'
import { Skeleton } from 'shared/ui/Skeleton'
import { cn } from 'shared/utils/cn'

const FiltersLoading = () => {
    return (
        <div className={cn('mt-4 flex items-center gap-2')}>
            <Input
                className={'w-[250px]'}
                inputFieldProps={{ name: 'AccountSearch', placeholder: 'Filter accounts...', disabled: true }}
            />
            <Skeleton className={cn('h-8 w-[100px]')} />
            <Skeleton className={cn('h-8 w-[100px]')} />
            <Skeleton className={cn('h-8 w-[100px]')} />
        </div>
    )
}

export default FiltersLoading
