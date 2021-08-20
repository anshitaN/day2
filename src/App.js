import Card from './Card';
import './App.css';
const card_details=[

  {bookCover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1594648564l/53424992._SY475_.jpg",
    bookName:"The 5AM Club",
    subtit:"Novel by Robin Sharma",
    desc:"Legendary leadership and elite performance expert Robin Sharma introduced The 5 AM Club concept over twenty years ago, based on a revolutionary morning routine that has helped his clients maximize their productivity, activate their best health and bulletproof their serenity in this age of overwhelming complexity."

  },
  {bookCover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535115320l/40121378._SY475_.jpg",
  bookName:"Atomic Habits",
  subtit:"Novel by James Clear",
  desc:"Atomic Habits will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits--whether you are a team looking to win a championship, an organization hoping to redefine an industry, or simply an individual who wishes to quit smoking, lose weight, reduce stress, or achieve any other goal."

},
{bookCover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1404331702l/18460392.jpg",
bookName:"All the bright places",
subtit:"Novel by Jennifere Niven",
desc:"When Finch and Violet meet on the ledge of the bell tower at school, it’s unclear who saves whom. And when they pair up on a project to discover the “natural wonders” of their state, both Finch and Violet make more important discoveries."

},
{bookCover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1428506021l/4701.jpg",
bookName:"A spot of bother",
subtit:"Novel by Mark Haddon",
desc:"The madness – literally – of family life proves rich comic fodder for Haddon’s crackling prose and bittersweet insights into misdirected love. "

},
{bookCover:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1345958969l/128029.jpg",
bookName:"A thousand splendid suns",
subtit:"Novel by Khaled Hosseini",
desc:"A Thousand Splendid Suns is a breathtaking story set against the volatile events of Afghanistan's last thirty years - from the Soviet invasion to the reign of the Taliban to post-Taliban rebuilding - that puts the violence, fear, hope, and faith of this country in intimate, human terms."

}
] 


function App() {
 return(
   
 <div className="container-main">
   {
     card_details.map((details, index)=>(

      <Card key={index} image={details.bookCover} title={details.bookName} subtitle={details.subtit} desc={details.desc}/>

     ))


   }
 </div>
   
 );
}

export default App;
