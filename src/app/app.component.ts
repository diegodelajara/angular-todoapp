import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoapp';
  tasks =
    [
      "Revisión de correos y mensajes pendientes",
      "Planificación del día",
      "Trabajo en tareas clave (Deep Work)",
      "Pausa corta",
      "Reuniones o colaboraciones",
      "Tareas rápidas o pendientes menores",
      "Pausa para almuerzo",
      "Desarrollo o aprendizaje",
      "Revisión y ajustes finales",
      "Planificación del próximo día"
    ];
}
