import { LitElement } from 'lit';
import '@material/web/tabs/tabs';
import '@material/web/tabs/primary-tab';
export declare class AppContainer extends LitElement {
    static styles: import("lit").CSSResult;
    selectedIndex: number;
    tabContents: LitElement[];
    private _onTabChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'app-container': AppContainer;
    }
}
//# sourceMappingURL=app-container.d.ts.map