export default class ScrollSpy {
  public targets: HTMLElement[];
  public refs: HTMLElement[];
  public sensitivity: number;

  constructor(target: HTMLElement, refs: HTMLElement[], sensitivity?: number) {
    this.targets = Array.from(target.querySelectorAll('a'));
    this.refs = refs;
    this.sensitivity = sensitivity || -10;

    window.addEventListener('scroll', () => this.onScroll());
  }

  onScroll() {
    if (!this.isOnTopOfDocument(this.refs[0])) {
      this.deactiveateTarget();
    }

    this.refs.forEach((ref) => {
      if (this.isOnTopOfDocument(ref)) {
        this.deactiveateTarget();
        const target = this.findTarget(ref.id);
        if (target) {
          this.activate(target);
        }
      }
    });
  }

  isOnTopOfDocument(ref: HTMLElement): boolean {
    return (
      document.documentElement.scrollTop - ref.offsetTop >= this.sensitivity
    );
  }

  deactiveateTarget() {
    this.targets.forEach((a) => this.deactivate(a));
  }

  findTarget(id: string): HTMLElement | undefined {
    return this.targets.filter(
      (a) =>
        decodeURIComponent(a.attributes['href'].value.replace(/^#/, '')) === id
    )[0];
  }

  activate(element: HTMLElement) {
    element.classList.add('active');
  }

  deactivate(element: HTMLElement) {
    element.classList.remove('active');
  }
}
