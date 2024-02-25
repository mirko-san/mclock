import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import install from '@twind/with-web-components'
import config from '../twind.config'

const withTwind = install(config)

import { formatISO, format, parseISO } from 'date-fns';
import { colord } from 'colord';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('m-clock')
@withTwind
export class MClock extends LitElement {
  constructor() {
    super();

    const dateISO = formatISO(new Date());
    this.dateISO = dateISO;
    this.dateString = format(parseISO(dateISO), this.dateFormat)
    this.timeString = format(parseISO(dateISO), this.timeFormat)

    this.interval = setInterval(() => {
      const dateISO = formatISO(new Date())
      this.updateDateString(dateISO);
      this.updateTimeString(dateISO);
    }, 1000);;
  }

  @property({ attribute: false })
  dateISO: string;

  @property({ attribute: false })
  timeString: string;

  @property({ attribute: false })
  dateString: string;

  @property({ attribute: false })
  interval?: number;

  @property({ attribute: false })
  _BgColorStr?:string;

  @property({ type: String, attribute: 'time-format'})
  timeFormat = "HH:mm:ss";

  @property({ type: String, attribute: 'date-format' })
  dateFormat = "MM/dd E";

  @property({ type: String, attribute: 'zone-string' })
  zoneString = 'Asia/Tokyo';

  @property({ type: String, attribute: 'bg-color' })
  bgColor = '#000000';

  @property({ type: String, attribute: 'bg-opacity' })
  bgOpacity = "1";

  @property({ type: String, attribute: 'date-color' })
  dateColor = '#ffffff';

  @property({ type: String, attribute: 'zone-color' })
  zoneColor = '#ffffff';

  @property({ type: String, attribute: 'time-color' })
  timeColor = '#ffffff';

  updateDateString(dateISO: string) {
    this.dateString = format(parseISO(dateISO), this.dateFormat)
  }

  updateTimeString(dateISO: string) {
    this.timeString = format(parseISO(dateISO), this.timeFormat)
  }

  render() {
    return html`
    <div class="m-container">
    <div
      class="inline-block m-8 px-6 pt-4 pb-6 bg-[${this._BgColorStr}] rounded tracking-widest"
    >
      <div class="flex items-center mb-1">
        <div class="text-6xl text-[${this.dateColor}]">
          <span class="m-date">${this.dateString}</span>
        </div>
        <div class="ml-4 text-2xl text-[${this.zoneColor}]">
          <span class="m-zone">( ${this.zoneString} )</span>
        </div>
      </div>
  
      <div class="text-[${this.timeColor}] text-9xl align-middle">
        <span class="m-time">${this.timeString}</span>
      </div>
    </div>
  </div>
    `
  }

  willUpdate() {
    const _bgColor = colord(this.bgColor).alpha(Number.parseFloat(this.bgOpacity))
    const _bgColorStr = _bgColor.toRgbString().replace(/ /g, '');
    this._BgColorStr = _bgColorStr;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'm-clock': MClock
  }
}
