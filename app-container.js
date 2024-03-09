//
// app-container.ts
//
// Main container and entry point for application.
//
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ClockView } from './clock/clock-view';
import { PlaceholderView } from './placeholder/placeholder-view';
import '@material/web/tabs/tabs';
import '@material/web/tabs/primary-tab';
let AppContainer = class AppContainer extends LitElement {
    constructor() {
        super(...arguments);
        this.selectedIndex = 0;
        this.tabContents = [
            (new ClockView()),
            (new PlaceholderView()),
            (new PlaceholderView()),
            (new PlaceholderView())
        ];
    }
    _onTabChange(event) {
        const tabIndex = event.target.activeTabIndex;
        this.selectedIndex = tabIndex;
    }
    render() {
        return html `
        <md-tabs style="flex: 0 0 0" @change=${this._onTabChange}>
            <md-primary-tab>World Clock</md-primary-tab>
            <md-primary-tab>Alarms</md-primary-tab>
            <md-primary-tab>Timers</md-primary-tab>
            <md-primary-tab>Stopwatch</md-primary-tab>
        </md-tabs>
        ${this.tabContents[this.selectedIndex]}
        `;
    }
};
AppContainer.styles = css `
        :host {
            display: flex;
            height: 100%;
            flex-direction: column;
        }
        .flex-spacer {
            flex: 1 0 0;
        }
    `;
__decorate([
    property({ type: Number })
], AppContainer.prototype, "selectedIndex", void 0);
__decorate([
    property({ type: Array })
], AppContainer.prototype, "tabContents", void 0);
AppContainer = __decorate([
    customElement('app-container')
], AppContainer);
export { AppContainer };
//# sourceMappingURL=app-container.js.map