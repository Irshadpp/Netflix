import Banner from "../components/Banner"
import MovieRow from "../components/MovieRow"
import endpoints from "../services/movieServices"

function Home() {
  return (
    <>
    <Banner/>
    <MovieRow title="Upcoming" url={endpoints.upcoming}/>
    <MovieRow title="Trending" url={endpoints.trending}/>
    <MovieRow title="Top Rated" url={endpoints.topRated}/>
    <MovieRow title="Comedy" url={endpoints.comedy}/>
    <MovieRow title="Popular" url={endpoints.popular}/>
    </>
  )
}

export default Home
