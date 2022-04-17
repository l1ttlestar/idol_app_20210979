function Idol({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>;
      <img src={picture} />
    </div>
  );
}

const IdolILike = [
{
  name:'nct',
  image: 'https://img.wowtv.co.kr/wowtv_news/dnrs/20220211/2022021109080808018d3244b4fed58141237161.jpg'
},
{
  name:'red velvet',
  image:'https://image.ytn.co.kr/general/jpg/2022/0321/202203211441229279_d.jpg'
},
{
  name:'seventeen',
  image:'https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2022/04/12/687d0a98-4dcf-4ae7-b8e3-57f4443acbd2.jpg'
},
{
  name:'oh my girl',
  image:'https://cdn.mhnse.com/news/photo/202204/100312_83181_2544.jpg'
},
{
  name:'aespa',
  image:'https://img.vogue.co.kr/vogue/2021/10/style_617668d772d73-930x930.jpeg'
},
{
  name:'IU',
  image:'https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg'
}

];

function App() {
  return (
  <div>
    {IdolILike.map(group =>  <Idol key={group.name} name={group.name} picture={group.image} />)}
  </div>
  );
}

export default App;
