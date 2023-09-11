class InterfaceCalculator {
  constructor(
    private _display = document.getElementById('show_screen') as HTMLInputElement,
  ){
    document.addEventListener('keypress', this.captureKey);
    document.addEventListener('click', this.captureClickKey);
  }

  captureClickKey = (event: MouseEvent) => {
    const element = event.target as HTMLButtonElement;
    if(element.id == 'valor') this.display += element.textContent;
    if(element.id == 'C') this.clearAll();
    if(element.id == '<-') this.clearChar();
    if(element.id == '=') this.showResult();
  }

  captureKey = (key: KeyboardEvent) => {
    if(key.keyCode >= 48 && key.keyCode <=57) 
      this.display += key.key;

    if(key.keyCode == 42 || key.keyCode == 43 || key.keyCode == 45 || key.keyCode == 47)
      this.display += key.key;

    if(key.keyCode == 13 || key.keyCode == 61) 
      this.showResult();
  }

  clearChar(){
    this.display = this.display.slice(0, -1);
    this._display.placeholder = '0';
  }

  clearAll(){
    this.display = '';
    this._display.placeholder = '0';
  }

  showResult() {
    try {
      this.display = eval(this.display);
    } catch(e){
      this.error(e);
      console.log(e)
    }
  }

  error(e: unknown){
    this.display = '';
    this._display.placeholder = 'Calculo nao possivel';
  }

  get display (): string{
    return this._display.value;
  }

  set display(value: string){
    this._display.value = value;
  }
}

const interfaceCalculator = new InterfaceCalculator();
