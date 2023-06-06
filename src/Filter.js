import { useState } from 'react';
import TweetCard from './TweetCard';

function Filter({ tweets }) {

  const [filter, setFilter] = useState('netflix')
  
  let counter = 0;

  const categories = [ 'COVID-19', 'Vaccine', 'Zoom', 'Bitcoin', 
    'Dogecoin', 'NFT', 'Elon Musk', 'Tesla', 'Amazon', 'iPhone 12',
    'TikTok', 'Facebook', 'YouTube', 'Netflix', 'GameStop','Super Bowl',
    'Olympic', 'Black Lives Matter', 'Jeffrey Dahmer', 'Johnny Depp',
    'Will Smith', 'Weather', 'NBA', 'Macdonald', 'India vs England',
    'Ukraine', 'Queen Elizabeth', 'World Cup' 
  ]

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const filteredTweets = tweets.filter(tweet => {
    return tweet.keyword.toLowerCase().includes(filter.toLocaleLowerCase())
  })

  const renderFilteredTweets = filteredTweets
  .slice(0, 100).map(tweet => {
    return <TweetCard key={counter++} singleTweet={tweet}/>
  })
    

    return (
      <div>
        <div>
          <label htmlFor="filter">Filter By Category:</label>
          <select name="filter" onChange={handleFilter}>
            {categories.map(cat => <option key={counter++}>{cat}</option>)}
          </select>
        </div>

        <div>
          {renderFilteredTweets}
        </div>
      </div>
    )
}

export default Filter