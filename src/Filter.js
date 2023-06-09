import { useState } from 'react';
import TweetCard from './TweetCard';
import Buttons from './Buttons';

function Filter({ tweets, slice, handleNext, handlePrev, isLoggedIn, handleLike, setTweets}) {

  const [filter, setFilter] = useState('')

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
  .slice(slice[0], slice[1]).map(tweet => {
    return <TweetCard 
            key={tweet.id} 
            singleTweet={tweet} 
            isLoggedIn={isLoggedIn} 
            handleLike={handleLike}
            setTweets={setTweets}
          />
  })
    

    return (
      <div>
        <div className='filter'>
          <label htmlFor="filter">Filter By Category:</label>
          <select name="filter" onChange={handleFilter} className='dropdown'>
              {categories.map(cat => <option key={cat}>{cat}</option>)}
          </select>
        </div>

        <div>
          {renderFilteredTweets}
          <Buttons text={'Previous'} callBack={handlePrev} />
          <Buttons callBack={handleNext} />
        </div>
      </div>
    )
}

export default Filter