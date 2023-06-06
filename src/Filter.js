import { useState } from 'react';
import TweetCard from './TweetCard';

function Filter({ tweets }) {

  const [filter, setFilter] = useState('')
  const [slice, setSlice] = useState([0, 100])
  
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

  const handleNext = () => {
    setSlice(prev => prev.map(pre => pre += 100))
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const handlePrev = () => {
    if (slice[0] === 0) {
      return null
    } else {
      setSlice(prev => prev.map(pre => pre -= 100))
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  const filteredTweets = tweets.filter(tweet => {
    return tweet.keyword.toLowerCase().includes(filter.toLocaleLowerCase())
  })

  const renderFilteredTweets = filteredTweets
  .slice(slice[0], slice[1]).map(tweet => {
    return <TweetCard key={counter++} singleTweet={tweet}/>
  })
    

    return (
      <div>
        <div className='filter'>
          <label htmlFor="filter">Filter By Category:</label>
          <select name="filter" onChange={handleFilter}>
            {categories.map(cat => <option key={counter++}>{cat}</option>)}
          </select>
        </div>

        <div>
          {renderFilteredTweets}
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    )
}

export default Filter