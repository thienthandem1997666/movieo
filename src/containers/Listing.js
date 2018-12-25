import React, { Component } from "react";
import { apiKey, media, defaultParam } from "../setting";
import Axios from "axios";
import Item from "../component/Item";
import Modal from "../component/Modal";
import Description from "../component/Description";

const ITEM_IMAGE_BASE_URL = media.base_url + "w500";

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      modalData: {
        header: null,
        footer: null,
        content: null
      }
    };
    this.showHoverOnClick = this.showHoverOnClick.bind(this);
    this.triggerMovieDescriptionModal = this.triggerMovieDescriptionModal.bind(
      this
    );
  }

  handleData(response) {
    let data = response;
    let listItems = [];
    if (data) {
      data.map((item, index) => {
        let props = {
          href: item.id,
          imgSrc: ITEM_IMAGE_BASE_URL + "/" + item.poster_path,
          name: item.title,
          release: item.release_date,
          key: item.id,
          showHoverOnClick: this.showHoverOnClick
        };
        listItems.push(<Item {...props} />);
        return item;
      });
    }
    return listItems;
  }

  showHoverOnClick(key, e) {
    e.preventDefault();
    let movieUrl = `/movie/${key}`;
    Axios.get(movieUrl, {
      params: defaultParam
    }).then(data => {
      this.triggerMovieDescriptionModal(data.data);
    });
  }

  triggerMovieDescriptionModal(data) {
    console.log(data);
    let props = {
      name: data.title,
      release: data.release_date,
      details: data.overview,
      runtime: data.runtime,
      rating: data.popularity,
      vote: data.vote_average
    };
    let description = <Description {...props} />;
    this.setState({
      modalData: {
        header: null,
        content: description,
        footer: null
      }
    });
  }

  componentDidMount() {
    Axios.get("/movie/popular", {
      params: defaultParam
    })
      .then(response => {
        this.setState({
          items: response.data.results
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <div className="listing--wrapper">
          {this.handleData(this.state.items)}
        </div>
        <Modal {...this.state.modalData} />
      </>
    );
  }
}

export default Listing;
