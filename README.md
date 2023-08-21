# Coagulu

## Start the app

To start the development server run `npm start`. Open your browser and navigate to http://localhost:4200/. Happy coding!

## Pre Commit

```
    Lint
    npm run lint:fix

```

```
    Test
    npm run test
```

## Usage

### Logic

```ts
import { Component } from '@angular/core';
import { FtxFormsComponent } from './ftx-forms.component';

@Component({
  imports: [FtxFormsComponent],
  // ...
})
export class YourFormComponent {
  dynamicForm: FormGroup; // Initialize your form group
  // Your JSON configuration for the form
  jsonData: DataFormBuilder = {
    // Your configuration data here
  };
}
```

### HTML Template

```html
<ngx-ftx-forms
  [dynamicForm]="dynamicForm"
  [jsonData]="jsonData"
  (submitEvent)="submitForm()"
/>
```

### Configuration

```ts
/** The JSON configuration (jsonData) defines the structure and properties of 
    the dynamic form. 
    Refer to the JSON configuration structure in your DataFormBuilder interface for guidance.
*/
```

## Dependencies

- Angular Forms
- Angular Material
- Angular Common
