import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

  // refreshPage = async  () => {
  //   console.log("REFRESED");
  //     this.setState({loading : true}); 
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.api}&page=1&pagesize=${this.props.items}&category=${this.props.category}`;
  //     let data = await fetch(url);
  //     let parsed = await data.json();
  //     this.setState({articles : parsed.articles ,
  //        totalResults : parsed.totalResults,
  //       loading : false
  //      });
  //     console.log(parsed)
  // }

  static defaultProps = {
    country : 'in',
    items : 15,
    category : 'genral'
  }

  static propTypes = {
    country : PropTypes.string,
    items: PropTypes.number
  }

  constructor(props) {
    super(props);
    console.log("this is news.js constructor");
    this.state = {
      articles:[],
      loading: true,
      page:1   ,
      category : "sports",
      reload: false,
      totalResults : 0,
    };
  }

  async componentDidMount(){
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.api}&page=1&pagesize=${this.props.items}&category=${this.props.category}`;
    this.setState({loading : true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsed = await data.json();
    this.props.setProgress(60);
    this.setState({articles : parsed.articles ,
       totalResults : parsed.totalResults,
      loading : false,
     });
    this.props.setProgress(100);
  }

  // nextpage = async () => {
  //   console.log(this.state.totalResults)
  //  if(this.state.page + 1 > Math.ceil(this.state.totalResults/(this.props.items))){console.log("NULL")}
  //  else{ 
  //    this.setState({loading : true});
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.api}&page=${ this.state.page + 1}&pagesize=${this.props.items}&category=${this.props.category}`;
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
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.api}&page=${ this.state.page - 1}&pagesize=${this.props.items}&category=${this.props.category}`;
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
  fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/(this.props.items))){console.log("NULL")}
    else{ 
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.api}&page=${ this.state.page + 1}&pagesize=${this.props.items}&category=${this.props.category}`;
     let data = await fetch(url);
     let parsed = await data.json();
     this.setState({articles : this.state.articles.concat(parsed.articles)});
     console.log(this.state.page);
     this.setState({
       page : this.state.page + 1,
       loading : false
     })}
  };

  render() {

  // setTimeout(() => {
  //   this.setState({category : this.props.category});
  //   console.log("yes");
  // }, 5000);
// console.log(this.props.category);
// let links = document.querySelectorAll('.nav-item');
// console.log(links)

    return (
      <main className="mx-3">
       
            <InfiniteScroll
            className="InfiniteScroll"
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Loading/>}
          >
            <div className="container newscontainer rounded mt-5 opacity-100 pb-3 px-5">
          <h1 className="text-white py-3 px-3 text-center ">Top News</h1>
         {this.state.loading && <Loading/>}
          <div className="row">
          {this.state.articles.map((e)=>{
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
}