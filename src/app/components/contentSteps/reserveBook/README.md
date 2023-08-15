# Structure of data

    DataFormBuilder:
        - values :[
            -   label: string;
                value?: number | string | boolean;
                values?: SubSection[];
                validators?: Validator[];
                bulkValues?: NestedValue[];
                placeholder?: string;
                labelHint: string;
        ]
    - labelHint are using in input type of text for mat-hint
    - placeholder are using in input type of text for placeholder
    - value are using in input to create single formControl
    - values are using in input to create multiple formControl -> FormGroup
    - validators are using to put validator
    - bulkValues are using to create formArray

    Validators :[
        - option :
            - /^\d+(\.\d+)?$/ Only number
            - /^[a-zA-Z\s]*$/ Only char
        - type: TypeConstantEnum
            - email
            - required
            - pattern TypePattern
            - min
        - errorMsg:
            - string "Msg what do you want to see in error workspace UI"
    ]
