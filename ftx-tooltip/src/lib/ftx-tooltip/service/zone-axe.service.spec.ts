import { TestBed } from '@angular/core/testing';
import { ZoneAxeService } from './zone-axe.service';
import { Renderer2 } from '@angular/core';

class MockDOMRect implements DOMRect {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number
  ) {}

  get top(): number {
    return this.y;
  }
  get right(): number {
    return this.x + this.width;
  }
  get bottom(): number {
    return this.y + this.height;
  }
  get left(): number {
    return this.x;
  }

  public toJSON(): void {
    console.log('to json');
  }
}
describe('ZoneAxeService', () => {
  let service: ZoneAxeService;
  let tooltip: HTMLElement;
  let target: HTMLElement;
  let renderer2: Renderer2;

  beforeEach(() => {
    tooltip = {
      getBoundingClientRect: () => new MockDOMRect(10, 20, 100, 150),
      children: [
        {
          children: [
            {
              children: [], // Mock the necessary child elements here
              style: {}, // Mock the necessary style object here
            },
          ],
        },
      ],
    } as unknown as HTMLElement;

    target = {
      getBoundingClientRect: () => new MockDOMRect(50, 60, 120, 80),
    } as HTMLElement;

    renderer2 = {
      addClass: jest.fn(),
      setStyle: jest.fn(),
    } as unknown as Renderer2;

    TestBed.configureTestingModule({
      providers: [
        {
          provide: Renderer2,
          useValue: renderer2,
        },
      ],
    });
  });

  it('should be created', () => {
    TestBed.overrideProvider(HTMLDivElement, { useValue: tooltip });
    TestBed.overrideProvider(HTMLElement, { useValue: target });

    service = TestBed.inject(ZoneAxeService);

    expect(service).toBeTruthy();
  });
  it('should calculate position with "right" arrow class', () => {
    TestBed.overrideProvider(HTMLDivElement, { useValue: tooltip });
    TestBed.overrideProvider(HTMLElement, { useValue: target });

    service = TestBed.inject(ZoneAxeService);

    const position = service.axes();

    expect(position.top).toEqual('25'); // Replace with the expected top value
    expect(position.left).toEqual('186'); // Replace with the expected left value
    expect(renderer2.addClass).toHaveBeenCalledWith(
      tooltip.children[0].children[0],
      'right'
    );
  });

  it('should apply right position and arrow class', () => {
    TestBed.overrideProvider(HTMLDivElement, { useValue: tooltip });
    TestBed.overrideProvider(HTMLElement, { useValue: target });

    service = TestBed.inject(ZoneAxeService);

    const position = service.axes();

    expect(position.top).toEqual('25'); // Replace with the expected top value
    expect(position.left).toEqual('186'); // Replace with the expected left
    // value
    expect(renderer2.addClass).toHaveBeenCalledWith(
      tooltip.children[0].children[0],
      'right'
    );
    // Additional assertions related to this scenario
  });

  it('should apply top position and arrow class', () => {
    tooltip = {
      getBoundingClientRect: () => new MockDOMRect(50, 60, 220, 480),
      children: [
        {
          children: [
            {
              style: {}, // Mock the necessary style object here
            },
          ],
        },
      ],
    } as unknown as HTMLDivElement;
    target.getBoundingClientRect = () => new MockDOMRect(50, -290, 420, 980);
    TestBed.overrideProvider(HTMLDivElement, { useValue: tooltip });
    TestBed.overrideProvider(HTMLElement, { useValue: target });
    service = TestBed.inject(ZoneAxeService);

    const position = service.axes();

    expect(position.top).toEqual('-296'); // Replace with the expected top value
    expect(position.left).toEqual('486'); // Replace with the expected left
    // value
    expect(renderer2.addClass).toHaveBeenCalledWith(
      tooltip.children[0].children[0],
      'right'
    );
    expect(renderer2.setStyle).toHaveBeenNthCalledWith(
      1,
      tooltip.children[0].children[0],
      'top',
      '-48.75rem'
    );
    // Additional assertions related to this scenario
  });
});
