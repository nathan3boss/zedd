/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ZedCheckbox {
    }
}
declare global {
    interface HTMLZedCheckboxElement extends Components.ZedCheckbox, HTMLStencilElement {
    }
    var HTMLZedCheckboxElement: {
        prototype: HTMLZedCheckboxElement;
        new (): HTMLZedCheckboxElement;
    };
    interface HTMLElementTagNameMap {
        "zed-checkbox": HTMLZedCheckboxElement;
    }
}
declare namespace LocalJSX {
    interface ZedCheckbox {
    }
    interface IntrinsicElements {
        "zed-checkbox": ZedCheckbox;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "zed-checkbox": LocalJSX.ZedCheckbox & JSXBase.HTMLAttributes<HTMLZedCheckboxElement>;
        }
    }
}
