import { InputHandler } from './input-handler';

export enum HandleType {
  N = 'n',
  E = 'e',
  W = 'w',
  S = 's',
  NE = 'ne',
  NW = 'nw',
  SE = 'se',
  SW = 'sw',
}

export class ResizeHandler {
  input: InputHandler = null;
  private handle: HTMLElement = null;
  private width = 12;

  constructor(
    readonly target: HTMLElement,
    readonly type: HandleType
  ) {
    this.initialize();
  }

  private initialize() {
    this.handle = this.target.ownerDocument.createElement('div');
    this.handle.classList.add('ui-resize-handler-' + this.type);
    this.input = new InputHandler(this.handle);
    this.target.appendChild(this.handle);

    let style = this.handle.style;
    style.position = 'absolute';
    style.zIndex = '1';
    style.backgroundColor = 'transparent';

    switch (this.type) {
      case HandleType.N:
        style.top = `${-this.width * 3 / 4}px`;
        style.left = '0px';
        style.right = '0px';
        style.height = `${this.width}px`;
        //style.cursor = 'ns-resize';
        break;
      case HandleType.E:
        style.top = '0px';
        style.bottom = '0px';
        style.right = `${-this.width * 3 / 4}px`;
        style.width = `${this.width}px`;
        //style.cursor = 'ew-resize';
        break;
      case HandleType.W:
        style.top = '0px';
        style.bottom = '0px';
        style.left = `${-this.width * 3 / 4}px`;
        style.width = `${this.width}px`;
       // style.cursor = 'ew-resize';
        break;
      case HandleType.S:
        style.bottom = `${-this.width * 3 / 4}px`;
        style.left = '0px';
        style.right = '0px';
        style.height = `${this.width}px`;
        //style.cursor = 'ns-resize';
        break;
      case HandleType.NE:
        style.top = `${-this.width * 3 / 4}px`;
        style.right = `${-this.width * 3 / 4}px`;
        style.width = `${this.width * 3 / 2}px`;
        style.height = `${this.width * 3 / 2}px`;
        //style.cursor = 'nesw-resize';
        style.zIndex = '2';
        break;
      case HandleType.NW:
        style.top = `${-this.width * 3 / 4}px`;
        style.left = `${-this.width * 3 / 4}px`;
        style.width = `${this.width * 3 / 2}px`;
        style.height = `${this.width * 3 / 2}px`;
        //style.cursor = 'nwse-resize';
        style.zIndex = '2';
        break;
      case HandleType.SE:
        style.bottom = `${-this.width * 3 / 4}px`;
        style.right = `${-this.width * 3 / 4}px`;
        style.width = `${this.width * 3 / 2}px`;
        style.height = `${this.width * 3 / 2}px`;
        //style.cursor = 'nwse-resize';
        style.zIndex = '2';
        break;
      case HandleType.SW:
        style.bottom = `${-this.width * 3 / 4}px`;
        style.left = `${-this.width * 3 / 4}px`;
        style.width = `${this.width * 3 / 2}px`;
        style.height = `${this.width * 3 / 2}px`;
        //style.cursor = 'nesw-resize';
        style.zIndex = '2';
        break;
    }
    this.cursor(true);
  }

  destroy() {
    this.handle.remove();
    this.input.destroy();
  }

  cursor(active: boolean) {
    let style = this.handle.style;
    if (active) {
      switch (this.type) {
        case HandleType.N:
          style.cursor = 'ns-resize';
          break;
        case HandleType.E:
          style.cursor = 'ew-resize';
          break;
        case HandleType.W:
          style.cursor = 'ew-resize';
          break;
        case HandleType.S:
          style.cursor = 'ns-resize';
          break;
        case HandleType.NE:
          style.cursor = 'nesw-resize';
          break;
        case HandleType.NW:
          style.cursor = 'nwse-resize';
          break;
        case HandleType.SE:
          style.cursor = 'nwse-resize';
          break;
        case HandleType.SW:
          style.cursor = 'nesw-resize';
          break;
      }
    } else {
      style.cursor = 'default';
    }
  }

  able(align: string) {
    let style = this.handle.style;
    if (align !== 'horizontal' && align !== 'vertical') {
      style.pointerEvents = 'auto';
    } else {
      switch (this.type) {
        case HandleType.N:
          style.pointerEvents = (align === 'vertical') ? 'auto' : 'none';
          break;
        case HandleType.E:
          style.pointerEvents = (align === 'horizontal') ? 'auto' : 'none';
          break;
        case HandleType.W:
          style.pointerEvents = (align === 'horizontal') ? 'auto' : 'none';
          break;
        case HandleType.S:
          style.pointerEvents = (align === 'vertical') ? 'auto' : 'none';
          break;
        case HandleType.NE:
          style.pointerEvents = 'none';
          break;
        case HandleType.NW:
          style.pointerEvents = 'none';
          break;
        case HandleType.SE:
          style.pointerEvents = 'none';
          break;
        case HandleType.SW:
          style.pointerEvents = 'none';
          break;
      }
    }
  }
}
