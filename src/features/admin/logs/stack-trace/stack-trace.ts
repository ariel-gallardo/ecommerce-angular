import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'stack-trace',
  standalone: false,
  templateUrl: './stack-trace.html',
  styleUrl: './stack-trace.scss',
})
export class StackTrace implements OnChanges{
  @Input() data: string = '';
  formattedStack: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data']) {
      this.formattedStack = this.formatStack(this.data);
    }
  }

  private formatStack(stack: string): string {
    const lines = stack.split('\n');

    return lines.map(line => {
      const match = line.match(/^\s*at\s+(.*?)\((.*?)\)(?: in (.*?):line (\d+))?/);
      if (match) {
        const [, fn, args, file, lineNum] = match;

        let html = `<span class="text-purple-400">${fn}</span>(<span class="text-purple-300">${args}</span>)`;
        if (file && lineNum) {
          html += ` in <span class="text-blue-300">${file}</span>:<span class="text-green-400">${lineNum}</span>`;
        }
        return html;
      }
      return line;
    }).join('<br>');
  }
}
