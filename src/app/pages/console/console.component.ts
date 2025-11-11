import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LogEntry, ConsoleService } from 'src/app/core/services/console.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild('consoleBody') consoleBody!: ElementRef;

  logs: LogEntry[] = [];
  expandido: boolean = false;
  private subscription!: Subscription;
  private autoScroll: boolean = true;

  constructor(private consoleService: ConsoleService) { }

  ngOnInit(): void {
    this.subscription = this.consoleService.logs$.subscribe(logs => {
      this.logs = logs;
    });
  }

  ngAfterViewChecked(): void {
    if (this.autoScroll) {
      this.scrollToBottom();
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getIcone(tipo: string): string {
    const icones: { [key: string]: string } = {
      'log': 'article',
      'info': 'info',
      'warn': 'warning',
      'error': 'cancel',
      'success': 'check_circle'
    };
    return icones[tipo] || 'circle';
  }

  limparConsole(): void {
    this.consoleService.limpar();
  }

  copiarConteudo(): void {
    const conteudo = this.logs
      .map(log => `[${new Date(log.timestamp).toLocaleTimeString()}] ${log.tipo.toUpperCase()}: ${log.mensagem}`)
      .join('\n');

    navigator.clipboard.writeText(conteudo).then(() => {
      this.consoleService.success('Conteúdo copiado para a área de transferência!');
    }).catch(err => {
      this.consoleService.error('Erro ao copiar conteúdo');
      console.error('Erro ao copiar:', err);
    });
  }

  toggleExpandir(): void {
    this.expandido = !this.expandido;
  }

  private scrollToBottom(): void {
    try {
      if (this.consoleBody) {
        this.consoleBody.nativeElement.scrollTop = this.consoleBody.nativeElement.scrollHeight;
      }
    } catch (err) {
      console.error('Erro ao fazer scroll:', err);
    }
  }
}