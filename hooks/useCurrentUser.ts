// SWR once we fetch it wont keep fetching if the data is resolve. Using these, we do not need redux or any state manager.
import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

const useCurrentUser = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/current', fetcher)

    return {
        data,
        error,
        isLoading,
        mutate
    }

};

export default useCurrentUser