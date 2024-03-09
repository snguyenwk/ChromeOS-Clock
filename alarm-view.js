//
// alarm-view.ts
//
// Element which contains all of the alarm functionality.
//
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { AlarmSelector } from './alarm-selector';
import { getThemeBackground, getThemeOnSurface, getThemeSurface } from '../helper/styles/styles';
import '@material/web/icon/icon';
import '@material/web/button/filled-tonal-button';
import { AlarmCard } from './alarm-card';
let AlarmView = class AlarmView extends LitElement {
    /**
     * Construct an instance of AlarmView
     */
    constructor() {
        super();
        this.alarmSelector = new AlarmSelector();
        this.alarms = [];
        this.host = this;
        this.host.addController(this);
        this.timeout = 1000;
        console.log(this._timerID);
        // load alarms from storage in the future
    }
    /**
     * Used to keep the theme up-to-date
     */
    hostConnected() {
      super.hostConnected();
        this._timerID = window.setInterval(() => {
          this.alarms.forEach(alarm => {
            if (alarm.shouldNotify()) {
              NotificationHandler.fire("Alarm finished!");
            }
          });
            this.host.requestUpdate();
        }, this.timeout);
    }
    /**
     * Show the alarm selector dialog which is configured to add a new alarm.
     */
    handleAddAlarmClick() {
        this.alarmSelector.show();
    }
    /**
     * Show the alarm selector dialog which is configured to edit an existing alarm.
     */
    handleEditAlarmClick(alarm, index) {
        this.alarmSelector.show(alarm, index);
    }
    /**
     * Delete an existing alarm.
     *
     * @param index the index of the alarm array to delete
     */
    handleDeleteAlarmClick(index) {
        this.alarms.splice(index, 1);
        this.requestUpdate();
    }
    /**
     * Add a new alarm after receiving a response from alarm selector.
     *
     * @param alarm the newly created alarm
     */
    onAddAlarmEvent(alarm) {
        this.alarms.push(alarm);
        this.requestUpdate();
    }
    /**
     * Edit an existing alarm after receiving a response from alarm card.
     *
     * @param alarm the newly created alarm
     * @param index the index of the alarm array to modify
     */
    onEditAlarmEvent(alarm, index) {
        this.alarms[index] = alarm;
        this.alarms[index].setTitle(alarm.getTitle());
        this.requestUpdate();
    }
    render() {
        var alarmCards = [];
        for (var alarmIndex in this.alarms) {
            const alarm = this.alarms[alarmIndex];
            if (alarm != null && alarm != undefined) {
                alarmCards.push(new AlarmCard(Number(alarmIndex), alarm));
            }
        }
        const dialogColor = getThemeSurface();
        const filledTextColor = getThemeOnSurface();
        const backgroundColor = getThemeBackground();
        return html `
      <style>
        :host {
          --md-sys-color-surface-container-high: ${dialogColor};
          --md-sys-color-surface-container-highest: ${filledTextColor};
          background-color: ${backgroundColor};
        }
      </style>

      <md-filled-button id="new-button" @click=${this.handleAddAlarmClick}>
        <md-icon>add</md-icon>
        <br>
        New Alarm
      </md-filled-button>
      <div id="alarm-container"
        @delete=${(e) => this.handleDeleteAlarmClick(e.detail.index)}
        @edit=${(e) => this.handleEditAlarmClick(this.alarms[e.detail.index], e.detail.index)}>
        ${alarmCards}
      </div>
      <div
        id="alarm-selector"
        @add=${(e) => this.onAddAlarmEvent(e.detail.alarm)}
        @edit=${(e) => this.onEditAlarmEvent(e.detail.alarm, e.detail.index)}>
        ${this.alarmSelector}
      </div>
    `;
    }
};
AlarmView.styles = css `
    :host {
      padding: 8px;
      flex: 1 0 0;
      display: flex;
      flex-direction: row;
      --md-filled-text-field-container-shape: 16px;
      --md-outlined-text-field-container-shape: 16px;
    }
    #new-button {
      width: 128px;
      flex: auto 0 0;
      --md-filled-button-container-shape: 24px;
      height: 128px;
      padding: 8px;
    }
    #card-container {
      flex: 1 0 0;
      display: inline-block;
    }
  `;
AlarmView = __decorate([
    customElement('alarm-view')
], AlarmView);
export { AlarmView };
//# sourceMappingURL=alarm-view.js.map