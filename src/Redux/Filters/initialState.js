import futureImg from '../../img/1.jpg'
import seo from '../../img/2.jpg'
import leader from '../../img/3.jpg'
import team from '../../img/4.jpg'
import program from '../../img/5.jpg'
import web from '../../img/6.jpg'
import desk from '../../img/7.jpg'
import desk2 from '../../img/8.jpg'
import anglar from '../../img/9.jpg'
import author1 from '../../img/profile1.jpg'
import author2 from '../../img/profile2.jpg'
import author3 from '../../img/profile3.jpg'
const initialState = {
  posts: [
    {
      id: 1,
      title: "Boost your conversion rate",
      category: "Article",
      author: "Sumit Saha",
      date: "11 Jul 2022",
      postImg: program,
      authorImg: author1,
      timeToRead: "11"
    },
    {
      id: 2,
      title: " How to use search engine optimization to drive sales",
      category: "Tutorial",
      author: "Anisul Islam",
      date: "31 January 2022",
      postImg: seo,
      authorImg: author2,
      timeToRead: "20"
    },
    {
      id: 3,
      title: "Improve your customer experience",
      category: "Article",
      author: "Jhanker Mahbub",
      date: "19 August 2022",
      postImg: team,
      authorImg: author3,
      timeToRead: "14"
    },
    {
      id: 4,
      title: "7 Ways to Improve Your Web Design Skills This Year",
      category: "Tutorial",
      author: "Jhankar Mahbub",
      date: "20 December 2022",
      postImg: leader,
      authorImg: author2,
      timeToRead: "40"
    },
    {
      id: 5,
      title: "Learn Redux",
      category: "Tutorial",
      author: "Sumit Saha",
      date: "13 Octobor 2022",
      postImg: futureImg,
      authorImg: author1,
      timeToRead: "10"
    },
    {
      id: 6,
      title: "Node js guideline for absolute beginner",
      category: "Blog",
      author: "Anisul Islam",
      date: "08 March 2022",
      postImg: web,
      authorImg: author2,
      timeToRead: "30"
    },
    {
      id: 7,
      title: "Think in a typescipt way",
      category: "Tutorial",
      author: "Jhanker Mahbub",
      date: "05 May 2022",
      postImg: desk,
      authorImg: author3,
      timeToRead: "20"
    },
    {
      id: 8,
      title: "Learn Angular beginner to advance",
      category: "Article",
      author: "Sumit Saha",
      date: "21 February 2022",
      postImg: anglar,
      authorImg: author1,
      timeToRead: "25"
    },
    {
      id: 9,
      title: "AI have some fun with your device",
      category: "Blog",
      author: "Jhanker Mahbub",
      date: "03 November 2022",
      postImg: desk2,
      authorImg: author3,
      timeToRead: "22"
    },
  ],
  author:"",
  category:""
}

export default initialState;