import React, {Component} from "react";
import "./Caffeine.css";
// import axios from 'axios';

class Caffeine extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      question: "Now then, do you prefer familiar flavors or something a bit more adventurous? Choose a collection below.",
      collections: []
    };
  }

  componentDidMount() {
    
    fetch("/api/collections")
      .then(results => {
        return results.json();
      }).then(data => {
        let collections = data.map((collection) => {
          return(
            
                    <figure className="effect-bubba z-depth-3">
                        <img src="https://tympanus.net/Development/HoverEffectIdeas/img/2.jpg" alt="img02" />
                        <figcaption>
                            <h2>{collection.name}</h2>
                            {/* <p>{this.state.info[0]}</p> */}
                            {/* <a href="/decaf">{collection.name}</a> */}
                        </figcaption>
                    </figure>
                
          )
        })
        this.setState({collections: collections});
        console.log("state", this.state.collections);

      }
    )
        
       
  }

  render() {
      return(
        <div className="caffeine">
        <p>{this.state.question}</p>
        <div className="content">
                <div className="grid">
      
            {this.state.collections}
        </div>
        </div>
            </div>
      )
    }
    }

export default Caffeine;