import { Pagination } from '@mantine/core'
import { FC, useState } from 'react'
import { Link } from 'react-router'

import { LINKS, PAGINATION_PAGE_SIZE } from '@/constants'
import { IMarketCardListProps } from '@/model/dataModel'

import MarketCard from './MarketCard'

const MarketCardList: FC<IMarketCardListProps> = ({ markets }) => {
  const totalPages = Math.ceil(markets.length / PAGINATION_PAGE_SIZE)

  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div>
      <div className="flex flex-col gap-4 p-4">
        {markets.slice((currentPage - 1) * PAGINATION_PAGE_SIZE, currentPage * PAGINATION_PAGE_SIZE).map((market) => (
          <Link key={market.id} to={LINKS.MARKET_DETAILS.replace(':id', `${market.id}`)}>
            <MarketCard market={market} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <Pagination className="mx-auto" total={totalPages} value={currentPage} onChange={setCurrentPage} />
      </div>
    </div>
  )
}

export default MarketCardList
