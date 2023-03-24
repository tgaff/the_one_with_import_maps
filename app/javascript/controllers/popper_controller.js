import { Controller } from "@hotwired/stimulus"
import "@popperjs/core"
import "bootstrap"

export default class extends Controller {
  static targets = [ 'tooltip' ]

  tooltipTargetConnected(element) {
    new bootstrap.Tooltip(element)
  }
}
