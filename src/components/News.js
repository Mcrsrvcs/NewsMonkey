import React,{ useEffect ,useState} from "react";
import NewsItem from "./NewsItem";
import Loading from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalize = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updateNews = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.api}&page=1&pagesize=${props.items}&category=${props.category}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30);
    let parsed = await data.json();
    props.setProgress(60);
    setArticles(parsed.articles)
    setTotalResults(parsed.totalResults)
    setLoading(false)
    props.setProgress(100);
    document.title = `${capitalize(props.category)} | News Hunter `
  }

  useEffect(() => {
    updateNews();
    //eslint-disable-next-line
 }, [])
  

  // nextpage = async () => {
  //   console.log(this.state.totalResults)
  //  if(this.state.page + 1 > Math.ceil(this.state.totalResults/(props.items))){console.log("NULL")}
  //  else{ 
  //    this.setState({loading : true});
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.api}&page=${ this.state.page + 1}&pagesize=${props.items}&category=${props.category}`;
  //   let data = await fetch(url);
  //   let parsed = await data.json();
  //   this.setState({articles : parsed.articles});
  //   console.log(this.state.page);
  //   this.setState({
  //     page : this.state.page + 1,
  //     loading : false
  //   })}
  // }
  // prepage = async () => {
  //   console.log("previouse");
  //   this.setState({loading : true});
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.api}&page=${ this.state.page - 1}&pagesize=${props.items}&category=${props.category}`;
  //   let data = await fetch(url);
  //   let parsed = await data.json();
  //   this.setState({articles : parsed.articles});
  //   this.setState({
  //     page : this.state.page - 1,
  //     totalarticles : parsed.articles,
  //     loading : false
  //   })
  //   console.log(this.state.page);
  // }

  // fetchMoreData = () => {
  //   // a fake async api call like which sends
  //   // 20 more records in 1.5 secs
  //   setTimeout(() => {
  //     this.setState({
  //       items: this.state.items.concat(Array.from({ length: 20 }))
  //     });
  //   }, 1500);
  // };
  const fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    if(page + 1 > Math.ceil(totalResults/(props.items))){console.log("NULL")}
    else{ 
     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.api}&page=${ page + 1}&pagesize=${props.items}&category=${props.category}`;
     let data = await fetch(url);
     let parsed = await data.json();

     setArticles(articles.concat(parsed.articles));
     setPage(page+1)
     setLoading(false);
     }
  };

  // setTimeout(() => {
  //   this.setState({category : props.category});
  //   console.log("yes");
  // }, 5000);
// console.log(props.category);
// let links = document.querySelectorAll('.nav-item');
// console.log(links)

    return (
      <main className="mx-3 my-2">
       
            <InfiniteScroll
            className="InfiniteScroll"
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Loading/>}
          >
            <div className="container newscontainer rounded mt-5 opacity-100 pb-3 px-5">
          <h1 className="text-white py-3 px-3 text-center ">Top News</h1>
         {loading && <Loading/>}
          <div className="row">
          {articles.map((e)=>{
          return <div className="col-md-4 py-3" key={e.url}>
              <NewsItem 
                title={e.title?e.title.slice(0,45)+"...":""}
                description={e.description?e.description.slice(0,88)+"...":""}
                imageUrl={e.urlToImage?e.urlToImage:"https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDIvNzZkMTAxZWItZmVjOC00NDFhLTg2ZWYtMzdiNGE2ZGQ0NGZiLmpwZw==.jpg"}
                newsUrl={e.url}
                author={e.author}
                date={e.publishedAt}
                source={e.source}
              />
            </div>
            })}
          </div>
        </div>
          </InfiniteScroll>

        {/* <div className="container rounded mt-5 opacity-100 pb-3 px-5">
          <h1 className="text-white py-3 px-3 ">Updates</h1>
          <div className="row">
            <div className="col py-3">
              <NewsItem title="Tiel" description="dic" />
            </div>{" "}
            <div className="col py-3">
              <NewsItem title="Tiel" description="dic" />
            </div>{" "}
            <div className="col py-3">
              <NewsItem title="Tiel" description="dic" />
            </div>
          </div>
        </div> */}
      </main>
    );
  }

News.defaultProps = {
  country : 'in',
  items : 15,
  category : 'genral'
}

News.propTypes = {
  country : PropTypes.string,
  items: PropTypes.number
}

export default News