import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="image-loader"
export default class extends Controller {
  static values = {
    imageSrc: String
  }

  /*
    This demonstrates loading an image in JS.  But considering the Hotwire stack
    we're using here it may have been simpler to just do this through a turbo
    frame or stream (if not just plain HTML..).  This is just a demo. ;)
  */

  connect() {
    const img = new Image(400, 300)

    img.src = this.imageSrcValue
    this.element.appendChild(img)
  }
}
