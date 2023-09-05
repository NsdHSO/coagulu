'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@coagulu/source documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ButtonComponent.html" data-type="entity-link" >ButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FormBadgeComponent.html" data-type="entity-link" >FormBadgeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FormControlEntityComponent.html" data-type="entity-link" >FormControlEntityComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FormLabelComponent.html" data-type="entity-link" >FormLabelComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FtxFormsComponent.html" data-type="entity-link" >FtxFormsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FtxSivanSharedComponent.html" data-type="entity-link" >FtxSivanSharedComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FtxTooltipComponent.html" data-type="entity-link" >FtxTooltipComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InfoUserComponent.html" data-type="entity-link" >InfoUserComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InputComponent.html" data-type="entity-link" >InputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IntroComponent.html" data-type="entity-link" >IntroComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReserveBookComponent.html" data-type="entity-link" >ReserveBookComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpendMoneyComponent.html" data-type="entity-link" >SpendMoneyComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StepperComponent.html" data-type="entity-link" >StepperComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StepperStepsComponent.html" data-type="entity-link" >StepperStepsComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/FadeInOutDirective.html" data-type="entity-link" >FadeInOutDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/PapControlDirective.html" data-type="entity-link" >PapControlDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/PatchFormGroupValueDirective.html" data-type="entity-link" >PatchFormGroupValueDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/RenderYouDirective.html" data-type="entity-link" >RenderYouDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/ScrollHintDirective.html" data-type="entity-link" >ScrollHintDirective</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/GenerateFormBuilderService.html" data-type="entity-link" >GenerateFormBuilderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenerativeService.html" data-type="entity-link" >GenerativeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReserveEffects.html" data-type="entity-link" >ReserveEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StepperEffects.html" data-type="entity-link" >StepperEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StepperService.html" data-type="entity-link" >StepperService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidatorService.html" data-type="entity-link" >ValidatorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ZoneAxeService.html" data-type="entity-link" >ZoneAxeService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ActionBadge.html" data-type="entity-link" >ActionBadge</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BookDetail.html" data-type="entity-link" >BookDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategorySpendMoney.html" data-type="entity-link" >CategorySpendMoney</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataFormBuilder.html" data-type="entity-link" >DataFormBuilder</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DescriptionEntity.html" data-type="entity-link" >DescriptionEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormStepper.html" data-type="entity-link" >FormStepper</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Graph.html" data-type="entity-link" >Graph</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GraphValue.html" data-type="entity-link" >GraphValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Info.html" data-type="entity-link" >Info</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InfoUser.html" data-type="entity-link" >InfoUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Label.html" data-type="entity-link" >Label</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Modals.html" data-type="entity-link" >Modals</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Recommendation.html" data-type="entity-link" >Recommendation</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Reserve.html" data-type="entity-link" >Reserve</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReserveEntity.html" data-type="entity-link" >ReserveEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReservePartialState.html" data-type="entity-link" >ReservePartialState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReserveState.html" data-type="entity-link" >ReserveState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RoleOfMember.html" data-type="entity-link" >RoleOfMember</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Scope.html" data-type="entity-link" >Scope</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SetBookType.html" data-type="entity-link" >SetBookType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Step.html" data-type="entity-link" >Step</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StepperEntity.html" data-type="entity-link" >StepperEntity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StepperPartialState.html" data-type="entity-link" >StepperPartialState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StepperState.html" data-type="entity-link" >StepperState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StepperValues.html" data-type="entity-link" >StepperValues</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ValidatorConfig.html" data-type="entity-link" >ValidatorConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ValuesClass.html" data-type="entity-link" >ValuesClass</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ValuesValue.html" data-type="entity-link" >ValuesValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ValueToggle.html" data-type="entity-link" >ValueToggle</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});