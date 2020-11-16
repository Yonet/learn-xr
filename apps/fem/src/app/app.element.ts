import './app.element.scss';
import {aysBabylon} from '@learnxr/ays-babylon';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];

  connectedCallback() {
    const title = 'Learn WebXR';
    console.log('AysBaby', aysBabylon);
    // this.innerHTML = `
    //   <header class="flex">
    //     <h1>Welcome to ${title}!</h1>
    //   </header>
    //   <main>
    //     <canvas></canvas>
    //   </main>
    // `;
  }
}
customElements.define('learn-xr-root', AppElement);
