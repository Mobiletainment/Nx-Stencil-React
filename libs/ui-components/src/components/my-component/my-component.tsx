import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle names
   */
  @Prop() middle: string[];

  /**
   * The last name
   */
  @Prop() last: string;

  /**
   * A custom named click handler
   */
  @Event() nameClicked: EventEmitter<string>;

  render() {
    const fullText = this.getText();
    return <div onClick={() => this.nameClicked.emit(fullText)}>Hello, World! I'm {fullText}</div>;
  }

  private getText(): string {
    return format(this.first, this.middle?.join(' '), this.last);
  }
}
