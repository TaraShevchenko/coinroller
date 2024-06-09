import dynamic from 'next/dynamic'
import Loading from './loading'

export const Filters = dynamic(() => import('./dynamic'), {
    loading: Loading,
    ssr: false
})
