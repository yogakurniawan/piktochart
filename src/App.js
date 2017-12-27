import React, { Component } from 'react';
import axios from 'axios'
import uuid from 'uuid/v4'
import { Button, FormGroup, Input, Row, Col } from 'reactstrap';
import Draggable from './components/Draggable'
import * as Storage from './utils/storage'

const arrayObjectIndexOf = (myArray, searchTerm, property) => {
  for(var i = 0, len = myArray.length; i < len; i++) {
      if (myArray[i][property] === searchTerm) return i;
  }
  return -1;
}

class App extends Component {
  constructor(props) {
    const textElementsFromStorage = Storage.loadItem('textElements')
    const imageElementsFromStorage = Storage.loadItem('imageElements')
    super(props)
    this.state = {
      textElements: textElementsFromStorage || [],
      textValue: "",
      file: null,
      images: [],
      imageElements: imageElementsFromStorage || [],
      selectedTexts: [],
      selectedImages: []
    }
  }

  componentDidMount() {
    this.getImages()
  }

  getImages() {
    const that = this;
    axios
    .get('http://localhost:8000/images')
    .then((res) => {
      that.setState({
        images: res.data
      })
    })
  }

  addTextToCanvas = () => {
    const { textElements, textValue } = this.state;
    textElements.push({
      id: uuid(),
      textValue,
      pos: {
        x: 0,
        y: 0
      }
    })
    this.setState({
      textElements,
      textValue: ""
    })
  }

  addImageToCanvas = (image) => {
    const { imageElements } = this.state;
    imageElements.push({
      id: uuid(),
      image,
      pos: {
        x: 0,
        y: 0
      }
    })
    this.setState({
      imageElements
    })
  }

  handleTextChange = (event) => {
    this.setState({ textValue: event.target.value })
  }

  handleImageChange = (event) => {
    event.preventDefault()
    let reader = new FileReader()
    let file = event.target.files[0]
    reader.onloadend = () => {
      this.setState({
        file: file
      })
    }
    reader.readAsDataURL(file)
  }

  upload = (event) => {
    const that = this
    event.preventDefault()
    const data = new FormData()
    data.append('upload', this.state.file)
    axios
      .post('http://localhost:8000/uploads', data)
      .then(() => {
        that.getImages()
      })
  }

  delete = (item) => {
    const textElements = this.state.textElements.slice()
    const imageElements = this.state.imageElements.slice()
    const selectedImages = this.state.selectedImages
    const selectedTexts = this.state.selectedTexts
    for (let text of selectedTexts) {
      if (arrayObjectIndexOf(textElements, text.id, 'id') > -1) {
        textElements.splice(arrayObjectIndexOf(textElements, text.id, 'id'), 1)
      }
    }

    selectedTexts.splice(0, selectedTexts.length)

    this.setState({
      textElements
    })

    for (let image of selectedImages) {
      if (arrayObjectIndexOf(imageElements, image.id, 'id') > -1) {
        imageElements.splice(arrayObjectIndexOf(imageElements, image.id, 'id'), 1)
      }
    }

    selectedImages.splice(0, selectedImages.length)    

    this.setState({
      imageElements,
      selectedImages
    })
  }

  addToSelectedTexts(text) {
    const { selectedTexts } = this.state
    if (arrayObjectIndexOf(selectedTexts, text.id, 'id') > -1) {
      selectedTexts.splice(arrayObjectIndexOf(selectedTexts, text.id, 'id'), 1);
    } else {
      selectedTexts.push(text)      
    }
    this.setState({
      selectedTexts
    })
  }

  addToSelectedImages(image) {
    const { selectedImages } = this.state
    if (arrayObjectIndexOf(selectedImages, image.id, 'id') > -1) {
      selectedImages.splice(arrayObjectIndexOf(selectedImages, image.id, 'id'), 1);
    } else {
      selectedImages.push(image) 
    }
    this.setState({
      selectedImages
    })
  }

  onMouseUpText = (pos, id) => {
    console.log(pos)
    console.log(id)
    const { textElements } = this.state
    const text = textElements.find(value => value.id === id)
    text.pos = pos
    this.setState({
      textElements
    })
  }

  onMouseUpImage = (pos, id) => {
    console.log(pos)
    console.log(id)
    const { imageElements } = this.state
    const image = imageElements.find(value => value.id === id)
    image.pos = pos
    this.setState({
      imageElements
    })
    console.log(this.state.imageElements)
  }

  save = () => {
    console.log(this.state.imageElements)    
    const { imageElements, textElements } = this.state
    Storage.saveItem('imageElements', imageElements);
    Storage.saveItem('textElements', textElements);
  }

  clear = () => {
    Storage.clear()
  }

  render() {
    const { textElements, imageElements, images, textValue } = this.state
    return (
        <Row>
          <Col sm="2" md="2" lg="2" className="sidepane">
            <form encType="multipart/form-data" onSubmit={this.upload} className="form">
              <h3>Form</h3>
              <FormGroup>
                <Input onChange={this.handleImageChange} type="file" placeholder="Upload Your Images" name="upload" />              
              </FormGroup>
              <FormGroup>
                <Button id="submit" type="submit">upload</Button>              
              </FormGroup>
            </form>
            <hr />
            <div className="assets">
              <h3>Assets</h3>
              <div className="text">
                <h4>Text</h4>
                <FormGroup>
                  <Input type="text" value={textValue} onChange={this.handleTextChange} name="text" id="text" />
                </FormGroup>
                <FormGroup>
                  <Button id="addText" onClick={this.addTextToCanvas}>Add Text</Button>
                </FormGroup>
              </div>
              <div className="image">
                <h4>Images</h4>
                <ul className="list-unstyled">
                {
                  images.length && images.map(image => 
                    <li>
                      <img alt='Piktochart' src={image} onClick={() => this.addImageToCanvas(image)} />
                    </li>
                  )
                }
                </ul>
              </div>
            </div>
          </Col>
          <Col sm="8" md="8" lg="8" className="canvas">
            <div className="block">
              {
                textElements.length > 0 && textElements.map(text => 
                  <Draggable pos={text.pos} onMouseUp={(pos) => this.onMouseUpText(pos, text.id)} key={text.id} onClick={() => this.addToSelectedTexts(text)}>
                    <span>{text.textValue}</span>
                  </Draggable>
                )
              }
              {
                imageElements.length > 0 && imageElements.map(image => 
                  <Draggable pos={image.pos} onMouseUp={(pos) => this.onMouseUpImage(pos, image.id)} key={image.id} onClick={() => this.addToSelectedImages(image)}>
                    <img alt='Piktochart' src={image.image} />
                  </Draggable>
                )
              }
            </div>
          </Col>
          <Col sm="2" md="2" lg="2" className="sidepane">
            <FormGroup style={{ marginTop: 10 }}>
              <Button id="delete" onClick={this.delete}>Delete</Button>              
            </FormGroup>
            <FormGroup style={{ marginTop: 10 }}>
              <Button id="save" onClick={this.save}>Save</Button>              
            </FormGroup>
            <FormGroup style={{ marginTop: 10 }}>
              <Button id="clear" onClick={this.clear}>Clear Storage</Button>              
            </FormGroup>
          </Col>
        </Row>
    );
  }
}

export default App