import { PostsSec } from './components/sections'

const Home = () => {
  return (
    <div className='w-[94%] md:w-[92%] mx-auto'>
      <div id="pos-article-display-94687"></div>
      <PostsSec title="فکت" secid={5}/>
      <PostsSec title="جدیدترین پست ها" secid={1}/>
      <div id="pos-article-display-94407"></div>
      <PostsSec title="زندگی" secid={4}/>
   
      <PostsSec title="آموزش" secid={2}/>
      <div id="pos-article-display-94698"></div>
      <PostsSec title="ابزارات" secid={3}/>
      <div id="pos-article-display-94409"></div>
      <div id="pos-article-display-96176"></div>
    </div>
  )
}

export default Home