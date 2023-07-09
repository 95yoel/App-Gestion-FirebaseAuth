import { Injectable } from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';

@Injectable({
  providedIn: 'root'
})
export class PortapelesService {

  constructor() { }

  copiarCredenciales(texto: string): Promise<void> {
    return Clipboard.write({ string: texto });
  }
}
