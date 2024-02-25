import { html } from "lit";

export interface MClockProps {
  /**
   * format of time.
   * ex. HH:mm:ss
   */
  timeFormat: string;

  /**
   * format of date.
   * ex. MM/dd E
   */
  dateFormat: string;

  /**
   * string of timezone.
   * ex. Asia/Tokyo
   */
  zoneString: string;

  /**
   * color of background.
   * ex. #000000
   */
  bgColor: string;

  /**
   * opacity of background.
   * enable string is "1" or "0.x"
   * ex. 0.2
   */
  bgOpacity: string;

  /**
   * color of date.
   * ex. #ffffff
   */
  dateColor: string;

  /**
   * color of timezone.
   * ex. #ffffff
   */
  zoneColor: string;

  /**
   * color of time.
   * ex. #ffffff
   */
  timeColor: string;
}

export const MClock = ({
  timeFormat,
  dateFormat,
  zoneString,
  bgColor,
  bgOpacity,
  dateColor,
  zoneColor,
  timeColor,
}: MClockProps) => {
  return html`
    <m-clock
      id="m-clock"
      time-format="${timeFormat}"
      zone-string="${zoneString}"
      date-format="${dateFormat}"
      bg-color="${bgColor}"
      bg-opacity="${bgOpacity}"
      date-color="${dateColor}"
      zone-color="${zoneColor}"
      time-color="${timeColor}"
    ></m-clock>
    <script type="module" src="/src/m-clock.ts"></script>
  `;
};
