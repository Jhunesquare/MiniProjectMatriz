import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  size: number = 0;
  matrix!: number[][];
  result: any;

  generateMatrix() {
    this.matrix = Array.from({ length: this.size }, () => Array(this.size).fill(0));
    this.result = null;
  }

  checkProperties() {
    const reflexiva = this.isReflexiva();
    const simetrica = this.isSimetrica();
    const antisimetrica = this.isAntisimetrica();
    const transitiva = this.isTransitiva();

    const equivalencia = reflexiva && simetrica && transitiva;
    const ordenParcial = reflexiva && antisimetrica && transitiva;

    this.result = {
      reflexiva,
      simetrica,
      antisimetrica,
      transitiva,
      equivalencia,
      ordenParcial
    };
  }

  isReflexiva() {
    for (let i = 0; i < this.size; i++) {
      if (this.matrix[i][i] !== 1) {
        return "No";
      }
    }
    return "Si";
  }

  isSimetrica() {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (this.matrix[i][j] !== this.matrix[j][i]) {
          return "No";
        }
      }
    }
    return "Si";
  }

  isAntisimetrica() {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (i !== j && this.matrix[i][j] === 1 && this.matrix[j][i] === 1) {
          return "No";
        }
      }
    }
    return "Si";
  }

  isTransitiva() {
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        if (this.matrix[i][j]) {  // Si A[i][j] es 1
          for (let k = 0; k < this.size; k++) {
            if (this.matrix[j][k]) {  // Si A[j][k] es 1
              if (!this.matrix[i][k]) {  // A[i][k] debe ser 1
                return "No";
              }
            }
          }
        }
      }
    }
    return "Si";
  }
}
