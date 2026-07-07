import React, { Component } from 'react'
import Newsitem from './Newsitem'
export class News extends Component {
  articles=[    {
      "source": {
        "id": "abc-news-au",
        "name": "ABC News (AU)"
      },
      "author": "https://www.abc.net.au/news/melissa-brown/167028",
      "title": "Call for investigation into cricket pitches on ovals after football tragedy",
      "description": "Nathan Fitzgerald's club has asked authorities to look at the way hard cricket pitches are covered on multi-use ovals as the 27-year-old continues to receive end-of-life care.",
      "url": "https://www.abc.net.au/news/2026-07-06/nathan-fitzgerald-football-club-wants-investigation-into-pitch/106883356",
      "urlToImage": "https://live-production.wcms.abc-cdn.net.au/ced6d4754f9bcbf5aa8e41edde7c61db?impolicy=wcms_watermark_news&cropH=432&cropW=769&xPos=515&yPos=267&width=862&height=485&imformat=generic",
      "publishedAt": "2026-07-05T23:42:39Z",
      "content": "A Melbourne suburban football club is calling for an investigation into the way cricket pitches are covered on multi-use community sporting ovals after the tragedy involving Epping player Nathan Fitz… [+3097 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ];

  constructor(){
    super();
    console.log("Hello I am a constructor from news component");
    this.state={
      articles:this.articles,
      loading: false
    };
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsDaily - Top headlines</h2>
        <div className="row">
            <div className="col-md-4">
        <Newsitem title="myTitle" description="myDescription" imageUrl="https://live-production.wcms.abc-cdn.net.au/ced6d4754f9bcbf5aa8e41edde7c61db?impolicy=wcms_watermark_news&cropH=432&cropW=769&xPos=515&yPos=267&width=862&height=485&imformat=generic" newsUrl="TODO"/>
        
        </div>
            <div className="col-md-4">
        <Newsitem title="myTitle" description="myDescription"/>
        
        </div>
            <div className="col-md-4">
        <Newsitem title="myTitle" description="myDescription"/>
        
        </div>
        
        </div>
      </div>
    )
  }
}



export default News
