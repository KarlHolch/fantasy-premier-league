import { Component } from '@angular/core';

@Component({
  selector: 'app-rules',
  template: `
    <div class="rules-container">
      <h1>Rules</h1>
      <ol>
        <li *ngFor="let rule of rules; let i = index">
          <h2>Rule {{ i + 1 }}</h2>
          <p>{{ rule.description }}</p>
        </li>
      </ol>
    </div>
  `,
  styles: [`
    .rules-container {
      margin: 20px;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 8px;
    }
    h1 {
      text-align: center;
    }
    h2 {
      color: #333;
    }
    ol {
      counter-reset: rule-counter;
      list-style-type: none;
    }
    ol > li {
      counter-increment: rule-counter;
      margin-bottom: 15px;
    }
    ol > li:before {
      content: "Rule " counter(rule-counter) ". ";
      font-weight: bold;
    }
  `]
})
export class RulesComponent {
  rules = [
    { description: 'Always be respectful and courteous to others.' },
    { description: 'Follow the community guidelines at all times.' },
    { description: 'Do not share personal information.' },
    // Add more rules as needed
  ];
}
