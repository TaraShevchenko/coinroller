import dynamic from 'next/dynamic'
import Loading from './loading'

export const Table = dynamic(() => import('./dynamic'), {
    loading: Loading,
    ssr: false
})
