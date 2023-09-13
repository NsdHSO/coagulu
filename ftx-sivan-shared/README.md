# ftx-sivan-shared

```html
<sivan-input
  [choices]="choices"
  [mainControl]="mainControl"
  [currencyControl]="currencyControl"
  [hintTop]="hintTop"
  [placeholder]="Your Placeholder"
  colorMatIcon="text-blue-500"
></sivan-input>
```

### Type input

```JSON
{
  "choices": [
    {
      "icon": "fa_solid:RO",
      "placeholder": "RON"
    },
    {
      "icon": "fa_solid:CR",
      "placeholder": "KN"
    }
  ]
}
```

```typescript
import { FormControl } from '@angular/forms';

mainControl = new FormControl('TEST');
hintTop = 'hintTop';
currencyControl = new FormControl('RO');
```
