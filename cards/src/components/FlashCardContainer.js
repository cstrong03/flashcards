import React, { Component } from "react";
import Flashcard from "./Flashcard";
import { CLIENT_URL } from "../constants.js";
import axios from 'axios';

class FlashcardContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      flashcard: [],
      currentIndex: 0
    }
  }

  componentDidMount(){
    // axios.get(CLIENT_URL)
    //   .then((response)=> {
    //     console.log(response)
    //     this.setState({
    //       flashcard: response.data
    //     })
    //   })

    fetch(CLIENT_URL)
      .then((response)=> {
        return response.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
          flashcard: data
        })
      })
  }
  render() {
    console.log('rendering components')
    const {flashcards, currentIndex}=this.state;

    const cardDetail = flashcards[currentIndex];

    let card;

    if (cardDetail) {
      card = <Flashcard detail = {cardDetail} />
    }

    return(
      <div>
        card
      <div />
    )

  }
}

export default FlashcardContainer;
